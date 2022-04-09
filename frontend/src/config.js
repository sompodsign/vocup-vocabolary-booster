import axios from 'axios';

// const serverApi = 'http://13.72.98.186:8000/api'
const localApi = 'http://192.168.31.18:8000/api'

const client = axios.create({
    baseURL: serverApi,
    // baseURL: localApi,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
  });

  export default client;
