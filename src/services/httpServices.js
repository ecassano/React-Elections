import axios from 'axios';

const BASE_URL = 'http://localhost:3001/';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export async function getData(url) {
  const data = await instance.get(url);
  return data;
}
