import React, { useState } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';

const Experience = ({ profile }) => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = profile?.experience || [
    {
      role: 'AI/ML Engineer Intern',
      company: 'Finesse Customized Solutions',
      location: 'Hyderabad',
      date: 'Sep 2025 — Present',
      color: '#6366f1',
      description: [
        'Built end-to-end ML pipelines on Azure — data ingestion, feature engineering, model training, and deployment',
        'Trained and versioned supervised/unsupervised models in Azure ML Studio with HyperDrive tuning',
        'Designed deep learning architectures (CNNs, RNNs, LSTMs, Transformers) for NLP, CV, and speech tasks',
        'Implemented CI/CD pipelines using Azure DevOps, Docker, and Kubernetes for automated model retraining',
        'Built production NLP pipelines for text classification, sentiment analysis, and NER using BERT, GPT, T5',
        'Applied XAI techniques (SHAP, LIME) and cross-validation for model interpretability'
      ]
    },
    {
      role: 'Solution Architect',
      company: 'ACADOCAI',
      location: 'Hyderabad',
      date: '2025 — Present',
      color: '#ec4899',
      description: [
        'Designed and built ACADOCAI — a live, production-grade AI-powered medical education platform for MBBS students',
        'Deployed RAG pipeline grounding answers in indexed medical textbooks using vector embeddings',
        'Built adaptive recall engine using spaced repetition and cognitive science principles',
        'Developed automated case-based MCQ and clinical vignette generation using BERT and T5',
        'Architected full stack: Next.js frontend, Python/FastAPI backend, Qdrant/FAISS vector DB, Docker containers'
      ]
    },
    {
      role: 'Summer Research Intern — Computer Vision',
      company: 'Osmania University',
      location: 'Hyderabad',
      date: 'May 2024 — Aug 2024',
      color: '#06b6d4',
      description: [
        'Tackled cross-camera Vehicle Re-identification (Re-ID) using deep metric learning',
        'Implemented ResNet-50 backbone with triplet loss and batch-hard mining for interclass separation',
        'Fused deep embeddings with HSV colour histograms, LBP texture descriptors, and YOLO-based licence plate proposals',
        'Built GPU-accelerated PyTorch training pipeline with PK-sampler and data augmentation',
        'Evaluated on VeRi-776 and VehicleID benchmarks using Rank-1/5 Accuracy and mAP'
      ]
    },
    {
      role: 'Data Analytics & Technology Virtual Intern',
      company: 'Deloitte',
      location: 'Virtual',
      date: '2024',
      color: '#f59e0b',
      description: [
        "Completed Deloitte's industry-structured virtual program covering data analysis and technology consulting",
        'Applied analytical thinking to real-world business scenarios with data-driven recommendations',
        'Gained exposure to enterprise technology strategy and digital transformation'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-label">02 // Experience</div>
      <h2 className="section-title">Where I've Delivered Impact</h2>
      <p className="section-desc">
        A track record of engineering scalable ML solutions across industry, research, and high-growth platforms.
      </p>

      <div className="experience-container">
        {/* Left Tabs */}
        <div className="exp-tabs-list">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              className={`exp-tab-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <span className="tab-indicator" style={{ backgroundColor: exp.color || 'var(--accent)' }}></span>
              <div className="tab-text">
                <div className="tab-company">{exp.company}</div>
                <div className="tab-role">{exp.role}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Right Details Card */}
        <div className="exp-content-card">
          {experiences[activeTab] && (
            <div className="exp-detail-wrapper">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role-title">
                    {experiences[activeTab].role}{' '}
                    <span className="exp-company-highlight" style={{ color: experiences[activeTab].color || 'var(--accent)' }}>
                      @ {experiences[activeTab].company}
                    </span>
                  </h3>
                  <div className="exp-metadata">
                    <span className="meta-badge"><FiCalendar /> {experiences[activeTab].date}</span>
                    <span className="meta-badge"><FiMapPin /> {experiences[activeTab].location}</span>
                  </div>
                </div>
              </div>

              <ul className="exp-bullets">
                {experiences[activeTab].description.map((bullet, bIdx) => (
                  <li key={bIdx} className="exp-bullet-item">
                    <span className="bullet-icon"><FiCheckCircle /></span>
                    <span className="bullet-text">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
