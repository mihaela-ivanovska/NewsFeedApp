import axios from 'axios';
const BASE_URL = 'https://newsapi.org/v2/';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'X-Api-key': 'f62ccc50a9b7489d91bacbd6a217d80c',
  },
});