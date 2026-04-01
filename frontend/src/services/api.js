import axios from "axios";

// ✅ Correct base URL (no trailing slash)
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000";

const api = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ------------------------
// REQUEST INTERCEPTOR
// ------------------------

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// ------------------------
// RESPONSE INTERCEPTOR
// ------------------------

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      throw new Error("Request timed out. Try again.");
    }

    if (!error.response) {
      throw new Error("Server not reachable. Check connection.");
    }

    if (error.response.status === 429) {
      throw new Error("Too many requests. Slow down.");
    }

    if (error.response.status === 503) {
      throw new Error("AI service unavailable. Try again later.");
    }

    const message =
      error.response?.data?.detail ||
      "Something went wrong.";

    throw new Error(message);
  }
);

// ------------------------
// CHAT API
// ------------------------

export const sendMessage = async (message, sessionId) => {
  const response = await api.post("/chat", {
    message,
    session_id: sessionId,
  });

  return response.data; // { response, session_id, sources }
};

// ------------------------
// HEALTH CHECK
// ------------------------

export const checkHealth = async () => {
  const response = await api.get("/health");
  return response.data;
};

// ------------------------
// OPTIONAL: INGEST (if you still use it)
// ------------------------

export const ingestDocuments = async (forceReingest = false) => {
  const response = await api.post("/ingest", {
    force_reingest: forceReingest,
  });
  return response.data;
};

export const getIngestStatus = async () => {
  const response = await api.get("/ingest/status");
  return response.data;
};

export default api;