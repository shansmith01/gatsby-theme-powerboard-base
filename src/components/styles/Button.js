import styled from 'styled-components';
import {
  buttonStyle, space, border, layout,
} from 'styled-system';

const Button = styled.button`
  ${buttonStyle};
  ${space};
  ${border};
  ${layout};
`;

Button.defaultProps = {
  px: 4,
  py: 1,
  borderWidth: 0,
  borderRadius: '.25rem',
};

export default Button;
