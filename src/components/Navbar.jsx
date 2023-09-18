import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import about from '../assets/about-icon.svg';
import education from '../assets/education-icon.svg'
import menu from '../assets/menu-icon.svg'
import techStack from '../assets/techstack-icon.svg'
import resume from '../assets/resume-icon.svg'

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <Link>
          <img src={menu} alt="Menu Icon" width="25" height="25" />
        </Link>
      </div>
      <div>
        <Link>
          <img src={about} alt="About Icon" width="25" height="25" />
        </Link>
      </div>
      <div>
        <Link>
          <img src={education} alt="Education Icon" width="25" height="25" />
        </Link>
      </div>
      <div>
        <Link>
          <img src={techStack} alt="Tech Stack Icon" width="25" height="25" />
        </Link>
      </div>
      <div>
        <Link>
          <img src={resume} alt="Resume Icon" width="25" height="25" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
