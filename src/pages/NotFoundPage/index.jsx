import { useHistory } from 'react-router-dom';
import * as Styled from './styles';
import { NotFoundMessage } from '../../components/NotFoundMessage';
import { Button } from '../../components/Button';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { usersActions } from '../../store/ducks/users';

export const NotFoundPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersActions.clearUsersState());
  }, [dispatch]);

  const handleButtonClick = () => {
    history.push('/');
  };

  return (
    <Styled.Container>
      <NotFoundMessage />
      <Button onClick={handleButtonClick} size="medium">
        Voltar
      </Button>
    </Styled.Container>
  );
};
