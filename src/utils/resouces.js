import axios from 'axios';

const URL_API = 'https://my.api.mockaroo.com';

const api = axios.create({
  baseURL: URL_API,
});

export default api;