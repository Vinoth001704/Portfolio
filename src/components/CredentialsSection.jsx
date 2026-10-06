import React, { useContext } from 'react';
import { Icon } from '@iconify/react';
import resumeFile from '../assets/files/VinothKumar.pdf';
import { UserContext } from '../context/UserConext';

export const Resume = () => {
  const user = useContext(UserContext) || {};
  const downloadName = user.name
    ? `${user.name.replace(/\s+/g, '_')}_Resume.pdf`
    : 'Resume.pdf';

  return (
    <section id="resume" className="py-5 bg-white text-center">
      <div className="container py-4">
        {/* Section Heading */}
        <h2 
          className="fw-bold mb-2" 
          style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', color: '#80beff' }}
        >
          Resume
        </h2>
        <p className="text-muted mb-4 fs-6">
          {user.summary || 'Comprehensive overview of my professional profile'}
        </p>

        {/* Gradient Download Button */}
        <div className="d-flex justify-content-center">
          <a 
            href={resumeFile}
            download={downloadName}
            className="resume-gradient-btn d-inline-flex align-items-center gap-2 px-4 py-3 rounded-pill fw-semibold shadow-sm text-decoration-none"
          >
            <Icon height="20" icon="mdi:download-outline" width="20"/>
            Download Resume
          </a>
        </div>
      </div>

      <style>{`
        .resume-gradient-btn {
          background: linear-gradient(135deg, #80beff 0%, #a7ebd0 100%);
          color: #1e293b;
          border: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .resume-gradient-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(128, 190, 255, 0.35) !important;
          color: #0f172a;
        }
      `}</style>
    </section>
  );
};

export const CredentialsSection = () => {
  const user = useContext(UserContext) || {};

  return (
    <section className="credentials-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row g-4">
          
          {/* ── LEFT COLUMN: SKILLS & LANGUAGES ── */}
          <div className="col-12 col-lg-4 d-flex flex-column gap-4">
            
            {/* Skills Card */}
            <div className="cred-card p-4 bg-white rounded-4 shadow-sm border border-light-subtle">
              <h4 className="fw-bold mb-4 fs-5 text-dark">Skills</h4>
              <div className="d-flex flex-wrap gap-2">
                {(user.overallSkills || []).map((skill) => (
                  <span key={skill} className="skill-pill badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div className="cred-card p-4 bg-white rounded-4 shadow-sm border border-light-subtle">
              <h4 className="fw-bold mb-4 fs-5 text-dark">Languages</h4>
              <div className="d-flex flex-wrap gap-4 text-secondary fw-medium fs-6">
                {(user.languages || []).map((language) => (
                  <span key={language}>{language}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: CERTIFICATIONS, PROJECTS, ACHIEVEMENTS ── */}
          <div className="col-12 col-lg-8 d-flex flex-column gap-4">
            
            {/* Certifications Card */}
            <div className="cred-card p-4 bg-white rounded-4 shadow-sm border border-light-subtle">
              <h4 className="fw-bold mb-4 fs-5 text-dark">Certifications</h4>
              <ul className="custom-list text-secondary">
                {(user.certifications || []).map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </div>

            {/* Projects Card */}
            <div className="cred-card p-4 bg-white rounded-4 shadow-sm border border-light-subtle">
              <h4 className="fw-bold mb-4 fs-5 text-dark">Projects</h4>
              <ul className="custom-list text-secondary">
                {(user.projects || []).map((project) => (
                  <li key={project.title}>{project.title}</li>
                ))}
              </ul>
            </div>

            {/* Achievements Card */}
            <div className="cred-card p-4 bg-white rounded-4 shadow-sm border border-light-subtle">
              <h4 className="fw-bold mb-4 fs-5 text-dark">Achievements</h4>
              <ul className="custom-list text-secondary">
                {(user.achievements || []).map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* Soft Mint Green Badge Styling */
        .skill-pill {
          background-color: #d1fae5;
          color: #065f46;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 20px;
          border: 1px solid #a7f3d0;
        }

        /* Clean List Formatting */
        .custom-list {
          list-style: none;
          padding-left: 0;
          margin-bottom: 0;
        }
        
        .custom-list li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 14px;
          line-height: 1.6;
          font-size: 0.95rem;
          color: #4b5563;
        }
        
        .custom-list li:last-child {
          margin-bottom: 0;
        }
        
        .custom-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #9ca3af;
          font-size: 1.25rem;
          line-height: 1.2;
        }
      `}</style>
    </section>
  );
};