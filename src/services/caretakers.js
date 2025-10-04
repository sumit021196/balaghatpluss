import { supabase } from '../lib/supabaseClient';

export async function fetchCaretakerServices() {
  const { data, error } = await supabase
    .from('caretaker_services')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;

  // Map DB rows to ServiceList shape
  return (data || []).map((row) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    category: 'caretaker',
    price: row.price_range,
    rating: row.rating ?? 4.6,
    reviews: row.reviews ?? 0,
    available: row.available ?? true,
    speciality: row.speciality,
    image: row.image_url || '/assets/caretaker/placeholder.jpg',
  }));
}


