import React from 'react';
import './Footer.css';
import * as FaIcons from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h2>
            <a href="mailto:codya.0807@gmail.com"><FaIcons.FaEnvelope /></a>
            <a href="https://github.com/cody-and" target="_blank" rel="noopener noreferrer"><FaIcons.FaGithub /></a>
            <a href="https://www.linkedin.com/in/cody-anderson-960782227/" target="_blank" rel="noopener noreferrer"><FaIcons.FaLinkedin /></a>
            <p>&copy; {new Date().getFullYear()} Cody Anderson</p>
          </h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
