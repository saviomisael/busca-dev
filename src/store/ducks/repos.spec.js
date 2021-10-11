import { reposActions, reposReducer } from './repos';

describe('repos duck', () => {
  it('should return initial state', () => {
    const reposState = reposReducer(undefined, {});

    expect(reposState).toEqual({
      repositories: [],
      hasError: false,
    });
  });

  it('should insert repositories when dispatch inserRepositories', () => {
    const initialState = {
      repositories: [],
      hasError: false,
    };

    const payload = [{ id: 1, name: 'repo 1', description: 'description 1', stargazers_count: 0, url: 'repo1.com' }];

    const reposState = reposReducer(initialState, reposActions.insertRepositories(payload));

    expect(reposState).toEqual({
      repositories: [{ id: 1, name: 'repo 1', description: 'description 1', stargazers_count: 0, url: 'repo1.com' }],
      hasError: false,
    });
  });
});
