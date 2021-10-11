import { configureStore } from '@reduxjs/toolkit';
import { reposMockReducer } from './ducks/repos-mock';
import { usersMockReducer } from './ducks/users-mock';

export const storeMock = configureStore({
  reducer: { users: usersMockReducer, repos: reposMockReducer },
});
