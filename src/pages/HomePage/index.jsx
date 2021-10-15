import * as Styled from './styles';
import { Heading } from '../../components/Heading';
import { SearchDevForm } from './SearchDevForm';
import { useHistory } from 'react-router-dom';

export const HomePage = () => {
  const history = useHistory();

  const handleSubmit = ({ username }) => {
    if (!username) {
      username = 'saviomisael';
    }

    history.push(`/profile/${username}`);
  };

  return (
    <Styled.Container>
      <Heading gradient="green">Search Devs</Heading>
      <Styled.Main>
        <SearchDevForm onSubmit={handleSubmit} />
      </Styled.Main>
    </Styled.Container>
  );
};
