import React, { Component } from 'react';
import './Navbar.css';
import { FaInfoCircle, FaBook, FaHome, FaLaptopCode, FaCode, FaFileAlt } from 'react-icons/fa';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          icon: <FaHome />,
          text: 'Home',
          active: true, // Set the initial active item here
        },
        {
          icon: <FaInfoCircle />,
          text: 'About',
          active: false, // Set the initial active item here
        },
        {
          icon: <FaBook />,
          text: 'Education',
          active: false, // Set the initial active item here
        },
        {
          icon: <FaLaptopCode />,
          text: 'Tech Stack',
          active: false, // Set the initial active item here
        },
        {
          icon: <FaCode />,
          text: 'Projects',
          active: false, // Set the initial active item here
        },
        {
          icon: <FaFileAlt />,
          text: 'Resume',
          active: false, // Set the initial active item here
        },
      ],
    };
  }

  renderItem({ icon, text, active }) {
    return (
      <React.Fragment key={text}>
        {icon}
        <span className={`nav-item-text ${active ? 'active' : ''}`}>
          {text}
        </span>
      </React.Fragment>
    );
  }

  changeActiveNavItem = (itemIndex) => {
    const newItems = this.state.items.map((item, index) => ({
      ...item,
      active: index === itemIndex,
    }));

    this.setState({
      items: newItems,
    });
  }

  render() {
    const { items } = this.state;
  
    return (
      <div className="nav-container">
        {items.map((item, i) => (
          <div
            className={`nav-item item-${i} ${item.active ? 'active' : ''}`}
            onClick={() => this.changeActiveNavItem(i)}
            key={i}
          >
            {this.renderItem(item)}
            {item.active && <div className="nav-item-highlighter" />}
          </div>
        ))}
      </div>
    );
  }
}

export default Navbar;
