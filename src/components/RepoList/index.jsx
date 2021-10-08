import PropTypes from 'prop-types';
import * as Styled from './styles';
import { RepoCard } from '../RepoCard';

export const RepoList = ({ repositories }) => {
  let content = repositories.length === 0 && (
    <Styled.ListEmptyMessage>Este usuário não possui repositórios</Styled.ListEmptyMessage>
  );

  if (repositories.length > 0) {
    content = (
      <Styled.List>
        {repositories.map(({ repoId, ...rest }) => (
          <Styled.Item key={repoId}>
            <RepoCard {...rest} />
          </Styled.Item>
        ))}
      </Styled.List>
    );
  }

  return <>{content}</>;
};

RepoList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      repoId: PropTypes.number.isRequired,
      repoName: PropTypes.string.isRequired,
      description: PropTypes.string,
      starsCount: PropTypes.number.isRequired,
      repoUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
