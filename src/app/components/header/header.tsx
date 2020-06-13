import React from 'react';
import Navigation from './navigation';
import logo from '../../../assets/logo.svg';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const LogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const TopHeader = styled.header`
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
      animation:${LogoSpin} infinite 20s linear;
    }
  }
`;

function Header() {
  return (
    <TopHeader>
      <div>
        <NavLink exact to='/'>
          <img src={logo} alt="logo" />
        </NavLink>
        <Navigation></Navigation>
      </div>
    </TopHeader>
  );
}

export default Header;
