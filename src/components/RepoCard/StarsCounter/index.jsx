import PropTypes from 'prop-types';
import * as Styled from './styles';
import StarEmpty from '../../../assets/images/star_empty.svg';
import StarFilled from '../../../assets/images/star_fill.svg';

export const StarsCounter = ({ starsCount }) => {
  const hasStars = starsCount > 0;
  const icon = hasStars ? StarFilled : StarEmpty;

  return (
    <Styled.Wrapper>
      <Styled.Icon src={icon} alt="star icon" />
      <Styled.StarsCounter hasStars={hasStars}>{starsCount} Estrelas</Styled.StarsCounter>
    </Styled.Wrapper>
  );
};

StarsCounter.propTypes = {
  starsCount: PropTypes.number.isRequired,
};
