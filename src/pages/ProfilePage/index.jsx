import * as Styled from './styles';
import { Sidebar } from './Sidebar';
import { Heading } from '../../components/Heading';
import { MainContent } from './MainContent';

export const ProfilePage = () => {
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
