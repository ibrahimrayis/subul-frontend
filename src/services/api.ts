// API configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// Generic API request handler
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = localStorage.getItem('authToken');
  
  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Request failed:', error);
    throw error;
  }
}

// API methods
export const api = {
  // Auth
  login: (credentials: { email: string; password: string }) =>
    apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),
  
  logout: () => apiRequest('/auth/logout', { method: 'POST' }),
  
  // Dashboard
  getDashboardStats: () => apiRequest('/dashboard/stats'),
  
  // Users
  getUsers: (params?: { page?: number; limit?: number }) =>
    apiRequest(`/users?${new URLSearchParams(params as Record<string, string>)}`),
  
  getUser: (id: string) => apiRequest(`/users/${id}`),
  
  createUser: (data: unknown) =>
    apiRequest('/users', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  updateUser: (id: string, data: unknown) =>
    apiRequest(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  
  deleteUser: (id: string) =>
    apiRequest(`/users/${id}`, { method: 'DELETE' }),
  
  // Merchants
  getMerchants: (params?: { page?: number; limit?: number }) =>
    apiRequest(`/merchants?${new URLSearchParams(params as Record<string, string>)}`),
  
  getMerchant: (id: string) => apiRequest(`/merchants/${id}`),
  
  // Products
  getProducts: (params?: { page?: number; limit?: number }) =>
    apiRequest(`/products?${new URLSearchParams(params as Record<string, string>)}`),
  
  getProduct: (id: string) => apiRequest(`/products/${id}`),
  
  // Orders
  getOrders: (params?: { page?: number; limit?: number; status?: string }) =>
    apiRequest(`/orders?${new URLSearchParams(params as Record<string, string>)}`),
  
  getOrder: (id: string) => apiRequest(`/orders/${id}`),
  
  // Delivery
  getDeliveries: (params?: { page?: number; limit?: number; status?: string }) =>
    apiRequest(`/deliveries?${new URLSearchParams(params as Record<string, string>)}`),
  
  getDelivery: (id: string) => apiRequest(`/deliveries/${id}`),
  
  // Payments
  getPayments: (params?: { page?: number; limit?: number; status?: string }) =>
    apiRequest(`/payments?${new URLSearchParams(params as Record<string, string>)}`),
  
  getPayment: (id: string) => apiRequest(`/payments/${id}`),
  
  // Notifications
  getNotifications: (params?: { page?: number; limit?: number; read?: boolean }) =>
    apiRequest(`/notifications?${new URLSearchParams(params as Record<string, string>)}`),
  
  markNotificationRead: (id: string) =>
    apiRequest(`/notifications/${id}/read`, { method: 'PUT' }),
};

export default api;
