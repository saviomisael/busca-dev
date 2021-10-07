import PropTypes from 'prop-types';
import * as Styled from './styles';

export const StarsCounter = ({ starsCount }) => {
  const hasStars = starsCount > 0;

  return <Styled.StarsCounter hasStars={hasStars}>{starsCount} Estrelas</Styled.StarsCounter>;
};

StarsCounter.propTypes = {
  starsCount: PropTypes.number.isRequired,
};
