import PropTypes from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children, smallText }) => {
  return <Styled.Text smallText={smallText}>{children}</Styled.Text>;
};

TextComponent.defaultProps = {
  smallText: false,
};

TextComponent.propTypes = {
  children: PropTypes.node.isRequired,
  smallText: PropTypes.bool,
};
