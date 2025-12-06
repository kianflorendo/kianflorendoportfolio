import { useState, useEffect, useRef } from 'react';
import './AlabHero.css';

const AlabHero = () => {
  const [showModal, setShowModal] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projectDetails = {
    title: 'ALAB HERO',
    subtitle: 'Advanced AI-Powered Firefighting Robot with Comprehensive Monitoring System',
    mainImage: '/images/28ffb7db-7d49-4bfa-b1b8-8db0c19b7619.jpg',
    images: [
      '/images/Screenshot 2025-09-18 030357.png',
      '/images/Screenshot 2025-09-18 030618.png',
      '/images/Screenshot 2025-09-18 030200.png'
    ],
    overview: [
      'ALAB HERO is an innovative robotic system designed for autonomous fire detection and extinguishing. The platform incorporates a web dashboard, mobile application, SMS/call alert systems, real-time GPS mapping, and IoT connectivity for comprehensive emergency response management.',
      'The robot utilizes advanced AI algorithms and sensor integration to detect fires with high accuracy and can autonomously navigate to the source to initiate extinguishing procedures while providing critical real-time data to emergency responders.'
    ],
    features: [
      'Real-time fire detection using convolutional neural networks (CNN)',
      'Autonomous navigation and path planning system',
      'IoT connectivity for remote monitoring and control',
      'Comprehensive web dashboard for central monitoring',
      'Cross-platform mobile application for field management',
      'Multi-channel alert system (SMS, call, push notifications)',
      'Real-time GPS tracking and mapping interface'
    ]
  };

  useEffect(() => {
    const checkScroll = () => {
      if (sectionRef.current) {
        const elementPosition = sectionRef.current.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          sectionRef.current.classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll();

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <section id="alab-hero">
      <div className="section-title">
        <h2>Featured Project</h2>
      </div>
      
      <div className="alab-hero-section animate" ref={sectionRef}>
        <div className="alab-header">
          <h2>{projectDetails.title}</h2>
          <p>{projectDetails.subtitle}</p>
        </div>
        
        <div className="alab-preview">
          <img src={projectDetails.mainImage} alt={projectDetails.title} />
          <div className="alab-overlay">
            <button className="view-details-btn" onClick={() => setShowModal(true)}>
              View Full Details
            </button>
          </div>
        </div>
        
        <div className="alab-quick-info">
          <p>{projectDetails.overview[0]}</p>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ×
            </button>
            <div className="modal-layout">
              <div className="modal-left">
                <img 
                  src={projectDetails.mainImage} 
                  alt={projectDetails.title}
                  className="modal-main-image"
                  onClick={() => setLightboxImage(projectDetails.mainImage)}
                />
                <div className="modal-sub-images">
                  {projectDetails.images.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt={`Detail ${idx + 1}`} 
                      className="modal-sub-image"
                      onClick={() => setLightboxImage(img)}
                    />
                  ))}
                </div>
              </div>
              <div className="modal-right">
                <h3>{projectDetails.title}</h3>
                <p className="modal-subtitle">{projectDetails.subtitle}</p>
                <div className="modal-details">
                  <h4>Project Overview</h4>
                  {projectDetails.overview.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                  <h4>Technical Features</h4>
                  <ul>
                    {projectDetails.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox for Full Screen Image */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImage(null)}>
            ×
          </button>
          <img 
            src={lightboxImage} 
            alt="Full screen view" 
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default AlabHero;
