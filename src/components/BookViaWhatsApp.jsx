import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, Snackbar, Alert } from '@mui/material';
import BookingForm from './BookingForm';
import { useCreateBooking } from '../services/bookings';
import { openWhatsApp } from '../lib/whatsapp';

export default function BookViaWhatsApp({
	buttonLabel = 'Book via WhatsApp',
	buttonProps,
	type,
	targetId,
	targetName,
	targetSpeciality,
	recipientPhone,
}) {
	const [open, setOpen] = useState(false);
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const createBooking = useCreateBooking();

	async function handleSubmit(form) {
		const payload = {
			type,
			targetId,
			targetName,
			targetSpeciality,
			customerName: form.name,
			customerPhone: form.phone,
			customerEmail: form.email,
			note: form.note,
			preferredTime: form.preferredTime,
		};
		try {
			await createBooking.mutateAsync(payload);
			setSnackbarOpen(true);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error('Supabase insert failed:', e);
			alert('Booking failed');
		}
		const msg = `New Request\nFor: ${targetName}${targetSpeciality ? ` (${targetSpeciality})` : ''}\nName: ${form.name}\nPhone: ${form.phone}${form.email ? `\nEmail: ${form.email}` : ''}${form.preferredTime ? `\nPreferred Time: ${form.preferredTime}` : ''}${form.note ? `\nNote: ${form.note}` : ''}`;
		const phoneE164 = `91${recipientPhone}`;
		openWhatsApp({ phoneE164, message: msg });
		setOpen(false);
	}

	return (
		<>
			<Button variant="contained" onClick={() => { if (document.activeElement && document.activeElement.blur) { document.activeElement.blur(); } setOpen(true); }} {...buttonProps}>
				{buttonLabel}
			</Button>
			<Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
				<DialogTitle>Book {targetName}</DialogTitle>
				<DialogContent>
					<BookingForm defaultValues={{}} submitting={createBooking.isPending} onSubmit={handleSubmit} />
				</DialogContent>
			</Dialog>
			<Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
				<Alert onClose={() => setSnackbarOpen(false)} severity="success" variant="filled" sx={{ width: '100%' }}>
					Booking saved. Opening WhatsApp…
				</Alert>
			</Snackbar>
		</>
	);
}
