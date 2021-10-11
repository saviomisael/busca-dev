import { usersActions, usersReducer } from './users';

describe('users duck', () => {
  const initialState = {
    userInfo: {
      avatar: '',
      username: '',
      fullname: '',
      bio: '',
      blog: '',
    },
    userNotFoundStatus: false,
  };

  it('should return the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual(initialState);
  });

  it('should change user info', () => {
    const payload = {
      avatar: 'avatar.png',
      username: 'johndoe',
      fullname: 'John Doe',
      bio: 'bio',
      blog: 'blog.com',
    };

    expect(usersReducer(initialState, usersActions.changeUserInfo(payload))).toEqual({
      userInfo: {
        avatar: 'avatar.png',
        username: 'johndoe',
        fullname: 'John Doe',
        bio: 'bio',
        blog: 'blog.com',
      },
      userNotFoundStatus: false,
    });
  });
});
