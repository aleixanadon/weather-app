import axios, { type AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    appid: import.meta.env.VITE_API_KEY,
  }
});

// api.interceptors.request.use((config) => {
//   // Construimos la URL final manualmente para depuración
//   const fullUrl = `${config.baseURL}${config.url}?${new URLSearchParams(
//     config.params as Record<string, string>
//   ).toString()}`;

//   console.log("🌐 Request URL:", fullUrl);
//   return config;
// });

export default api;