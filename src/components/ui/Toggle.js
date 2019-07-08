import React, { useEffect } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  transition: background-color ease 0.3s;
  font-size: 0.65rem;
  padding: 0.3rem 0.6rem;
  border: 1px solid #333;
  border-radius: ${props => props.theme.layout.borderRadius};
`;

export default function Toggle({ darkMode, setDarkMode }) {
  const toogleit = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('dark', !darkMode);
  };

  useEffect(() => {
    let store = localStorage.getItem('dark');
    if (store === 'true') {
      store = true;
    } else store = false;
    setDarkMode(store);
  }, []);

  return (
    <ToggleContainer role="switch" aria-checked={darkMode} type="checkbox" onClick={toogleit}>
      {darkMode ? 'Dark mode on' : 'Dark mode off'}
    </ToggleContainer>
  );
}
