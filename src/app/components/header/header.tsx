import React from 'react';
import Nav from './nav';
import logo from './logo.svg';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Stheader = styled.header`
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, .3);
  > div {
    display: flex;
    max-width: 1024px;
    margin: 0 auto;
    img {
      width: 85px;
      animation:${AppLogoSpin} infinite 20s linear;
    }
  }
`;

function Header() {
  return (
    <Stheader>
      <div>
        <NavLink exact to='/'>
          <img src={logo} alt="logo" />
        </NavLink>
        <Nav></Nav>
      </div>
    </Stheader>
  );
}

export default Header;
