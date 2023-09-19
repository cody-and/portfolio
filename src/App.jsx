import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Education from './pages/Education';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import TechStack from './pages/TechStack';
import Test from './pages/Test'


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Home />
        <About />
        <Education />
        <TechStack />
        <Projects />
        <Resume />
      







        {/* <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/education" element={ <Education />} />
          <Route path="/tech-stack" element={ <TechStack />} />
          <Route path="/projects" element={ <Projects />} />
          <Route path="/resume" element={ <Resume />} />
          <Route path="/test" element={ <Test />} />

        </Routes> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;


