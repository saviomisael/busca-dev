import { uiActions, uiReducer } from './ui';

describe('ui duck', () => {
  it('should set isLoading to true', () => {
    const initialState = {
      isLoading: false,
    };

    const modifiedState = uiReducer(initialState, uiActions.setIsLoading(true));

    expect(modifiedState.isLoading).toBe(true);
  });

  it('should set isLoading to false', () => {
    const initialState = {
      isLoading: false,
    };

    const modifiedState = uiReducer(initialState, uiActions.setIsLoading(false));

    expect(modifiedState.isLoading).toBe(false);
  });
});
