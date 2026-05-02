import axios, { type AxiosInstance } from "axios";


export const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
});

api.interceptors.request.use((config) => {
    if (config.headers) {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});