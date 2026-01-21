import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  details: string[];
  detailImages: string[];
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'CNN AI Lesion Spotter',
      description: 'Advanced medical imaging AI system for automated lesion detection and analysis in diagnostic healthcare applications.',
      image: '/images/cc6efe44-f6a7-4c3a-9352-ce59b286ee6c.jpg',
      tags: ['AI', 'Healthcare', 'CNN', 'Medical Imaging'],
      details: [
        'The CNN AI Lesion Spotter is a sophisticated medical imaging analysis system that utilizes deep learning algorithms to detect and classify lesions in medical scans with high precision. This system assists healthcare professionals in early diagnosis and treatment planning.',
        'Key features include high-accuracy detection, detailed analysis reports, integration with existing medical systems, and a user-friendly interface for medical professionals.',
      ],
      detailImages: [
        '/images/9eb6c1f7-6c52-4a22-9867-667cce13c045.jpg',
        '/images/fbb937e9-7e3a-478f-8db0-97ad218de608.jpg',
        '/images/9bd02922-7410-414d-974b-b8e0924ec092.jpg',
      ],
    },
    {
      id: 2,
      title: 'Bond M.A.S.T.E.R. Chemical Bonding GameDev using Scratch',
      description: 'Fun and interactive game for learning chemical bonding concepts.',
      image: '/images/Screenshot (241).png',
      tags: ['GameDev', 'Interactive', 'Chemistry', 'Educational'],
      details: [
        'Bond M.A.S.T.E.R. is an educational game developed using Scratch that makes learning chemical bonding concepts engaging and interactive. The game challenges players to form different types of chemical bonds by combining elements with appropriate properties.',
        'Key features include interactive gameplay, educational content aligned with chemistry curricula, progress tracking, and a user-friendly interface designed for students of all ages.',
      ],
      detailImages: [
        '/images/Screenshot (189).png',
        '/images/Screenshot (215).png',
        '/images/Screenshot (185).png',
      ],
    },
    {
      id: 3,
      title: 'GenZspace',
      description: 'Interactive spacecraft game to learn mathematics.',
      image: '/images/Screenshot (37).png',
      tags: ['Math', 'Educational', 'Fun', 'Interactive'],
      details: [
        'GenZspace is an interactive math game where players control spacecraft in space battles. If a spacecraft gets destroyed, the player must solve a math question to continue. Correct answers unlock rewards and let players choose new spacecraft, combining learning with exciting gameplay.',
        'Key features include interactive space-themed gameplay, math challenges aligned with learning objectives, reward-based progression, and a user-friendly interface designed to engage students of all ages.',
      ],
      detailImages: [
        '/images/Screenshot (54).png',
        '/images/Screenshot (57).png',
        '/images/Screenshot (33).png',
      ],
    },
    {
      id: 4,
      title: 'Clara.AI',
      description: "The world's first AI Integrity Companion designed to replace workplace surveillance with active support.",
      image: '/images/clara-main.png',
      tags: ['AI', 'Ethics', 'Workplace', 'Innovation'],
      details: [
        'Clara.AI is the world\'s first AI Integrity Companion designed to replace workplace surveillance with active support. While traditional tools focus on tracking productivity and punishing mistakes, Clara operates as an ethical ally a "Work Kumare" who prioritizes growth over judgment.',
        'By utilizing advanced sentiment monitoring and privacy-first coaching, Clara detects "ethical drift" before it becomes a violation. She empowers employees to self-correct through features like Trust Currency and Redemption Quests, ensuring that the workplace is defined by confidence and transparency rather than fear and blame.',
        'Clara proves that the future of corporate compliance isn\'t about watching people; it\'s about empowering them.',
      ],
      detailImages: [
        '/images/clara-detail-1.png',
        '/images/clara-detail-2.png',
        '/images/clara-detail-3.png',
      ],
    },
  ];

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  useEffect(() => {
    const checkScroll = () => {
      cardsRef.current.forEach(element => {
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
    <section id="projects">
      <div className="section-title">
        <h2>Project Portfolio</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="card animate"
            ref={el => { cardsRef.current[index] = el; }}
          >
            <img src={project.image} alt={project.title} />
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="card-tag">{tag}</span>
                ))}
              </div>
              <div
                className="view-more"
                onClick={() => toggleProject(project.id)}
              >
                View Details <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '0.5rem' }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {expandedProject !== null && createPortal(
        <div className="modal-overlay" onClick={() => setExpandedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setExpandedProject(null)}>
              ×
            </button>
            {projects.find(p => p.id === expandedProject) && (
              <div className="modal-layout">
                <div className="modal-left">
                  <img
                    src={projects.find(p => p.id === expandedProject)!.image}
                    alt={projects.find(p => p.id === expandedProject)!.title}
                    className="modal-main-image"
                    onClick={() => setLightboxImage(projects.find(p => p.id === expandedProject)!.image)}
                  />
                  <div className="modal-sub-images">
                    {projects.find(p => p.id === expandedProject)!.detailImages.map((img, idx) => (
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
                  <h3>{projects.find(p => p.id === expandedProject)!.title}</h3>
                  <div className="modal-tags">
                    {projects.find(p => p.id === expandedProject)!.tags.map((tag, idx) => (
                      <span key={idx} className="modal-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="modal-details">
                    {projects.find(p => p.id === expandedProject)!.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}

      {/* Lightbox for Full Screen Image */}
      {lightboxImage && createPortal(
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
        </div>,
        document.body
      )}
    </section>
  );
};

export default Projects;
