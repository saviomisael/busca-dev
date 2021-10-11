import axios from 'axios';
import api from './api';
import { mapUserResponseToProps } from '../utils/mapResponseToProps';

const cancelRequest = axios.CancelToken.source();

export const getUserInfo = async (username) => {
  const response = await api.get(`/users/${username}`, {
    cancelToken: cancelRequest.token,
  });

  return mapUserResponseToProps(response.data);
};

export const cancelGetUserInfo = () => {
  cancelRequest.cancel();
};
