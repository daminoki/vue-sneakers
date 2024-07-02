import axios, { AxiosRequestConfig } from 'axios';

type TMethod = 'get' | 'post' | 'patch' | 'delete';

const baseURL = import.meta.env.VITE_API_URL;

const apiHelper = async (method: TMethod, url: string, ...args: (AxiosRequestConfig | unknown)[]) => {
  try {
    const response = await axios[method](`${baseURL}/${url}`, ...args as AxiosRequestConfig[]);

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error during API request:', error);

      return {
        data: null,
        error: error.message,
      };
    }

    console.error('Error during API request:', error);

    return {
      data: null,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

export default apiHelper;
