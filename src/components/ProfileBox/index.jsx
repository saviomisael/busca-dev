import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const ProfileBox = ({ avatar, username, fullname, bio, blog }) => {
  const alt = `${username} avatar`;

  return (
    <Styled.Container>
      <Styled.Avatar src={avatar} alt={alt} />

      <Styled.ProfileContent>
        <Heading as="h5">@{username}</Heading>
        <TextComponent>{fullname}</TextComponent>

        {bio && <TextComponent>{bio}</TextComponent>}
        {blog && (
          <Styled.Blog href={blog} target="_blank" rel="noopener">
            {blog}
          </Styled.Blog>
        )}
      </Styled.ProfileContent>
    </Styled.Container>
  );
};

ProfileBox.defaultProps = {
  bio: null,
  blog: null,
};

ProfileBox.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  bio: PropTypes.string,
  blog: PropTypes.string,
};
