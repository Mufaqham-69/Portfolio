import React from 'react';
import { FiMapPin, FiMail, FiLayers, FiCode, FiActivity, FiServer } from 'react-icons/fi';

const About = ({ profile }) => {
  const highlights = [
    {
      icon: <FiLayers />,
      title: 'End-to-End MLOps',
      desc: 'Building automated data ingestion, model versioning, CI/CD retraining, and containerized deployment with Azure & Docker.'
    },
    {
      icon: <FiActivity />,
      title: 'Deep Learning & CV',
      desc: 'Expertise in CNNs, ResNet, Metric Learning, Triplet Loss, YOLO object detection, and multi-modal feature fusion.'
    },
    {
      icon: <FiCode />,
      title: 'NLP & Generative AI',
      desc: 'Fine-tuning BERT, GPT, T5 models for NER, sentiment analysis, medical textbook RAG pipelines, and vector search.'
    },
    {
      icon: <FiServer />,
      title: 'Production Architectures',
      desc: 'Designing resilient microservices using FastAPI, Next.js, Qdrant/FAISS vector databases, and Power BI monitoring.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-label">01 // About Me</div>
      <h2 className="section-title">Architecting Intelligent Systems from Ground Up</h2>
      <p className="section-desc">
        Bridging the gap between cutting-edge machine learning research and high-performance production engineering.
      </p>

      <div className="about-grid">
        <div className="about-card-main">
          <div className="about-bio-text">
            <p>
              I am an AI/ML Engineer with deep practical experience spanning <strong>Azure Cloud MLOps</strong>,
              <strong> Deep Metric Learning</strong>, and <strong>Large-Scale RAG Architectures</strong>. 
            </p>
            <p>
              Currently pursuing a Bachelor of Engineering in Computer Science & Engineering (AIML) at <strong>Osmania University</strong>, 
              I have led architectural initiatives at <strong>ACADOCAI</strong> (building an AI medical learning platform) and 
              engineered enterprise ML workflows during my tenure at <strong>Finesse Customized Solutions</strong>.
            </p>
            <p>
              My focus is always on engineering robust, explainable, and scalable systems that deliver tangible real-world business value.
            </p>
          </div>

          <div className="about-meta-info">
            <div className="meta-item">
              <span className="meta-icon"><FiMapPin /></span>
              <div>
                <div className="meta-label">Location</div>
                <div className="meta-value">{profile?.location || 'Hyderabad, India'}</div>
              </div>
            </div>
            <div className="meta-item">
              <span className="meta-icon"><FiMail /></span>
              <div>
                <div className="meta-label">Direct Email</div>
                <div className="meta-value">{profile?.email || 'syedalihussain@email.com'}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-highlights-grid">
          {highlights.map((h, i) => (
            <div key={i} className="highlight-card">
              <div className="highlight-icon">{h.icon}</div>
              <h3 className="highlight-title">{h.title}</h3>
              <p className="highlight-desc">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
