import React from 'react';
import '../styles/styles.css';
import user_icon from '../images/user_icon.png';
import cinema_icon from '../images/1cinema_icon.png'
import cinema_icon_reel from '../images/88502-middle.png'

function Header() {
  return (
    <div className="wrapper_header">
      <div className="cinema_icon">
        <img src={cinema_icon} alt="cinema_icon"/>
      </div>
      <div className="cinema_icon_reel">
        <img src={cinema_icon_reel} alt="cinema_icon"/>
      </div>
      <div className="user_info">
        <p>Hi, Irina</p>
        <div className="user_icon">
          <img src={user_icon} alt="user"/>
        </div>
      </div>
      
    </div>
  );
}

export default Header;
