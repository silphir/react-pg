import React from 'react';
import Nav from './nav';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <NavLink exact to='/'>playground</NavLink>
      <Nav></Nav>
    </header>
  );
}

export default Header;
