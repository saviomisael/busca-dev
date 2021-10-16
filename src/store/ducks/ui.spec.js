import { uiActions, uiReducer } from './ui';

describe('ui duck', () => {
  it('should set isLoading to true', () => {
    const initialState = {
      isLoading: false,
    };

    const modifiedState = uiReducer(initialState, uiActions.setIsLoading(true));

    expect(modifiedState.isLoading).toBe(true);
  });
});
