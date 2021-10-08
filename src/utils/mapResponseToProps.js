export const mapUserResponseToProps = (response) => {
  const { avatar_url, login, name, bio, blog } = response;

  return { avatar: avatar_url, username: login, fullname: name, bio, blog };
};
