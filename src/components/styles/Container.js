import styled from "styled-components";

const Container = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  padding: 1rem 2rem;
  max-width: ${props => props.theme.maxwidth};
  margin: 0 auto;
`;

export default Container;
