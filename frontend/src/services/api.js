import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timed out. Please try again.');
    }
    if (!error.response) {
      throw new Error('Cannot connect to the server. Please check your connection.');
    }
    if (error.response.status === 429) {
      throw new Error('Too many messages. Please wait a moment and try again.');
    }
    if (error.response.status === 503) {
      throw new Error('AI service is temporarily unavailable. Please try again later.');
    }
    const message = error.response?.data?.detail || 'An unexpected error occurred.';
    throw new Error(message);
  }
);

export const sendMessage = async (message, sessionId) => {
  const response = await api.post('/api/chat', {
    message,
    session_id: sessionId,
  });
  return response.data;
};

export const ingestDocuments = async (forceReingest = false) => {
  const response = await api.post('/api/ingest', {
    force_reingest: forceReingest,
  });
  return response.data;
};

export const getIngestStatus = async () => {
  const response = await api.get('/api/ingest/status');
  return response.data;
};

export const checkHealth = async () => {
  const response = await api.get('/health');
  return response.data;
};

export default api;
