import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5500/api',
});

export default API;
