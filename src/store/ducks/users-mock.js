import { createSlice } from '@reduxjs/toolkit';
import Image from '../../assets/images/person_white.svg';

const initialState = {
  userInfo: {
    avatar: Image,
    username: 'johndoe',
    fullname: 'John Doe',
    bio: 'bio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    blog: 'blog.com',
  },
  userNotFoundStatus: false,
};

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

export const { actions: usersMockActions, reducer: usersMockReducer } = usersSlice;
