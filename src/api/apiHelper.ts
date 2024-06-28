import axios, { AxiosRequestConfig } from 'axios';

type TMethod = 'get' | 'post' | 'put' | 'delete';

const baseURL = import.meta.env.VITE_API_URL;

const apiHelper = async (method: TMethod, url: string, ...args: AxiosRequestConfig[]) => {
  try {
    const response = await axios({
      method,
      url: `${baseURL}/${url}`,
      headers: {
        'Content-Type': 'application/json',
      },
      ...args,
    });

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
