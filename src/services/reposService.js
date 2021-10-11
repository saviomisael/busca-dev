import axios from 'axios';
import api from './api';
import { mapReposResponseOrderByStarsCount } from '../utils/mapResponseToProps';

const cancelRequest = axios.CancelToken.source();

export const getReposByUsernameOrderByStarsCount = async (username) => {
  const response = await api.get(`/users/${username}/repos`, {
    cancelToken: cancelRequest.token,
  });

  return mapReposResponseOrderByStarsCount(response.data);
};

export const cancelGetRepos = () => {
  cancelRequest.cancel();
};
