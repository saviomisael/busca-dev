import { configureStore } from '@reduxjs/toolkit';
import { reposReducer } from './ducks/repos';
import { usersReducer } from './ducks/users';

export const store = configureStore({
  reducer: { users: usersReducer, repos: reposReducer },
});
