import axios from 'axios';


const api = axios.create({
    baseURL: 'http://192.168.1.111:1000'
});

export default api;