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
    const usersStateMutated = usersReducer(undefined, {});

    expect(usersStateMutated).toEqual(initialState);
  });

  it('should change user info', () => {
    const payload = {
      avatar: 'avatar.png',
      username: 'johndoe',
      fullname: 'John Doe',
      bio: 'bio',
      blog: 'blog.com',
    };

    const usersStateMutated = usersReducer(initialState, usersActions.changeUserInfo(payload));

    expect(usersStateMutated).toEqual({
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

  it('should update user not found to true', () => {
    const usersStateMutated = usersReducer(initialState, usersActions.updateUserStatus());

    expect(usersStateMutated.userNotFoundStatus).toBe(true);
  });

  it('should clear users state', () => {
    const usersStateMutated = usersReducer(initialState, usersActions.clearUsersState());

    expect(usersStateMutated).toEqual({
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
