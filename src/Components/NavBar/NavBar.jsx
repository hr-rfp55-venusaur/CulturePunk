import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './NavBar.css';

const none = { textDecoration: 'none', color: 'black' };

const NavBar = () => (
  <div className="NavContainer">
    <ul>
      <li>
        <Link to="/" style={none}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/market" style={none}>
          Market
        </Link>
      </li>
      <li>
        <Link to="/events" style={none}>
          Events
        </Link>
      </li>
      <li>
        <Link to="/livestream" style={none}>
          Livestream
        </Link>
      </li>
      <li>
        <Link to="/profile" style={none}>
          Profile
        </Link>
      </li>
      <li>
        <Link to="/login" style={none}>
          Login
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
