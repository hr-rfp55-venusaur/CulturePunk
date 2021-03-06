import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './NavBar.css';
import { useAppContext } from '../../ContextObj'; //use Auth context

const NavBar = () => {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAppContext();
  const history = useHistory();

  async function handleLogout() {
    setError('');
    try {
      console.log('1 -- well yes');
      await logout();
      console.log(`2--- that's right ${currentUser?.email}`);
    } catch(error) {
      setError('Failed to logout.');
    }
  }

  const none = { textDecoration: 'none', color: 'black' };

  const loginIcon = () => {
    if (currentUser && currentUser.email) {
      return (
        <li>
          <Link to="/login" onClick={handleLogout}>
            logout
          </Link>
        </li>
      );
    } else {
      return (
        <li>
          <Link to="/login" style={none}>
            Login
          </Link>
        </li>
      )
    }
  };

  return (
    <div className="NavContainer">
      <ul>
        <li>
          <Link to="/" style={none}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/market" style={none}>
            Gallery
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
        {loginIcon()}
      </ul>
    </div>
  );
};

export default NavBar;
