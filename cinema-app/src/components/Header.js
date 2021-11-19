import React from 'react';
import '../styles/styles.css';
import user_icon from '../images/user_icon.png'

function Header() {
  return (
    <div className="wrapper_header">
      <h2>CINEMA</h2>
      <div className="user_info">Vasya</div>
    </div>
  );
}

export default Header;