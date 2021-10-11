import { useSelector } from 'react-redux';
import * as Styled from './styles';
import { RepoList } from '../../../components/RepoList';

export const MainContent = () => {
  const { repositories } = useSelector((state) => state.repos);

  return (
    <Styled.Main>
      <RepoList repositories={repositories} />
    </Styled.Main>
  );
};
