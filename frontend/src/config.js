import axios from 'axios';

let serverApi = 'https://shampad.live/api';
// const localApi = 'http://192.168.31.38:80/api'
//
const client = axios.create({
    baseURL: serverApi,
    // baseURL: localApi,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
  });

  export default client;
