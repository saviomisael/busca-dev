import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { actions: uiActions, reducer: uiReducer } = uiSlice;
