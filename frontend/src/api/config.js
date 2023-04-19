import axios from "axios";

const PORT = 3005;

const api = axios.create({
  baseURL: `http://localhost:${PORT}/`,
  headers: { 'Content-Type': 'application/json' }
});

export default api;
