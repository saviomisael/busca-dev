import { mapUserResponseToProps } from './mapResponseToProps';

describe('mapResponseToProps', () => {
  const responseMock = {
    login: 'johndoe',
    id: 1,
    avatar_url: 'avatar.com',
    name: 'John Doe',
    bio: 'bio John Doe',
    blog: 'blogjohndoe.com',
  };

  it('should map user response api to props', () => {
    const result = mapUserResponseToProps(responseMock);

    expect(result.avatar).toEqual(responseMock.avatar_url);
    expect(result.username).toEqual(responseMock.login);
    expect(result.fullname).toEqual(responseMock.name);
    expect(result.bio).toEqual(responseMock.bio);
    expect(result.blog).toEqual(responseMock.blog);
  });
});
