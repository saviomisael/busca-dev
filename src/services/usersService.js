import api from './api';
import { mapUserResponseToProps } from '../utils/mapResponseToProps';

export const getUserInfo = async (username) => {
  try {
    const response = await api.get(`/users/${username}`, {});

    return mapUserResponseToProps(response.data);
  } catch (error) {
    if (error.response.status && error.response.status === 404) {
      return { ...error.response };
    }
  }
};
