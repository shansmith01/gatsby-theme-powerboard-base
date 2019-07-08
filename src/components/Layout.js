import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

// Theme and CSS
import defaultTheme, { darkTheme } from '../theme/default';
import { GlobalStyle } from '../theme/GlobalStyles';
import Menu from './ui/Menu';
import SEO from './ui/Seo';

const BackgroundWrapper = styled.div`
  background: ${props => props.theme.colors.background};
  transition: background-color ease 0.3s;
`;
const Layout = ({ children, darkModeToggle }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : defaultTheme}>
      <>
        <GlobalStyle />
        <>
          <BackgroundWrapper>
            <SEO />
            <Menu darkMode={darkMode} setDarkMode={setDarkMode} darkModeToggle={darkModeToggle} />

            <main>{children}</main>
          </BackgroundWrapper>
        </>
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
