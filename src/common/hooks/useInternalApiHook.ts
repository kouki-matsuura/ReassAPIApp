import axios from 'axios';

const API_ENDPOINT_BASE = import.meta.env.VITE_RESAS_API_ENDPOINT;
const RESAS_API_KEY = import.meta.env.VITE_RESAS_API_KEY;

type Params = {
  [key: string]: string | number;
};

export const useInternalApi = () => {
  const apiClient = axios.create({
    baseURL: API_ENDPOINT_BASE,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': RESAS_API_KEY,
    },
  });

  const get = async (url: string, params?: Params) => {
    try {
      const res = await apiClient.get(url, {
        params: params,
      });
      return res.data.result;
    } catch (error) {
      return error;
    }
  };

  return { get };
};
