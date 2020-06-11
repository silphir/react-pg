import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Stnav = styled.nav`
  padding: 0 20px;
  margin: 0 0 0 auto;
  align-items: stretch;
  > ul {
    display: flex;
    list-style: none;
  }
`;
const Indicator = styled.div``;
const StNavLink = styled(NavLink)`
  height: 61px;
  text-decoration: none;
  color: #bbb;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  &:hover {
    color: #888;
  }
  &.active {
    color: #0084ac;
    ~${Indicator} {
      margin-top: auto;
      height: 4px;
      background-color: #0084ac;
    }
  }
`;

function Nav() {
  const navItems = [
    {
      id: 1,
      title: 'Home',
      to: '/',
    },
    {
      id: 2,
      title: 'Sample',
      to: '/sample',
    },
    {
      id: 3,
      title: 'Users',
      to: '/users',
    },
    {
      id: 4,
      title: 'Sign up',
      to: '/signup',
    },
  ];

  const navChildren = navItems.map(item => (
    <li key={item.id}>
      <StNavLink exact to={item.to} >
        {item.title}
      </StNavLink>
      <Indicator></Indicator>
    </li>
  ));

  return (
    <Stnav>
      <ul>
        {navChildren}
      </ul>
    </Stnav>
  );
}

export default Nav;
