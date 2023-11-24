import axios from "axios";
// https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060;

const api = axios.create({
    baseURL: 'https://my.api.mockaroo.com/lestetelecom/'
});

export default api;