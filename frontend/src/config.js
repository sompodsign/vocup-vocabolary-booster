import axios from 'axios';

const client = axios.create({
    baseURL: 'http://20.212.104.33:8000/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
  });

  export default client;
