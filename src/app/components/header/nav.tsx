import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Stnav = styled.nav`
  padding: 0 20px;
  margin: 0 0 0 auto;
  display: flex;
  align-items: stretch;
`;

const StNavLink = styled(NavLink)`
  text-decoration: none;
  color: #999;
  padding: 5px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  &:hover {
    color: #666;
  }
  &.active {
    color: #666;
    font-weight: bold;
  }
`;

function Nav() {
  const navItems = [
    {
      id: 1,
      title: 'styled',
      to: '/styled',
    },
    {
      id: 2,
      title: 'temp',
      to: '/temp',
    },
  ];

  const navChildren = navItems.map(item => (
    <StNavLink exact to={item.to} key={item.id}>
      {item.title}
    </StNavLink>
  ));

  return (
    <Stnav>
      {navChildren}
    </Stnav>
  );
}

export default Nav;
