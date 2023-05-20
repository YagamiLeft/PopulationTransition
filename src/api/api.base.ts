import axios, { AxiosRequestConfig } from 'axios';

export const axiosClient = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response?.data),
);
