import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Education from './pages/Education';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import TechStack from './pages/TechStack';
import { animated, useTransition } from 'react-spring';

function App() {
  // Sections excluding Home and Navbar for transitions
  const sections = [
    { component: About },
    { component: Education },
    { component: TechStack },
    { component: Projects },
    { component: Resume },
  ];

  const transitions = useTransition(sections, {
    from: { opacity: 0, transform: 'translateY(50px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 220, friction: 15 },
    keys: (section) => section.component,
  });

  return (
    <div>
      <Navbar />
      <Home /> {/* Render Home directly without transitions */}
      <div style={{ paddingTop: '80px' }}>
        {transitions((props, item) => (
          <animated.section key={item.component} style={props}>
            <item.component />
          </animated.section>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
