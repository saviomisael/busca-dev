import { uiActions, uiReducer } from './ui';

describe('ui duck', () => {
  const initialState = {
    isLoading: false,
  };

  it('should set isLoading to true', () => {
    const modifiedState = uiReducer(initialState, uiActions.setIsLoading(true));

    expect(modifiedState.isLoading).toBe(true);
  });

  it('should set isLoading to false', () => {
    const modifiedState = uiReducer(initialState, uiActions.setIsLoading(false));

    expect(modifiedState.isLoading).toBe(false);
  });
});
