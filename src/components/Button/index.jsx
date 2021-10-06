import PropTypes from 'prop-types';
import * as Styled from './styles';

export const Button = ({ children, onClick, size }) => {
  return (
    <Styled.Button onClick={onClick} size={size}>
      {children}
    </Styled.Button>
  );
};

Button.defaultProps = {
  size: 'large',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['large', 'medium']),
};
