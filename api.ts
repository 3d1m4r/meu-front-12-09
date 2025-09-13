// API configuration for frontend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  CHECKOUT: `${API_BASE_URL}/api/checkout`,
  PAYMENT_CHECK: (pixId: string) => `${API_BASE_URL}/api/payment/check/${pixId}`,
  HEALTH: `${API_BASE_URL}/health`
};

// Helper function for API requests
export const apiRequest = async (url: string, options: RequestInit = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};