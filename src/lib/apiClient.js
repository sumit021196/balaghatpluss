import axios from 'axios';
import { config, assertRuntimeConfig } from '../config';

assertRuntimeConfig();

export const apiClient = axios.create({
	baseURL: config.apiBaseUrl,
	headers: {
		'Content-Type': 'application/json',
	},
	// withCredentials can be enabled if you need cookies
	// withCredentials: true,
});

// Request interceptor (attach auth headers, request id, etc.)
apiClient.interceptors.request.use((request) => {
	// Example: attach bearer token if available
	// const token = localStorage.getItem('access_token');
	// if (token) {
	// 	request.headers.Authorization = `Bearer ${token}`;
	// }
	return request;
});

// Response interceptor (normalize errors)
apiClient.interceptors.response.use(
	(response) => response,
	(error) => {
		const status = error?.response?.status;
		if (status === 401) {
			// handle unauthorized globally if needed
		}
		return Promise.reject(error);
	}
);

export function createCancelableRequest(controller) {
	return { signal: controller.signal };
}


