import axios from 'axios';

const instance = axios.create({ baseURL: '/api' });

instance.interceptors.response.use(
  (response) => response.data.data,
  (error) => {
    console.error('API Error:', error.response?.data?.message || 'Unknown Error');
    return Promise.reject(error);
  }
);

export default instance;