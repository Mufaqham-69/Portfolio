import React from 'react';
import { FiBookOpen, FiCalendar, FiAward, FiCheckCircle } from 'react-icons/fi';

const Education = ({ profile }) => {
  const educationList = profile?.education || [
    {
      degree: 'BE in Computer Science & Engineering (AIML)',
      university: 'Osmania University, Hyderabad',
      year: '2022 — 2026',
      cgpa: '73%'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-label">05 // Academics</div>
      <h2 className="section-title">Education & Background</h2>
      <p className="section-desc">
        Academic foundation in core computer science, mathematics, and artificial intelligence.
      </p>

      <div className="education-list">
        {educationList.map((edu, idx) => (
          <div key={idx} className="education-card">
            <div className="edu-icon-box">
              <FiBookOpen />
            </div>
            <div className="edu-details">
              <div className="edu-header">
                <div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-university">{edu.university}</div>
                </div>
                <div className="edu-badge-group">
                  <span className="edu-year-badge"><FiCalendar /> {edu.year}</span>
                  {edu.cgpa && <span className="edu-cgpa-badge"><FiAward /> Score: {edu.cgpa}</span>}
                </div>
              </div>
              <div className="edu-coursework">
                <div className="coursework-title">Key Focus Areas:</div>
                <div className="coursework-tags">
                  <span className="course-tag">Machine Learning & Neural Networks</span>
                  <span className="course-tag">Data Structures & Algorithms</span>
                  <span className="course-tag">Computer Vision</span>
                  <span className="course-tag">Natural Language Processing</span>
                  <span className="course-tag">Database Management Systems</span>
                  <span className="course-tag">Distributed Systems</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
