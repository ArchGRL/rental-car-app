import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://649fd83ced3c41bdd7a6c1f2.mockapi.io/',
});