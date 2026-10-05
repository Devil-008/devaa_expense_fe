import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api'
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data; 
  },
  (error) => {
    return Promise.reject(error.response ? error.response.data : error);
  }
);

export default axiosInstance;