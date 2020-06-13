import React from 'react';
import styled from 'styled-components';
import { NavLink as navlink } from 'react-router-dom';

const Nav = styled.nav`
  padding: 0 20px;
  margin: 0 0 0 auto;
  align-items: stretch;
  > ul {
    display: flex;
    list-style: none;
  }
`;
const IndicatorDiv = styled.div``;
const NavLink = styled(navlink)`
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
    ~${IndicatorDiv} {
      margin-top: auto;
      height: 4px;
      background-color: #0084ac;
    }
  }
`;

function Navigation() {
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
      <NavLink exact to={item.to} >
        {item.title}
      </NavLink>
      <IndicatorDiv></IndicatorDiv>
    </li>
  ));

  return (
    <Nav>
      <ul>
        {navChildren}
      </ul>
    </Nav>
  );
}

export default Navigation;
