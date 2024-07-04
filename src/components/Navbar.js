import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
            alt="Google Logo" 
            className="google-logo"
          />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/gmail">
          <img 
            src="https://www.gstatic.com/images/branding/product/1x/gmail_48dp.png" 
            alt="Gmail Logo" 
            className="gmail-logo"
          />
        </Link>
        <Link to="/images">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/48/48639.png" 
            
            className="images-logo"
          />
        </Link>
        <Link to="/googleapps">
          <img 
            src="https://cdn.iconscout.com/icon/free/png-256/free-dots-nine-3603406-3003402.png" 
             
            className="google-apps-logo"
          />
        </Link>
        <Link to="/signin">
          <img 
            src="https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png" 
            alt="Google Account Logo" 
            className="google-account-logo"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
