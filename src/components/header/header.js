import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        Github Dashboard
      </Link>
    </header>
  );
};

export default Header;
