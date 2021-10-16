import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserInfo } from '../../services/usersService';

const initialState = {
  userInfo: {
    avatar: '',
    username: '',
    fullname: '',
    bio: '',
    blog: '',
  },
  userNotFoundStatus: false,
};

export const getUserInfoThunk = createAsyncThunk('users/getUserInfo', async (username, { dispatch }) => {
  const response = await getUserInfo(username);

  if (!response.status) {
    dispatch(usersActions.changeUserInfo(response));
  }

  if (response.status && response.status === 404) {
    dispatch(usersActions.updateUserStatus());
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
    clearUsersState: (state) => {
      state.userInfo = {
        avatar: '',
        username: '',
        fullname: '',
        bio: '',
        blog: '',
      };
      state.userNotFoundStatus = false;
    },
  },
});

export const { actions: usersActions, reducer: usersReducer } = usersSlice;
