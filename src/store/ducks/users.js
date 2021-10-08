import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserInfo } from '../../services/usersService';

const initialState = {
  userrInfo: {
    avatar: '',
    username: '',
    fullname: '',
    bio: '',
    blog: '',
  },
  userNotFoundStatus: false,
};

export const getUserInfoThunk = createAsyncThunk('users/getUserInfo', async (username, { dispatch }) => {
  try {
    const response = await getUserInfo(username);

    dispatch(usersActions.changeUserInfo(response));
  } catch (error) {
    if (error.response && error.response.status === 404) {
      dispatch(usersActions.updateUserStatus);
    }
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    changeUserInfo: (state, action) => {
      state.userNotFoundStatus = false;
      state.userInfo = action.payload;
    },
    updateUserStatus: (state) => {
      state.userNotFoundStatus = true;
    },
  },
});

export const { actions: usersActions, reducer: usersReducers } = usersSlice;
