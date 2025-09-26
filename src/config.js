// Centralized runtime configuration for the app

// Vite exposes env vars via import.meta.env
// Ensure variables are prefixed with VITE_ to be available in the client bundle.
const apiBaseUrl = import.meta.env.VITE_API_URL || '';

export const config = {
	apiBaseUrl,
};

export function assertRuntimeConfig() {
	if (!config.apiBaseUrl) {
		console.error('Missing VITE_API_URL. Set it in your environment or .env files.');
	}
}


