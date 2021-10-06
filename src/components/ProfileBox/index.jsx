import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const ProfileBox = ({ avatar, username, fullname, bio, blog }) => {
  return (
    <Styled.Container>
      <Styled.Avatar src={avatar} alt={`${username} avatar`} />

      <Styled.ProfileContent>
        <Heading as="h5">@{username}</Heading>
        <TextComponent>{fullname}</TextComponent>

        {bio && <TextComponent>{bio}</TextComponent>}
        {blog && <Styled.Blog href={blog}>{blog}</Styled.Blog>}
      </Styled.ProfileContent>
    </Styled.Container>
  );
};

ProfileBox.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  bio: PropTypes.string,
  blog: PropTypes.string,
};