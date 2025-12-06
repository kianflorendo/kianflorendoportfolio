import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScroll = () => {
      if (contentRef.current) {
        const elementPosition = contentRef.current.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          contentRef.current.classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll();

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="section-title">
        <h2>Contact Me</h2>
      </div>
      <div className="contact-content animate" ref={contentRef}>
        <p>
          I'm always interested in discussing new opportunities, collaborative projects, or innovative 
          ideas. Whether you have a specific project in mind or would like to explore potential synergies, 
          feel free to reach out.
        </p>
        <a href="mailto:kianflorendo20@gmail.com" className="btn btn-primary">Send an Email</a>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/kian-angelo-florendo-b8ab82378" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/kianflorendo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.facebook.com/share/17vat21mVx/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/_kiannzzzz?igsh=aTZhdXo0bXRhcXF1" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
