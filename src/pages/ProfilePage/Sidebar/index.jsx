import * as Styled from './styles';
import { ProfileBox } from '../../../components/ProfileBox';
import { Button } from '../../../components/Button';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const Sidebar = () => {
  const { userInfo } = useSelector((state) => state.users);
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/');
  };

  return (
    <Styled.Wrapper>
      <ProfileBox {...userInfo} />
      <Button onClick={handleButtonClick}>Voltar</Button>
    </Styled.Wrapper>
  );
};
