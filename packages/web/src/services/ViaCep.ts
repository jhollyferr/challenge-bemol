import axios from "axios";

export const viaCepApi = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
    headers: {
      'Content-Type': 'application/json',
    },
    transformRequest: [
      (data) => {
        return JSON.stringify(data);
      },
    ],
    transformResponse: [
      (data) => {
        return JSON.parse(data);
      },
    ],
  });