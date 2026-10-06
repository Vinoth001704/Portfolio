import React, { useContext } from 'react';
import { UserContext } from '../context/UserConext';

export default function EducationPage() {
  const user = useContext(UserContext) || {};
  const educationList = user.education || [];

  return (
    <section className="container py-5">
      <div className="text-center text-md-start mb-5">
        <h3 className="text-muted fs-5 text-uppercase fw-semibold">Career Highlights & Learning Milestones</h3>
        <h1 className="text-primary fw-bold display-4">Education</h1>
      </div>

      <div className="row justify-content-center g-4">
        {educationList.map((item, idx) => (
          <div key={idx} className="col-12 col-lg-10">
            <div className="card shadow-sm border-0 rounded-4 p-4 fade-in">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-2">
                  <span className="badge bg-primary rounded-pill px-3 py-2">{item.year}</span>
                  <span className="badge bg-info-subtle text-info-emphasis px-3 py-2 rounded-pill fs-6">
                    {item.percentage}
                  </span>
                </div>

                <h4 className="card-title fw-bold text-dark mb-2">
                  {item.degree} {item.field ? `(${item.field})` : ''}
                </h4>

                <div className="text-secondary fw-medium mb-3">
                  {item.college && <span>{item.college}, </span>}
                  {item.school && <span>{item.school}, </span>}
                  {item.institution && <span>{item.institution}, </span>}
                  {item.board && <span>{item.board}, </span>}
                  <span>{item.Place}</span>
                </div>

                <p className="card-text text-muted lh-base">{item.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
// import React, { useContext } from 'react';
// import { UserContext } from '../context/UserConext';

export const Education = () => {
  const user = useContext(UserContext) || {};
  
  // Fallback data if user.education isn't defined in context yet
  const defaultEducation = [
    {
      institution: "Gnanamani College of Technology",
      degree: "B.E. Computer Science and Engineering",
      scoreType: "CGPA",
      score: "8.2",
      year: "2022 – 2026",
      location: "Namakkal, Tamil Nadu"
    },
    {
      institution: "SPS Matric Hr. Sec. School",
      degree: "Higher Secondary Certificate (H.S.C)",
      scoreType: "Percentage",
      score: "76%",
      year: "2020 – 2022",
      location: "Salem, Tamil Nadu"
    },
    {
      institution: "SPS Matric Hr. Sec. School",
      degree: "Secondary School Leaving Certificate (S.S.L.C)",
      scoreType: "Percentage",
      score: "88.8%",
      year: "2019 – 2020",
      location: "Salem, Tamil Nadu"
    }
  ];

  const educationList = user.education || defaultEducation;

  return (
    <section id="education" className="py-5" style={{ backgroundColor: '#fcfcfd', minHeight: '90vh' }}>
      <div className="container py-4" style={{ maxWidth: '900px' }}>
        
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark mb-2" style={{ fontSize: '2.4rem', letterSpacing: '-0.5px' }}>
            Education
          </h2>
          <div className="mx-auto mb-2" style={{ width: '56px', height: '3px', backgroundColor: '#60a5fa', borderRadius: '2px' }}></div>
          <p className="text-muted fs-6">
            My academic journey and educational background
          </p>
        </div>

        {/* Education Cards Stack */}
        <div className="d-flex flex-column gap-4">
          {educationList.map((item, idx) => (
            <div key={idx} className="education-card">
              <div className="row align-items-center g-3">
                
                {/* Left Side: Institution, Degree, Score */}
                <div className="col-12 col-md-8 text-start">
                  <h3 className="fw-bold text-dark mb-1" style={{ fontSize: '1.2rem', letterSpacing: '-0.2px' }}>
                    {item.institution || item.college || item.school}
                  </h3>
                  <div className="text-primary fw-medium mb-2" style={{ fontSize: '0.98rem' }}>
                    {item.degree} {item.field ? `(${item.field})` : ''}
                  </div>
                  {(item.score || item.percentage) && (
                    <div className="text-secondary fw-semibold" style={{ fontSize: '0.9rem' }}>
                      {item.scoreType || 'Percentage'}: <span className="text-dark fw-bold">{item.score || item.percentage}</span>
                    </div>
                  )}
                </div>

                {/* Right Side: Year & Location */}
                <div className="col-12 col-md-4 text-md-end text-start">
                  <div className="fw-bold text-dark mb-1" style={{ fontSize: '0.98rem' }}>
                    {item.year}
                  </div>
                  <div className="text-muted" style={{ fontSize: '0.9rem' }}>
                    {item.location || item.Place}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        /* Education Card Style */
        .education-card {
          background: #ffffff;
          border: 1px solid #edf0f5;
          border-radius: 16px;
          padding: 28px 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .education-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          border-color: #e2e8f0;
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .education-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};