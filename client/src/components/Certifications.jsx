import React from 'react';
import { FiAward, FiCheckCircle, FiExternalLink } from 'react-icons/fi';

const Certifications = ({ profile }) => {
  const certifications = profile?.certifications || [
    { name: 'Azure ML Engineer', issuer: 'Microsoft Azure', icon: '🔷' },
    { name: 'Deep Learning Specialization', issuer: 'Coursera / DeepLearning.AI', icon: '🧠' },
    { name: 'Data Analytics', issuer: 'Deloitte Virtual Internship', icon: '📊' },
    { name: 'Docker & Kubernetes', issuer: 'Container Orchestration', icon: '🐳' }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="section-label">06 // Credentials</div>
      <h2 className="section-title">Certifications & Accreditations</h2>
      <p className="section-desc">
        Industry-recognized certifications and professional credentials validating my technical domain expertise.
      </p>

      <div className="certifications-grid">
        {certifications.map((cert, idx) => (
          <div key={idx} className="cert-card">
            <div className="cert-icon-container">
              <span className="cert-icon">{cert.icon || '🏅'}</span>
            </div>
            <div className="cert-info">
              <h3 className="cert-name">{cert.name}</h3>
              <div className="cert-issuer">{cert.issuer}</div>
            </div>
            <div className="cert-verified-badge">
              <FiCheckCircle /> <span>Verified</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
