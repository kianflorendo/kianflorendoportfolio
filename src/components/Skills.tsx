import { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategoriesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkScroll = () => {
      skillCategoriesRef.current.forEach(element => {
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
    <section id="skills" className="skills-section">
      <div className="section-title">
        <h2>Skills & Technologies</h2>
      </div>
      <div className="skills-container">
        <div className="skills-grid">
          <div className="skill-category animate" ref={el => { skillCategoriesRef.current[0] = el; }}>
            <h3>Programming Languages</h3>
            <div className="skill-items">
              <div className="skill-item">
                <i className="devicon-python-plain colored skill-icon"></i>
                <span className="skill-name">Python</span>
              </div>
              <div className="skill-item">
                <i className="devicon-javascript-plain colored skill-icon"></i>
                <span className="skill-name">JavaScript</span>
              </div>
              <div className="skill-item">
                <i className="devicon-cplusplus-plain colored skill-icon"></i>
                <span className="skill-name">C++</span>
              </div>
              <div className="skill-item">
                <i className="devicon-java-plain colored skill-icon"></i>
                <span className="skill-name">Java</span>
              </div>
            </div>
          </div>

          <div className="skill-category animate" ref={el => { skillCategoriesRef.current[1] = el; }}>
            <h3>Frameworks & Libraries</h3>
            <div className="skill-items">
              <div className="skill-item">
                <i className="devicon-react-original colored skill-icon"></i>
                <span className="skill-name">React</span>
              </div>
              <div className="skill-item">
                <i className="devicon-nodejs-plain colored skill-icon"></i>
                <span className="skill-name">Node.js</span>
              </div>
              <div className="skill-item">
                <i className="devicon-tensorflow-original colored skill-icon"></i>
                <span className="skill-name">TensorFlow</span>
              </div>
              <div className="skill-item">
                <i className="devicon-pytorch-plain colored skill-icon"></i>
                <span className="skill-name">PyTorch</span>
              </div>
            </div>
          </div>

          <div className="skill-category animate" ref={el => { skillCategoriesRef.current[2] = el; }}>
            <h3>Tools & Platforms</h3>
            <div className="skill-items">
              <div className="skill-item">
                <i className="devicon-arduino-plain colored skill-icon"></i>
                <span className="skill-name">Arduino</span>
              </div>
              <div className="skill-item">
                <i className="devicon-raspberrypi-line colored skill-icon"></i>
                <span className="skill-name">Raspberry Pi</span>
              </div>
              <div className="skill-item">
                <div className="espressif-icon"></div>
                <span className="skill-name">Espressif</span>
              </div>
              <div className="skill-item">
                <i className="devicon-git-plain colored skill-icon"></i>
                <span className="skill-name">Git</span>
              </div>
              <div className="skill-item">
                <i className="devicon-docker-plain colored skill-icon"></i>
                <span className="skill-name">Docker</span>
              </div>
            </div>
          </div>

          <div className="skill-category animate" ref={el => { skillCategoriesRef.current[3] = el; }}>
            <h3>Other Technologies</h3>
            <div className="skill-items">
              <div className="skill-item">
                <i className="devicon-html5-plain colored skill-icon"></i>
                <span className="skill-name">HTML5</span>
              </div>
              <div className="skill-item">
                <i className="devicon-css3-plain colored skill-icon"></i>
                <span className="skill-name">CSS3</span>
              </div>
              <div className="skill-item">
                <i className="devicon-mongodb-plain colored skill-icon"></i>
                <span className="skill-name">MongoDB</span>
              </div>
              <div className="skill-item">
                <i className="devicon-mysql-plain colored skill-icon"></i>
                <span className="skill-name">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
