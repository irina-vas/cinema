import React from 'react';
import '../styles/styles.css';
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <div className="wrapper_nav">
      <ul className="nav">
      <li className="nav_item">
        <Link to="/" className={ location.pathname === '/' ? 'active' : '' }>HOME</Link>
      </li>
      <li className="nav_item">
        <Link to="/movies" className={ location.pathname === '/movies' ? 'active' : ''}>ON SCREEN</Link>
      </li>
      <li className="nav_item">
        <Link to="/schedule" className={ location.pathname === '/schedule' ? 'active' : ''}>SCHEDULE</Link>
      </li>
      </ul>
    </div>
  );
}

export default Nav;
