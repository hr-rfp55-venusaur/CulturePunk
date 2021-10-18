import React from 'react';
import {
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import Login from '../Login';

const NavBar = () => {
  console.log('hello');

  return (
    <div>
      Nav Bar here
      <Link to="/login">
        <Login />
      </Link>
    </div>
  );
};

export default NavBar;
