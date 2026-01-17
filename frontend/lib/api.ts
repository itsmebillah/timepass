import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Health check
export const checkHealth = async () => {
  try {
    const response = await api.get('/api/health');
    return response.data;
  } catch (error) {
    console.error('Health check failed:', error);
    throw error;
  }
};

// Subscription plans
export const getSubscriptionPlans = async () => {
  try {
    const response = await api.get('/api/subscriptions/plans');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch plans:', error);
    throw error;
  }
};

// Auth functions (placeholder)
export const registerUser = async (userData: any) => {
  try {
    const response = await api.post('/api/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

export const loginUser = async (credentials: any) => {
  try {
    const response = await api.post('/api/auth/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

// Payment functions (placeholder)
export const createCheckoutSession = async (planId: string) => {
  try {
    const response = await api.post('/api/payment/create-checkout', { planId });
    return response.data;
  } catch (error) {
    console.error('Checkout session creation failed:', error);
    throw error;
  }
};

export default api;
