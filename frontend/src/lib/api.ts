import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router";

const api = axios.create({
    baseURL: 'http://localhost:3542/api/v1',
    withCredentials: true
});

export const useApi = () => {
    const { accessToken, setAccessToken } = useAuth();
    const navigate = useNavigate();

    // Request interceptor: Add Authorization header
    api.interceptors.request.use((config) => {
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    });

    api.interceptors.response.use(
        (response) => {
            const newAccessToken = response.headers["x-new-access-token"];
            console.log("Before accessToken: ", accessToken);
            if (newAccessToken) {
                setAccessToken(newAccessToken);
                console.log("After accessToken: ", accessToken);
            }
            return response;
        },
        (error) => {
            const status = error.response?.status;

            if (status === 401) navigate("/unauthorized")
            else if (status === 403) navigate("/forbidden")
            else if (status === 404) navigate("/not-found")
            else navigate('/error')

            return Promise.reject(error);
        }
    );

    return api;
}