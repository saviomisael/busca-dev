import { configureStore } from '@reduxjs/toolkit';
import { reposReducer } from './ducks/repos';
import { usersReducer } from './ducks/users';
import { uiReducer } from './ducks/ui';

export const store = configureStore({
  reducer: { users: usersReducer, repos: reposReducer, ui: uiReducer },
});
