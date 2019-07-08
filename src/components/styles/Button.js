import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  padding: 1rem 2rem;
  cursor: pointer;
  border: 0;
`;

export default Button;
