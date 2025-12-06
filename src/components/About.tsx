import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScroll = () => {
      const elements = [textRef.current, imageRef.current];
      
      elements.forEach(element => {
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;
          
          if (elementPosition < screenPosition) {
            element.classList.add('active');
          }
        }
      });
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll();

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <section id="about" className="about">
      <div className="section-title">
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <div className="about-text animate" ref={textRef}>
          <h3>Hello! I'm Kian Angelo Florendo</h3>
          <p>
            I'm a self taught innovative engineer and developer with a passion for creating advanced 
            robotics, IoT and AI systems. My expertise lies in developing intelligent solutions that 
            address complex challenges through the integration of cutting-edge technologies.
          </p>
          <p>
            With a foundation in both hardware and software development, I specialize in building 
            end-to-end systems that are not just automated but truly intelligent, adaptive, and 
            capable of solving real-world problems.
          </p>
          <div className="skills">
            <span className="skill-chip">Robotics Engineering</span>
            <span className="skill-chip">Artificial Intelligence</span>
            <span className="skill-chip">Computer Vision</span>
            <span className="skill-chip">IoT Systems</span>
            <span className="skill-chip">Full-Stack Development</span>
            <span className="skill-chip">Machine Learning</span>
          </div>
        </div>
        <div className="about-image animate" ref={imageRef}>
          <img src="/images/612cfbaf-5046-4ef0-9151-895f43c75e4e.jpg" alt="Working on robotics" />
        </div>
      </div>
    </section>
  );
};

export default About;
