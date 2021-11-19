import React from 'react';
import '../styles/styles.css';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="wrapper_nav">
      <ul className="nav">
      <li className="nav_item">
        <Link to="/movies">HOME</Link>
      </li>
      <li className="nav_item">
        <Link to="/schedule">SCHEDULE</Link>
      </li>
      </ul>
    </div>
  );
}

export default Nav;