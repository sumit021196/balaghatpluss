import React, { useState } from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';

const initialState = {
	name: '',
	phone: '',
	email: '',
	note: '',
	preferredTime: '',
};

export default function BookingForm({ defaultValues, onSubmit, submitting }) {
	const [form, setForm] = useState({ ...initialState, ...defaultValues });

	function handleChange(event) {
		const { name, value } = event.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (!onSubmit) return;
		onSubmit(form);
	}

	return (
		<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField name="name" label="Your Name" value={form.name} onChange={handleChange} fullWidth required />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField name="phone" label="Phone" value={form.phone} onChange={handleChange} fullWidth required inputProps={{ inputMode: 'tel' }} />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField name="email" label="Email (optional)" value={form.email} onChange={handleChange} fullWidth />
				</Grid>
				<Grid item xs={12}>
					<TextField name="preferredTime" label="Preferred Time" value={form.preferredTime} onChange={handleChange} fullWidth />
				</Grid>
				<Grid item xs={12}>
					<TextField name="note" label="Notes" value={form.note} onChange={handleChange} fullWidth multiline rows={3} />
				</Grid>
				<Grid item xs={12}>
					<Button type="submit" variant="contained" disabled={submitting}>
						{submitting ? 'Booking…' : 'Book'}
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
}


