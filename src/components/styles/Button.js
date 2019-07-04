import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.charcoal};
padding:1rem 2rem;
cursor: pointer;
border:0;

`;

export default Button;
