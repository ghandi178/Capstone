import React from 'react';
import logo from '../images/logo.png';

function Footer() {
  return (
    <div id='footer'>
      <div className='logo'>
        <img src={logo} alt='segar.id' />
      </div>
      <div className='footer-text'>
        <p>Copyright &copy; 2022 - Sehat Bugar Web</p>
      </div>
    </div>
  );
}

export default Footer;
