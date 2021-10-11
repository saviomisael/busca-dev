import { reposReducer } from './repos';

describe('repos duck', () => {
  it('should return initial state', () => {
    const reposState = reposReducer(undefined, {});

    expect(reposState).toEqual({
      repositories: [],
      hasError: false,
    });
  });
});
