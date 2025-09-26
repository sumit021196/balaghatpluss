export function buildWhatsAppUrl({ phoneE164, message }) {
	const base = 'https://wa.me/';
	const text = encodeURIComponent(message || '');
	return `${base}${phoneE164}?text=${text}`;
}

export function openWhatsApp({ phoneE164, message }) {
	const url = buildWhatsAppUrl({ phoneE164, message });
	window.open(url, '_blank');
}


