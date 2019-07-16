import styled from 'styled-components';
import { space, layout, flexbox } from 'styled-system';

import theme from '../../theme/default';

const Container = styled.div`
  ${flexbox};
  ${space};
  ${layout};
`;

Container.defaultProps = {
  maxWidth: theme.sizes.maxWidth,
  margin: '0 auto',
  flexGrow: 1,
  flexShrink: 1,
  p: ['1rem', '2rem', '2rem'],
};

export default Container;
