import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const navItems = [
    {
      id: 1,
      title: 'styled',
      to: '/styled',
    },
  ];

  const navChildren = navItems.map(item => (
    <NavLink exact to={item.to} key={item.id}>
      {item.title}
    </NavLink>
  ));

  return (
    <nav>
      {navChildren}
    </nav>
  );
}

export default Nav;
