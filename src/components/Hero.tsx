import './Hero.css';

const Hero = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: (targetElement as HTMLElement).offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h2>AI / Robotics Engineer and Full Stack Developer</h2>
          <p>
            Designing intelligent systems that bridge the gap between cutting-edge research and real-world 
            applications through robotics, artificial intelligence, and innovative technology solutions.
          </p>
          <div className="hero-buttons">
            <a href="#alab-hero" className="btn btn-primary" onClick={(e) => scrollToSection(e, '#alab-hero')}>
              View Featured Project
            </a>
            <a href="#contact" className="btn btn-outline" onClick={(e) => scrollToSection(e, '#contact')}>
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/8dd41a2c-f254-4a1a-a29d-474d95d88edc.jpg" alt="Kian Angelo Florendo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
