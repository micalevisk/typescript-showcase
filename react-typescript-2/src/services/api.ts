import axios from 'axios';

// using the fake api https://jsonplaceholder.typicode.com
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default api;
