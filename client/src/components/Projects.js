import React, { useState } from 'react';
import { FiExternalLink, FiFolder, FiStar, FiFilter } from 'react-icons/fi';

const Projects = ({ projects = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const defaultProjects = [
    {
      _id: '1',
      title: 'ACADOCAI — Medical Education Platform',
      description: 'Production-grade AI platform for MBBS students. RAG pipeline grounded in medical textbooks, adaptive recall engine, automated MCQ generation, and clinical vignette creation.',
      tags: ['RAG', 'FastAPI', 'Qdrant', 'Next.js', 'BERT', 'T5'],
      category: 'ai-ml',
      icon: '🏥',
      featured: true,
      order: 1
    },
    {
      _id: '2',
      title: 'Vehicle Re-ID System',
      description: 'Cross-camera vehicle re-identification using deep metric learning. ResNet-50 backbone with triplet loss, fused with HSV, LBP, and YOLO features. Evaluated on VeRi-776 and VehicleID.',
      tags: ['PyTorch', 'ResNet-50', 'Triplet Loss', 'YOLO', 'OpenCV'],
      category: 'cv',
      icon: '🚗',
      featured: true,
      order: 2
    },
    {
      _id: '3',
      title: 'Azure ML Pipeline',
      description: 'End-to-end MLOps pipeline on Azure — data ingestion from Data Lake, model training with HyperDrive, CI/CD via Azure DevOps, Docker/Kubernetes deployment.',
      tags: ['Azure ML', 'Docker', 'Kubernetes', 'Azure DevOps', 'PySpark'],
      category: 'mlops',
      icon: '☁️',
      featured: true,
      order: 3
    },
    {
      _id: '4',
      title: 'Production NLP Pipeline',
      description: 'Text classification, sentiment analysis, and NER using BERT, GPT, and T5. Production-grade with SHAP/LIME explainability and Power BI monitoring dashboards.',
      tags: ['BERT', 'GPT', 'T5', 'SHAP', 'Power BI'],
      category: 'nlp',
      icon: '💬',
      featured: true,
      order: 4
    },
    {
      _id: '5',
      title: 'Adaptive Recall Engine',
      description: 'Spaced repetition system using cognitive science principles. Tracks weak areas and schedules optimal review cycles for medical students.',
      tags: ['FastAPI', 'Spaced Repetition', 'Python', 'Cognitive Science'],
      category: 'ai-ml',
      icon: '🧠',
      featured: true,
      order: 5
    },
    {
      _id: '6',
      title: 'Real-time Model Monitoring',
      description: 'Interactive Power BI dashboards for real-time model performance monitoring. Azure Synapse Analytics for analytical SQL queries and drift detection.',
      tags: ['Power BI', 'Synapse Analytics', 'Azure SQL', 'Monitoring'],
      category: 'mlops',
      icon: '📊',
      featured: true,
      order: 6
    }
  ];

  const projectList = projects && projects.length > 0 ? projects : defaultProjects;

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI & GenAI' },
    { id: 'cv', label: 'Computer Vision' },
    { id: 'nlp', label: 'NLP & LLMs' },
    { id: 'mlops', label: 'MLOps & Cloud' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectList
    : projectList.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="section-label">03 // Portfolio</div>
      <h2 className="section-title">Featured Engineering Projects</h2>
      <p className="section-desc">
        A curated selection of machine learning architectures, automated pipelines, and intelligent platforms I have built.
      </p>

      {/* Filter Tabs */}
      <div className="projects-filter-bar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project._id || project.title} className={`project-card ${project.featured ? 'is-featured' : ''}`}>
            <div className="project-card-header">
              <div className="project-icon-badge">{project.icon || '⚡'}</div>
              <div className="project-actions">
                {project.featured && (
                  <span className="featured-badge"><FiStar /> Featured</span>
                )}
              </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tags-list">
              {project.tags?.map((tag, tIdx) => (
                <span key={tIdx} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
