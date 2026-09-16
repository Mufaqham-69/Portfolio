import React from 'react';
import { FiCode, FiCloud, FiCpu, FiTool, FiCheck } from 'react-icons/fi';

const Skills = ({ profile }) => {
  const skillGroups = profile?.skills || [
    {
      group: 'Languages & Frameworks',
      icon: '🐍',
      items: ['Python', 'PyTorch', 'TensorFlow', 'Keras', 'Scikit-Learn', 'PySpark', 'SQL', 'R', 'Java', 'FastAPI', 'Next.js']
    },
    {
      group: 'Cloud & MLOps',
      icon: '☁️',
      items: ['Azure ML', 'Azure DevOps', 'Azure Data Lake', 'Azure Synapse', 'Azure Cognitive Services', 'Docker', 'Kubernetes', 'MLflow', 'GitHub Actions']
    },
    {
      group: 'AI Domains',
      icon: '🤖',
      items: ['Deep Learning', 'NLP', 'Computer Vision', 'RAG', 'Generative AI', 'MLOps', 'Metric Learning', 'XAI']
    },
    {
      group: 'Tools & Databases',
      icon: '🛠️',
      items: ['OpenCV', 'Hugging Face', 'Qdrant', 'FAISS', 'Power BI', 'Tableau', 'Git', 'Pandas', 'NumPy', 'Jupyter']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-label">04 // Technical Arsenal</div>
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-desc">
        Core tools, frameworks, and cloud services I use to build scalable AI infrastructure.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group, gIdx) => (
          <div key={gIdx} className="skill-card">
            <div className="skill-card-header">
              <span className="skill-group-icon">{group.icon}</span>
              <h3 className="skill-group-title">{group.group}</h3>
            </div>
            <div className="skill-badges-container">
              {group.items.map((skill, sIdx) => (
                <span key={sIdx} className="skill-pill">
                  <span className="skill-pill-bullet"></span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
