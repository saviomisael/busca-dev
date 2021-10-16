import * as Styled from './styles';
import { NotFoundMessage } from '../../components/NotFoundMessage';

export const NotFoundPage = () => {
  return (
    <Styled.Container>
      <NotFoundMessage />
    </Styled.Container>
  );
};
