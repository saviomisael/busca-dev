import { usersActions, usersReducer } from './users';

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

  it('should change user info', () => {
    const previousState = {
      userInfo: {
        avatar: '',
        username: '',
        fullname: '',
        bio: '',
        blog: '',
      },
      userNotFoundStatus: false,
    };

    const payload = {
      avatar: 'avatar.png',
      username: 'johndoe',
      fullname: 'John Doe',
      bio: 'bio',
      blog: 'blog.com',
    };

    expect(usersReducer(previousState, usersActions.changeUserInfo(payload))).toEqual({
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
