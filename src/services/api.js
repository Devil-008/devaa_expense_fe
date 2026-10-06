import axios from 'axios';

const api = axios.create({
    baseURL: '/api'
});

api.interceptors.response.use(
    (response) => {
        // Unwrap standard envelope
        return response.data.data;
    },
    (error) => {
        return Promise.reject(error.response?.data || error);
    }
);

export default api;