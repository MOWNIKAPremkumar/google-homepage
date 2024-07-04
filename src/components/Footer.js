import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__left">
        <a href="/">Advertising</a>
        <a href="/">Business</a>
        <a href="/">About</a>
      </div>
      <div className="footer__right">
        <a href="/">Privacy</a>
        <a href="/">Terms</a>
        <a href="/">Settings</a>
      </div>
      <p>© 2024 Google</p>
    </footer>
  );
}

export default Footer;
