import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa6';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <FaIcons.FaBars />
      </div>
      {menuOpen && (
        <ul className="menu-items">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">
              <h2> <FaIcons.FaHouseChimney /> Home </h2>
            </Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about">
              <h2><FaIcons.FaCircleInfo /> About</h2>
            </Link>
          </li>
          <li className={location.pathname === '/education' ? 'active' : ''}>
            <Link to="/education">
              <h2><FaIcons.FaBook /> Education</h2>
            </Link>
          </li>
          <li className={location.pathname === '/tech-stack' ? 'active' : ''}>
            <Link to="/tech-stack">
              <h2><FaIcons.FaLaptopCode /> Tech Stack</h2>
            </Link>
          </li>
          <li className={location.pathname === '/projects' ? 'active' : ''}>
            <Link to="/projects">
              <h2><FaIcons.FaRegFileCode /> Projects</h2>
            </Link>
          </li>
          <li className={location.pathname === '/resume' ? 'active' : ''}>
            <Link to="/resume">
              <h2><FaIcons.FaFile /> Resume</h2>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
