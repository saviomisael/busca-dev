import { mapUserResponseToProps, mapReposResponseOrderByStarsCount } from './mapResponseToProps';

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

describe('mapReposResponseOrderByStarsCount', () => {
  const reposResponseMock = [
    { id: 1, name: 'repo 1', description: 'description 1', stargazers_count: 0, html_url: 'repo1.com' },
    { id: 2, name: 'repo 2', description: 'description 2', stargazers_count: 3, html_url: 'repo2.com' },
    { id: 3, name: 'repo 3', description: 'description 3', stargazers_count: 2, html_url: 'repo3.com' },
  ];

  it('should map repositories response to props', () => {
    const result = mapReposResponseOrderByStarsCount([reposResponseMock[0]]);

    expect(result[0].repoId).toBe(1);
    expect(result[0].repoName).toEqual('repo 1');
    expect(result[0].description).toEqual('description 1');
    expect(result[0].starsCount).toEqual(0);
    expect(result[0].repoUrl).toEqual('repo1.com');
  });

  it('should map repositories response order by starsCount', () => {
    const result = mapReposResponseOrderByStarsCount(reposResponseMock);

    expect(result[0].starsCount).toBe(3);
    expect(result[1].starsCount).toBe(2);
    expect(result[2].starsCount).toBe(0);
  });
});
