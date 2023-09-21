import React, { useEffect, useState } from 'react';
import './Footer.css';
import * as FaIcons from 'react-icons/fa6';

function Footer() {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <footer className={`footer ${isHidden ? 'hidden' : ''}`}>
      <div className="container">
        <div className="footer-content">
          <span className="footer-icons">
            <a href="mailto:codya.0807@gmail.com"><FaIcons.FaEnvelope /></a>
            <a href="https://github.com/cody-and" target="_blank" rel="noopener noreferrer"><FaIcons.FaGithub /></a>
            <a href="https://www.linkedin.com/in/cody-anderson-960782227/" target="_blank" rel="noopener noreferrer"><FaIcons.FaLinkedin /></a>
          </span>
          <p>&copy; {new Date().getFullYear()} Cody Anderson</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
