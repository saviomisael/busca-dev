import { reposActions, reposReducer } from './repos';

describe('repos duck', () => {
  const initialState = {
    repositories: [],
    hasError: false,
  };

  it('should return initial state', () => {
    const reposState = reposReducer(undefined, {});

    expect(reposState).toEqual(initialState);
  });

  it('should insert repositories when dispatch inserRepositories', () => {
    const payload = [{ id: 1, name: 'repo 1', description: 'description 1', stargazers_count: 0, url: 'repo1.com' }];

    const reposState = reposReducer(initialState, reposActions.insertRepositories(payload));

    expect(reposState).toEqual({
      repositories: [{ id: 1, name: 'repo 1', description: 'description 1', stargazers_count: 0, url: 'repo1.com' }],
      hasError: false,
    });
  });

  it('should change hasError to true when dispatch updateHasError', () => {
    const reposState = reposReducer(initialState, reposActions.updateHasError());

    expect(reposState.hasError).toBe(true);
  });
});
