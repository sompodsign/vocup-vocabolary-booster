import axios from 'axios';

const serverApi = 'shampad.live/api'
const localApi = 'http://localhost:8000/api'

const client = axios.create({
    baseURL: serverApi,
    // baseURL: localApi,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
  });

  export default client;
