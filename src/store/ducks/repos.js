import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getReposByUsernameOrderByStarsCount } from '../../services/reposService';

const initialState = {
  repositories: [],
  hasError: false,
};

export const getRepositoriesThunk = createAsyncThunk('repos/getRepositories', async (username, { dispatch }) => {
  try {
    const repositories = await getReposByUsernameOrderByStarsCount(username);
    dispatch(reposActions.insertRepositories(repositories));
  } catch (error) {
    dispatch(reposActions.updateHasError());
  }
});

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    insertRepositories: (state, action) => {
      state.hasError = false;
      state.repositories = action.payload;
    },
    updateHasError: (state) => {
      state.hasError = true;
    },
  },
});

export const { actions: reposActions, reducer: reposReducer } = reposSlice;
