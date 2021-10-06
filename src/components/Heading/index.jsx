import PropTypes from 'prop-types';
import * as Styled from './styles';

export const Heading = ({ children, gradient, as }) => {
  return (
    <Styled.Title gradient={gradient} as={as}>
      {children}
    </Styled.Title>
  );
};

Heading.defaultProps = {
  gradient: null,
  as: 'h1',
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  gradient: PropTypes.oneOf(['blue', 'green']),
  as: PropTypes.oneOf(['h1', 'h5']),
};
