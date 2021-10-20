import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <div className="NavContainer">
    <ul>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/market">
          Market
        </Link>
      </li>
      <li>
        <Link to="/events">
          Events
        </Link>
      </li>
      <li>
        <Link to="/livestream">
          Livestream
        </Link>
      </li>
      <li>
        <Link to="/profile">
          Profile
        </Link>
      </li>
      <li>
        <Link to="/login">
          Login
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
