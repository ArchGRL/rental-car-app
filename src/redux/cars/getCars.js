import { instance } from '../../services/movie-api';

export const getCars = async (page, limit = 8) => {
  const response = await instance.get(`cars?p=${page}&limit=${limit}`);
  return response;
};
