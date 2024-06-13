import axios from 'axios';
import * as SecureStore from "expo-secure-store";
const apiUrl = 'http://10.5.222.144:8000';

// Axios instance with interceptors for authenticated requests
const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync('token');
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    // setIsLoggedIn(false)
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      // Handle token refresh logic if necessary
    }
    // setIsLoggedIn(false)
    console.log(error.response.data);
    return Promise.reject(error.response.data);
  }
);

// Separate instance for unauthenticated requests like login
const unauthenticatedApi = axios.create({
  baseURL: apiUrl,
});

export { api, unauthenticatedApi };
