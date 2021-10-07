import PropTypes from 'prop-types';
import { StarsCounter } from './StarsCounter';
import * as Styled from './styles';

export const RepoCard = ({ repoName, description, starsCount, repoUrl }) => {
  let content = (
    <>
      <Styled.RepoName href={repoUrl} target="_blank">
        {repoName}
      </Styled.RepoName>
      {description && <Styled.Description>{description}</Styled.Description>}
      <StarsCounter starsCount={starsCount} />
    </>
  );

  return <Styled.Wrapper>{content}</Styled.Wrapper>;
};

RepoCard.defaultProps = {
  description: null,
};

RepoCard.propTypes = {
  repoName: PropTypes.string.isRequired,
  description: PropTypes.string,
  starsCount: PropTypes.number.isRequired,
  repoUrl: PropTypes.string.isRequired,
};
