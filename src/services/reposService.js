import api from './api';
import { mapReposResponseOrderByStarsCount } from '../utils/mapResponseToProps';

export const getReposByUsernameOrderByStarsCount = async (username) => {
  const response = await api.get(`/users/${username}/repos`, {});

  return mapReposResponseOrderByStarsCount(response.data);
};
