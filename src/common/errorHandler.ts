import { AxiosError } from 'axios';

const errorHandler = async (err: AxiosError) => {
  console.error(err);
};

export default errorHandler;
