import React from 'react';
import Nav from './nav';
import logo from '../../../assets/logo.svg';
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
const StTopheader = styled.header`
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, .3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  > div {
    display: flex;
    max-width: 1024px;
    margin: 0 auto;
    height: 65px;
    img {
      width: 85px;
      animation:${AppLogoSpin} infinite 20s linear;
    }
  }
`;

function Header() {
  return (
    <StTopheader>
      <div>
        <NavLink exact to='/'>
          <img src={logo} alt="logo" />
        </NavLink>
        <Nav></Nav>
      </div>
    </StTopheader>
  );
}

export default Header;
