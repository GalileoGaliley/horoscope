import axios from 'axios';

const baseURL = 'https://api.astropulse.app/';

const axiosInstance = axios.create({
  baseURL,
});

export { axiosInstance };
