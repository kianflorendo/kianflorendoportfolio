import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faCalendar, faBuilding, faTimes } from '@fortawesome/free-solid-svg-icons';
import './LicensesCertifications.css';

interface Certification {
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
    credentialUrl?: string;
    imageUrl?: string;
}

const LicensesCertifications = () => {
    const certificationsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const checkScroll = () => {
            certificationsRef.current.forEach(element => {
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


    const certifications: Certification[] = [
        {
            name: "AI Engineer for Data Scientists Associate",
            issuer: "DataCamp",
            date: "2025",
            credentialId: "AEDS0019472450806",
            credentialUrl: "https://www.datacamp.com/certificate/AEDS0019472450806",
            imageUrl: "/images/certificates/AI Engineer for Data Scientists Associate - Facebook - Post.png"
        },
        {
            name: "Certified Data Science Associate",
            issuer: "DataCamp",
            date: "2025",
            credentialId: "DSA0017610904765",
            credentialUrl: "https://www.datacamp.com/certificate/DSA0017610904765",
            imageUrl: "/images/certificates/DS Associate - Facebook - Post.png"
        },
        {
            name: "Computer Vision Course",
            issuer: "Kaggle",
            date: "2025",
            credentialUrl: "https://www.kaggle.com/learn/certification/kianangeloflorendo/computer-vision",
            imageUrl: "/images/certificates/Kian Angelo Florendo - Computer Vision (1).png"
        },
        {
            name: "Intermediate Machine Learning Course",
            issuer: "Kaggle",
            date: "2025",
            credentialUrl: "https://www.kaggle.com/learn/certification/kianangeloflorendo/intermediate-machine-learning",
            imageUrl: "/images/certificates/Kian Angelo Florendo - Intermediate Machine Learning (1).png"
        },
        {
            name: "Feature Engineering Course",
            issuer: "Kaggle",
            date: "2025",
            credentialUrl: "https://www.kaggle.com/learn/certification/kianangeloflorendo/feature-engineering",
            imageUrl: "/images/certificates/Kian Angelo Florendo - Feature Engineering (1).png"
        }
    ];

    return (
        <>
            <section id="licenses" className="licenses-section">
                <div className="section-title">
                    <h2>Licenses & Certifications</h2>
                </div>
                <div className="certifications-container">
                    <div className="certifications-grid">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="certification-card animate"
                                ref={el => { certificationsRef.current[index] = el; }}
                            >
                                {cert.imageUrl && (
                                    <div
                                        className="cert-image-container"
                                        onClick={() => setSelectedImage(cert.imageUrl!)}
                                    >
                                        <img
                                            src={cert.imageUrl}
                                            alt={`${cert.name} Certificate`}
                                            className="cert-image"
                                        />
                                        <div className="cert-image-overlay">
                                            <span>Click to view full size</span>
                                        </div>
                                    </div>
                                )}
                                <h3 className="cert-name">{cert.name}</h3>
                                <div className="cert-details">
                                    <div className="cert-detail">
                                        <FontAwesomeIcon icon={faBuilding} className="detail-icon" />
                                        <span>{cert.issuer}</span>
                                    </div>
                                    <div className="cert-detail">
                                        <FontAwesomeIcon icon={faCalendar} className="detail-icon" />
                                        <span>{cert.date}</span>
                                    </div>
                                    {cert.credentialId && (
                                        <div className="cert-detail">
                                            <FontAwesomeIcon icon={faAward} className="detail-icon" />
                                            <span className="credential-id">{cert.credentialId}</span>
                                        </div>
                                    )}
                                </div>
                                {cert.credentialUrl && (
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="verify-btn"
                                    >
                                        Verify Certificate
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal for viewing full-size certificate */}
            {selectedImage && (
                <div className="cert-modal" onClick={() => setSelectedImage(null)}>
                    <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="cert-modal-close" onClick={() => setSelectedImage(null)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <img src={selectedImage} alt="Certificate Full View" />
                    </div>
                </div>
            )}
        </>
    );
};

export default LicensesCertifications;
