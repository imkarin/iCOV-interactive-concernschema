import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.png';

import { FaCog, FaFolderOpen, FaSignOutAlt, FaAngleUp } from "react-icons/fa";

function Header() {
  return (
    <div className="Header">
      <header>
        <nav>
          <img src={logo} alt="iCOV logo"></img>
          <a href="/"><FaCog className="icons"></FaCog> Instellingen</a>
          <a href="/"><FaFolderOpen className="icons"></FaFolderOpen> Mijn Aanvragen</a>
          <a href="/"><FaSignOutAlt className="icons"></FaSignOutAlt> Uitloggen</a>


          <span className="toggleNavigation"><FaAngleUp></FaAngleUp></span>


        </nav>
      </header>
    </div>
  );
}

export default Header;
