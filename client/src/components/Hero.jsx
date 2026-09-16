import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight, FiDownload, FiTerminal, FiDatabase, FiCpu, FiAward } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = ({ profile }) => {
  const stats = profile?.stats || [
    { label: 'Internships', value: '4+' },
    { label: 'Technologies', value: '15+' },
    { label: 'ML Projects', value: '6+' },
    { label: 'CV Variants', value: '3' }
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background-glow"></div>
      <div className="hero-grid-pattern"></div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="pulse-dot"></span>
          <span>Available for AI/ML Roles & Collaborations</span>
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">{profile?.name || 'Syed Ali Hussain'}</span>
        </h1>

        <div className="hero-subtitle-wrapper">
          <span className="typing-prefix">I build </span>
          <TypeAnimation
            sequence={[
              'Production-Grade AI & ML Systems',
              2000,
              'Deep Learning & NLP Pipelines',
              2000,
              'Scalable MLOps Architectures on Azure',
              2000,
              'Computer Vision & Metric Learning Models',
              2000,
              'RAG & GenAI Medical Applications',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="hero-typing-text"
          />
        </div>

        <p className="hero-description">
          {profile?.bio ||
            'AI/ML Engineer building production-grade systems — from data pipelines to deployed models. Specializing in Azure ML, Deep Learning, NLP, and Computer Vision.'}
        </p>

        <div className="hero-cta-group">
          <Link to="projects" smooth={true} duration={500} offset={-70} className="btn btn-primary">
            <span>Explore Work</span>
            <FiArrowRight />
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-70} className="btn btn-secondary">
            <span>Get in Touch</span>
          </Link>
        </div>

        {/* Quick Tech Highlights */}
        <div className="hero-tech-pills">
          <span className="pill"><FiCpu /> PyTorch / TensorFlow</span>
          <span className="pill"><FiTerminal /> Azure ML & MLOps</span>
          <span className="pill"><FiDatabase /> Qdrant & Vector DBs</span>
          <span className="pill"><FiAward /> RAG & Generative AI</span>
        </div>

        {/* Hero Stats */}
        <div className="hero-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
