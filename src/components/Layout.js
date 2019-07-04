import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

// Theme and CSS
import defaultTheme from '../theme/default';
import { GlobalStyle } from '../theme/GlobalStyles';
import Menu from './ui/Menu';
import SEO from './ui/Seo';

const Layout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <>
      <GlobalStyle />
      <>
        <SEO />

        <Menu />

        <main>{children}</main>
      </>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
