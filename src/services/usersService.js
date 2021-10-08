import api from './api';
import { mapUserResponseToProps } from '../utils/mapResponseToProps';

export const getUserInfo = async (username) => {
  const response = await api.get(`/users/${username}`);

  return mapUserResponseToProps(response);
};
