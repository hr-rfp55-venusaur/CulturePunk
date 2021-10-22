import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './NavBar.css';
import { useAppContext } from '../../ContextObj'; //use Auth context

const NavBar = () => {
  const { currentUser } = useAppContext();

  const loginIcon = (userEmail) => {
    if (userEmail = '') {
      return (
        <li>
          <Link to="/login">
            Login
          </Link>
        </li>
      )} else {
        return (
          <li>
          <Link to="/login">
            Logout
          </Link>
        </li>
        )
      }
    }

  

  return (
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
      {loginIcon(currentUser.email)}
    </ul>
  </div>
  )
};

export default NavBar;
