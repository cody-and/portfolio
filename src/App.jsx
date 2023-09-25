import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Education from './pages/Education';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import TechStack from './pages/TechStack';
import { animated, useTransition } from 'react-spring';
import { useInView } from 'react-intersection-observer';

function App() {
  const sections = [
    {
      component: About,
      animation: {
        from: { opacity: 0, transform: 'translateX(100%)' },
        enter: { opacity: 1, transform: 'translateX(0)' },
        leave: { opacity: 0, transform: 'translateX(100%)' },
        config: { tension: 120, friction: 14 },
      },
    },
    {
      component: Education,
      animation: {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
        config: { tension: 120, friction: 14 },
      },
    },
    {
      component: TechStack,
      animation: {
        from: { opacity: 0, transform: 'translateX(100%)' },
        enter: { opacity: 1, transform: 'translateX(0)' },
        leave: { opacity: 0, transform: 'translateX(100%)' },
        config: { tension: 120, friction: 14 },
      },
    },
    // Add other sections with animations here
  ];

  const transitions = useTransition(sections, {
    keys: (section) => section.component,
    from: (section) => section.animation.from,
    enter: (section) => section.animation.enter,
    leave: (section) => section.animation.leave,
    config: (section) => section.animation.config,
  });

  return (
    <div>
      <Navbar />
      <Home />
      <div style={{ paddingTop: '80px' }}>
        {transitions((props, item) => {
          const [ref, inView] = useInView();
          return (
            <div ref={ref} style={{ opacity: inView ? 1 : 0 }}>
              <animated.section style={props}>
                <item.component />
              </animated.section>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
