import * as Styled from './styles';
import { Heading } from '../../components/Heading';
import { SearchDevForm } from './SearchDevForm';

export const HomePage = () => {
  const handleSubmit = ({ username }) => {
    console.log(username);
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
