import axios from "axios";

const baseURL = 'http://localhost:3000/api';
const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  }
});

//Request interceptor
axiosClient.interceptors.request.use((config) => config, (error) => Promise.reject(error));

//Response interceptor
axiosClient.interceptors.response.use((response) => {
  if (response && response.data && response.data.metaData) {
    return response.data.metaData;
  }
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default axiosClient;