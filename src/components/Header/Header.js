import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.png';

function Header() {
  return (
    <div className="Header">
      <header>
        <nav>
          <img src={logo} alt="iCOV logo"></img>
          <a href="/">Link</a>
          <a href="/">Link</a>
          <a href="/">Link</a>
          <a href="/">Link</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
