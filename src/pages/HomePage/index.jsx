import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import * as Styled from './styles';
import { Heading } from '../../components/Heading';
import { SearchDevForm } from './SearchDevForm';
import { uiActions } from '../../store/ducks/ui';

export const HomePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = ({ username }) => {
    if (!username) {
      username = 'saviomisael';
    }

    dispatch(uiActions.setIsLoading(true));
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
