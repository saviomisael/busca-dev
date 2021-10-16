import { useParams } from 'react-router-dom';
import * as Styled from './styles';
import { Sidebar } from './Sidebar';
import { Heading } from '../../components/Heading';
import { MainContent } from './MainContent';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfoThunk } from '../../store/ducks/users';
import { getRepositoriesThunk } from '../../store/ducks/repos';

export const ProfilePage = () => {
  const { username } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfoThunk(username));
    dispatch(getRepositoriesThunk(username));
  }, [username, dispatch]);

  return (
    <Styled.Container>
      <Heading gradient="blue">Perfil</Heading>
      <Styled.Content>
        <Sidebar />
        <MainContent />
      </Styled.Content>
    </Styled.Container>
  );
};
