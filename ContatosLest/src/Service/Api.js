import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060'
});

export default Api;