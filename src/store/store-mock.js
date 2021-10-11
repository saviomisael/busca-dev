import { configureStore } from '@reduxjs/toolkit';
import { usersMockReducer } from './ducks/users-mock';

export const storeMock = configureStore({
  reducer: { users: usersMockReducer },
});
