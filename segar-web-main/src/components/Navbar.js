import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <Link to='main' className='logo'>
        <img src={logo} alt='segar.id' />
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li>
          <Link to='#'>Home</Link>
        </li>
        <li>
          <Link to='features'>Feature</Link>
        </li>
        <li>
          <Link to='#'>Articles</Link>
        </li>
        <li>
          <Link to='#'>About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
