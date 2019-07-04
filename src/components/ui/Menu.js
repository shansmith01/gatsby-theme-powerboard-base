import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Link } from 'gatsby';
import config from '../../config';
import media from '../styles/Media';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: ${props => props.theme.maxwidth};
  margin: 0 auto;
  padding: 2rem;
`;

const Logo = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 300px;
  display: inline-block;
  h1 {
    font-size: 1rem;
  }
`;

const MenuItems = styled.ul`
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0;
  text-align: right;
  display: none;
  @media ${media.tablet} {
    display: inline-block;
  }
`;

const MenuItem = styled.li`
  display: block;
  padding: 0 0.5rem;
  a {
    color: ${props => props.theme.primaryColor};
  }
  @media ${media.tablet} {
    display: inline;
  }
`;

const Toggle = styled.a`
  @media ${media.tablet} {
    display: none;
  }
`;
const MobNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  background: #333;
  height: 100vh;
  width: 100vw;
  padding: 4rem 2rem;
`;

const MobMenu = ({ style, toggle }) => (
  <animated.div style={style}>
    <MobNav>
      <Close onClick={toggle}>Close</Close>
      <MenuItem>
        <Link to="/">Home</Link>
      </MenuItem>
      {config.links.map(link => (
        <MenuItem key={link.title}>
          <Link to={link.link}>{link.title}</Link>
        </MenuItem>
      ))}
    </MobNav>
  </animated.div>
);

const Close = styled.a`
  position: absolute;
  top: 30px;
  right: 55px;
  color: #fff;
`;

const Menu = () => {
  const [toggle, setToggle] = useState(false);

  const mobAnimation = useSpring({
    transform: toggle ? 'translate3D(0,0,0) scale(1)' : 'translate3D(100%,0,0) scale(0)',
  });

  return (
    <>
      {toggle && <MobMenu style={mobAnimation} toggle={() => setToggle(false)} />}

      <Nav>
        <Logo>
          <Link to="/">{config.siteName}</Link>
        </Logo>

        <MenuItems>
          {config.links.map(link => (
            <MenuItem key={link.title}>
              <Link to={link.link}>{link.title}</Link>
            </MenuItem>
          ))}
        </MenuItems>
        <Toggle onClick={() => setToggle(!toggle)}>Menu</Toggle>
      </Nav>
    </>
  );
};

export default Menu;
