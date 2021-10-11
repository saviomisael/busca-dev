import { usersReducer } from './users';

describe('users duck', () => {
  it('should return the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual({
      userInfo: {
        avatar: '',
        username: '',
        fullname: '',
        bio: '',
        blog: '',
      },
      userNotFoundStatus: false,
    });
  });
});
