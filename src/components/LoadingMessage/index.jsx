import { Dots } from './Dots';
import * as Styled from './styles';

export const LoadingMessage = () => {
  return (
    <>
      <Styled.Overlay />
      <Styled.Wrapper>
        <Styled.Message>
          Carregando <Dots />
        </Styled.Message>
      </Styled.Wrapper>
    </>
  );
};
