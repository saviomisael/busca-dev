export const mapUserResponseToProps = (response) => {
  const { avatar_url, login, name, bio, blog } = response;

  return { avatar: avatar_url, username: login, fullname: name, bio, blog };
};

const mapSingleRepoResponseToProps = (singleRepo) => {
  const { id, name, description, stargazers_count, url } = singleRepo;

  return { repoId: id, repoName: name, description, starsCount: stargazers_count, repoUrl: url };
};

export const mapReposResponseOrderByStarsCount = (response) => {
  return response
    .map((x) => mapSingleRepoResponseToProps(x))
    .sort((a, b) => {
      return a.starsCount - b.starsCount;
    });
};
