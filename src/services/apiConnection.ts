import axios from 'axios';

const api = axios.create({
  baseURL: 'https://superheroapi.com/api.php/3492090274140971/',
});

export default api;
