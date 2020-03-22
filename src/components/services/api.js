import axios from 'axios';

const api = axios.create({
    
     baseURL: 'https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060'


//  baseURL: 'https://my.api.mockaroo.com/usercomimagem.json?key=609f0780'
});

export default api;