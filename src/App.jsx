import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import About from './components/About';
import './App.css'


function TechStack() {
  return <div>Tech Stack Page</div>;
}

function Education() {
  return <div>Education Page</div>;
}

function Projects() {
  return <div>Projects Page</div>;
}

function Resume() {
  return <div>Resume Page</div>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/about" element={<About />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
