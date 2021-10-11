import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  repositories: [
    {
      repoId: 1,
      repoName: 'repo name',
      description: 'Repository Description lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      starsCount: 0,
      repoUrl: 'github.com/repo',
    },
    {
      repoId: 2,
      repoName: 'repo name',
      description: 'Repository Description lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      starsCount: 3,
      repoUrl: 'github.com/repo',
    },
    {
      repoId: 3,
      repoName: 'repo name',
      description: 'Repository Description lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      starsCount: 0,
      repoUrl: 'github.com/repo',
    },
    {
      repoId: 4,
      repoName: 'repo name',
      description: 'Repository Description lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      starsCount: 5,
      repoUrl: 'github.com/repo',
    },
  ],
  hasError: false,
};

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

export const { actions: reposMockActions, reducer: reposMockReducer } = reposSlice;
