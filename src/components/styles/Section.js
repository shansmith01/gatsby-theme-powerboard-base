import styled from 'styled-components';
import { flexbox } from 'styled-system';

const Section = styled.section`
  ${flexbox}
  display:flex;
`;

Section.defaultProps = {
  flexWrap: 'wrap',
};

export default Section;
