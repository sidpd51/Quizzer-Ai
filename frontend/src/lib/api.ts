import { useAuth } from "@/context/AuthContext";
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3542/api/v1',
    withCredentials: true
});

export const useApi = () => {
    const { accessToken } = useAuth();

    api.interceptors.request.use((config) => {
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    });

    return api;
}