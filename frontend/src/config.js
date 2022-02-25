import axios from 'axios';

// let serverApi = 'http://13.72.98.186:80/api';
// const localApi = 'http://192.168.31.18:80/api'

const client = axios.create({
    // baseURL: serverApi,
    baseURL: process.env.API,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
  });

  export default client;
