import React, { useRef, useEffect } from 'react';
import UMNLogo from '../assets/UMN-Logo.svg';
import { useSpring, animated } from '@react-spring/web';
import '../App.css'

function Education() {
  const educationRef = useRef(null);

  const educationAnimation = useSpring({
    from: { transform: 'translateX(100%)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
    config: { duration: 1000 },
    immediate: true,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Element is intersecting');
            educationAnimation.start({
              transform: 'translateX(0)',
              opacity: 1,
            });
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, [educationAnimation]);

  return (
    <animated.div
      id='education'
      className='education-container'
      style={educationAnimation}
      ref={educationRef}
    >
      <div className='education-content'>
        <h1>Education</h1>
        <img src={UMNLogo} alt="University of Minnesota Logo" className="card-img" />
        <h3>University of Minnesota Full Stack Coding Bootcamp</h3>
        <p>
          The University of Minnesota Full Stack Coding Bootcamp is a comprehensive 12-week program that provides students with a deep understanding of full-stack web development. Covering both front-end and back-end technologies, it offers a hands-on learning experience with real-world projects. Its diverse student body and experienced instructors committed to staying up-to-date with the latest industry trends make it a valuable source of tech talent.
        </p>
      </div>
    </animated.div>
  );
}

export default Education;
