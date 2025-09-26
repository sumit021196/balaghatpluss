import { useMutation } from '@tanstack/react-query';
import { supabase } from '../lib/supabaseClient';

export async function createBooking(payload) {
	// Map camelCase payload to snake_case DB columns
	const row = {
		type: payload.type,
		target_id: payload.targetId,
		target_name: payload.targetName,
		target_speciality: payload.targetSpeciality,
		customer_name: payload.customerName,
		customer_phone: payload.customerPhone,
		customer_email: payload.customerEmail,
		preferred_time: payload.preferredTime,
		note: payload.note,
		// Temporary: also populate legacy columns without underscores to satisfy existing NOT NULL constraints
		customername: payload.customerName,
		customerphone: payload.customerPhone,
	};
	const { error } = await supabase
		.from('bookings')
		.insert(row);
	if (error) {
		throw error;
	}
	return { success: true };
}

export function useCreateBooking(options) {
	return useMutation({
		mutationKey: ['createBooking'],
		mutationFn: createBooking,
		...options,
	});
}
