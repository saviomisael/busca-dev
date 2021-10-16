import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Styled from './styles';
import { Heading } from '../../components/Heading';
import { SearchDevForm } from './SearchDevForm';

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
      <Helmet titleTemplate="%s | Busca Dev">
        <title>Home</title>
      </Helmet>
      <Heading gradient="green">Search Devs</Heading>
      <Styled.Main>
        <SearchDevForm onSubmit={handleSubmit} />
      </Styled.Main>
    </Styled.Container>
  );
};
