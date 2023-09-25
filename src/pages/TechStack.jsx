import React from 'react';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from 'react-icons/fa';
import { BiLogoMongodb, BiLogoJquery } from 'react-icons/bi';
import {
  SiExpress,
  SiMongoose,
  SiMysql,
  SiSequelize,
  SiTypescript,
  SiHandlebarsdotjs,
  SiSass,
} from 'react-icons/si';

function TechStack() {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Four equal columns
    gap: '20px', // Gap between columns
  };

  const sectionStyle = {
    borderRadius: '5px',
    padding: '20px',
    boxSizing: 'border-box',
    border: 'solid 5px #f9ad5b',
    backgroundColor: '#45c4f3',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.2)',
  };

  const headerStyle = {
    fontSize: '1.5rem',
    borderBottom: '2px solid #f9ad5b',
    paddingBottom: '10px',
    margin: '0',
  };

  const textStyle = {
    fontSize: '1.2rem',
    margin: '0.5rem 0',
  };

  const uniqueTitleStyle = {
    fontSize: '2rem', // Larger font size
    marginBottom: '15px', // Remove top margin to reduce spacing
    textAlign: 'center', // Center-align the title
    color: '#f9ad5b', // Text color
    borderRadius: '5px', // Rounded corners for the title background
    padding: '10px', // Add padding to the title
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Add a subtle box shadow
  };

  return (
    <div id="techstack">
      <div style={uniqueTitleStyle}>
        <h1>Tech Stack</h1>
      </div>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h1 style={headerStyle}>Frontend Languages</h1>
          <p style={textStyle}>
            <FaHtml5 /> HTML5
          </p>
          <p style={textStyle}>
            <FaCss3 /> CSS
          </p>
          <p style={textStyle}>
            <FaJs /> Javascript
          </p>
          <p style={textStyle}>
            <FaReact /> React
          </p>
          <p style={textStyle}>
            <FaBootstrap /> Bootstrap
          </p>
        </div>
        <div style={sectionStyle}>
          <h1 style={headerStyle}>Backend Languages</h1>
          <p style={textStyle}>
            <FaNodeJs /> Node.js
          </p>
          <p style={textStyle}>
            <SiExpress /> Express.js
          </p>
        </div>
        <div style={sectionStyle}>
          <h1 style={headerStyle}>Database Languages</h1>
          <p style={textStyle}>
            <BiLogoMongodb /> MongoDB
          </p>
          <p style={textStyle}>
            <SiMongoose /> Mongoose
          </p>
          <p style={textStyle}>
            <SiMysql /> SQL
          </p>
          <p style={textStyle}>
            <SiSequelize /> Sequelize
          </p>
        </div>
        <div style={sectionStyle}>
          <h1 style={headerStyle}>Languages I have a basic understanding of</h1>
          <p style={textStyle}>
            <BiLogoJquery /> jQuery
          </p>
          <p style={textStyle}>
            <SiTypescript /> Typescript
          </p>
          <p style={textStyle}>
            <SiHandlebarsdotjs /> Handlebars
          </p>
          <p style={textStyle}>
            <SiSass /> Sass
          </p>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
