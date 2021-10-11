import * as Styled from './styles';
import { ProfileBox } from '../../../components/ProfileBox';
import { Button } from '../../../components/Button';
import { useSelector } from 'react-redux';

export const Sidebar = () => {
  const { userInfo } = useSelector((state) => state.users);

  const handleButtonClick = () => {};

  return (
    <Styled.Wrapper>
      <ProfileBox {...userInfo} />
      <Button onClick={handleButtonClick}>Voltar</Button>
    </Styled.Wrapper>
  );
};
