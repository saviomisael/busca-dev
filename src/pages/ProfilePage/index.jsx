import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Styled from './styles';
import { Sidebar } from './Sidebar';
import { Heading } from '../../components/Heading';
import { MainContent } from './MainContent';
import { LoadingMessage } from '../../components/LoadingMessage';
import { getUserInfoThunk } from '../../store/ducks/users';
import { getRepositoriesThunk } from '../../store/ducks/repos';

export const ProfilePage = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.ui);
  let title = (
    <Helmet titleTemplate="%s | Busca Dev">
      <title>Perfil</title>
    </Helmet>
  );

  useEffect(() => {
    dispatch(getUserInfoThunk(username));
    dispatch(getRepositoriesThunk(username));
  }, [username, dispatch]);

  if (isLoading) {
    return (
      <Styled.Container>
        {title}
        <LoadingMessage />
      </Styled.Container>
    );
  }

  return (
    <Styled.Container>
      {title}
      <Heading gradient="blue">Perfil</Heading>
      <Styled.Content>
        <Sidebar />
        <MainContent />
      </Styled.Content>
    </Styled.Container>
  );
};
