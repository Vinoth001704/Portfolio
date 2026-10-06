import React, { useContext } from 'react';
import { Icon } from '@iconify/react';
import { UserContext } from '../context/UserConext';

export const Experience = () => {
  const user = useContext(UserContext) || {};
  const experience = user.experience || [];
  const careerObjective = user.careerObjective;

  return (
    <section id="experience" className="py-5" style={{ backgroundColor: '#fcfcfd', minHeight: '100vh', position: 'relative' }}>
      <div className="container py-4">
        
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark mb-2" style={{ fontSize: '2.4rem', letterSpacing: '-0.5px' }}>
            Experience
          </h2>
          <div className="mx-auto mb-2" style={{ width: '56px', height: '3px', backgroundColor: '#60a5fa', borderRadius: '2px' }}></div>
          <p className="text-muted fs-6">
            Building experience through internships and projects
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="timeline-wrapper position-relative mx-auto" style={{ maxWidth: '820px' }}>
          
          {/* Vertical Timeline Line */}
          <div className="timeline-line"></div>

          {experience.map((item, index) => (
          <div className="timeline-item position-relative mb-5" key={`${item.title}-${index}`}>
            {/* Timeline Node Icon (Fixed size) */}
            <div className="timeline-node blue-node">
              <Icon icon="mdi:office-building-outline" width={20} height={20} color="#ffffff" />
            </div>

            {/* Experience Card */}
            <div className="timeline-card">
              <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
                <div>
                  <h3 className="fw-bold text-dark mb-1" style={{ fontSize: '1.35rem' }}>
                    {item.title}
                  </h3>
                  <div className="d-flex align-items-center gap-1 text-primary fw-semibold" style={{ fontSize: '0.95rem' }}>
                    <Icon icon="mdi:domain" width={18} height={18} />
                    <span>{item.company}</span>
                  </div>
                </div>

                {/* Badges (Duration & Location) */}
                <div className="d-flex align-items-center gap-2">
                  {item.duration && <span className="badge-pill bg-green-soft">
                    <Icon icon="mdi:calendar-blank-outline" width={14} height={14} /> {item.duration}
                  </span>}
                  <span className="badge-pill bg-gray-soft">
                    <Icon icon="mdi:map-marker-outline" width={14} height={14} /> {item.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-secondary mb-4" style={{ fontSize: '0.95rem', lineHeight: 1.65 }}>
                {item.description}
              </p>

              {/* Key Learnings Sub-section */}
              <div className="mb-4">
                <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '0.95rem' }}>Key Learnings:</h6>
                <div className="row g-2">
                  {item.learnings?.map((learning, learningIndex) => (
                    <div key={learning} className="col-12 col-md-6 d-flex align-items-center gap-2 text-secondary" style={{ fontSize: '0.9rem' }}>
                      <span className={`bullet-dot ${['bg-blue', 'bg-green', 'bg-pink', 'bg-purple'][learningIndex % 4]}`}></span> {learning}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="d-flex flex-wrap gap-2 pt-3 border-top">
                {(item.tools || []).map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          ))}

          {/* ──────────────── 2. WHAT'S NEXT ITEM ──────────────── */}
          {careerObjective && <div className="timeline-item position-relative">
            {/* Timeline Node Icon (Smaller Dot) */}
            <div className="timeline-node dot-node">
              <div className="inner-dot"></div>
            </div>

            {/* What's Next Card */}
            <div className="timeline-card">
              <h3 className="fw-bold text-dark mb-3" style={{ fontSize: '1.35rem' }}>
                {careerObjective.title}
              </h3>

              <p className="text-secondary mb-4" style={{ fontSize: '0.95rem', lineHeight: 1.65 }}>
                {careerObjective.description}
              </p>

              {/* Status Pills */}
              <div className="d-flex flex-wrap gap-2">
                {careerObjective.status?.map((status, index) => (
                  <span key={status} className={`badge-pill ${index % 2 === 0 ? 'bg-pink-soft' : 'bg-blue-soft'}`}>
                    {status}
                  </span>
                ))}
              </div>
            </div>
          </div>}

        </div>
      </div>

      <style>{`
        /* Timeline Line */
        .timeline-wrapper {
          padding-left: 50px;
        }

        .timeline-line {
          position: absolute;
          left: 20px;
          top: 15px;
          bottom: 15px;
          width: 2px;
          background-color: #e2e8f0;
        }

        /* Timeline Node Icons */
        .timeline-node {
          position: absolute;
          left: -50px;
          top: 0;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          z-index: 2;
        }

        .blue-node {
          background-color: #3b82f6;
        }

        .dot-node {
          background-color: #ffffff;
          border: 2px solid #cbd5e1;
          width: 36px;
          height: 36px;
          left: -47px;
        }

        .inner-dot {
          width: 10px;
          height: 10px;
          background-color: #3b82f6;
          border-radius: 50%;
        }

        /* Cards Style */
        .timeline-card {
          background: #ffffff;
          border: 1px solid #edf0f5;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .timeline-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        /* Badge Pills */
        .badge-pill {
          font-size: 0.78rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .bg-green-soft {
          background-color: #d1fae5;
          color: #065f46;
        }

        .bg-gray-soft {
          background-color: #f1f5f9;
          color: #475569;
        }

        .bg-pink-soft {
          background-color: #fce7f3;
          color: #9d174d;
        }

        .bg-blue-soft {
          background-color: #eff6ff;
          color: #1e40af;
        }

        /* Bullet Dots for Learnings */
        .bullet-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .bg-blue { background-color: #60a5fa; }
        .bg-green { background-color: #34d399; }
        .bg-pink { background-color: #f472b6; }
        .bg-purple { background-color: #a78bfa; }

        /* Tech Tag Pills */
        .tech-tag {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #334155;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 5px 14px;
          border-radius: 8px;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .timeline-wrapper {
            padding-left: 30px;
          }
          .timeline-line {
            left: 10px;
          }
          .timeline-node {
            left: -35px;
            width: 32px;
            height: 32px;
          }
          .dot-node {
            left: -33px;
            width: 28px;
            height: 28px;
          }
          .timeline-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};