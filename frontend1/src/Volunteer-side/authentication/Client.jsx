import axios from 'axios';
import { useAuth } from './AuthContext.jsx';

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1`,
});

const AuthenticatedAxios = () => {
    const { isLoggedIn, isAdminLoggedIn } = useAuth();

    const getAuthConfig = () => {
        const token = localStorage.getItem("access_token");
        if (token) {
            return {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
        } else {
            return {};
        }
    };

    const getRequestConfig = () => {
        const config = getAuthConfig();
        return {
            ...config,
            headers: {
                ...config.headers,
                'Content-Type': 'application/json'
            }
        };
    };

    return {
        get: (url) => axiosInstance.get(url, getRequestConfig()),
        post: (url, data) => axiosInstance.post(url, data, getRequestConfig()),
        put: (url, data) => axiosInstance.put(url, data, getRequestConfig()),
        delete: (url) => axiosInstance.delete(url, getRequestConfig())
    };
};

export const useAuthenticatedAxios = AuthenticatedAxios;

export const getVolunteers = async () => {
    try {
        const response = await AuthenticatedAxios().get('/volunteers');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const saveVolunteer = async (volunteer) => {
    try {
        const response = await AuthenticatedAxios().post('/volunteers', volunteer);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateVolunteer = async (id, update) => {
    try {
        const response = await AuthenticatedAxios().put(`/volunteers/${id}`, update);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteVolunteer = async (id) => {
    try {
        const response = await AuthenticatedAxios().delete(`/volunteers/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getOpportunities = async () => {
    try {
        const response = await AuthenticatedAxios().get('/opportunities');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const saveOpportunity = async (opportunity) => {
    try {
        const response = await AuthenticatedAxios().post('/opportunities', opportunity);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateOpportunity = async (id, update) => {
    try {
        const response = await AuthenticatedAxios().put(`/opportunities/${id}`, update);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteOpportunity = async (id) => {
    try {
        const response = await AuthenticatedAxios().delete(`/opportunities/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const login = async (usernameAndPassword) => {
    try {
        const response = await axiosInstance.post('/auth/login', usernameAndPassword);
        return response.data;
    } catch (error) {
        throw error;
    }
};

