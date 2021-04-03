import axios from "axios";

const api = axios.create({
  headers: { 'Content-Type': 'text/plain' },
  baseURL: "https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060",
  timeout: 20000
});

export default api;