import axios from 'axios';

export const BASE_URL = 'https://simple-blog-api.crew.red';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
