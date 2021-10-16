import * as Styled from './styles';

export const NotFoundMessage = () => {
  return (
    <Styled.MessageWrapper>
      <Styled.MessageFlicked>
        Erro <Styled.TextGlow>404</Styled.TextGlow>
      </Styled.MessageFlicked>
      <Styled.MessageSubtitle>
        <Styled.TextGlow>Oops</Styled.TextGlow>, conteúdo não encontrado!
      </Styled.MessageSubtitle>
    </Styled.MessageWrapper>
  );
};
