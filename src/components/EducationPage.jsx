import React, { useContext } from 'react';
import { UserContext } from '../context/UserConext';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './EducationPage.css';

export default function EducationPage() {
  const user = useContext(UserContext);

  return (
    <section className="container py-5">
      <h3 className="text-muted">Career Highlights & Learning Milestones</h3>
      <h1 className="text-primary fw-bold text-start display-3 mb-3">Education</h1>
      <div className="row justify-content-center mt-5">
        {user.education.map((item, idx) => (
          <div key={idx} className="col-12 col-md-8 col-lg-8 mb-4">
            <div className="card shadow-sm h-100 fade-in">
              <div className="card-body">
                <span className="badge bg-primary mb-2 mt-2 gap-2">{item.year}</span>
                <h5 className="card-title fw-bold">
                  {item.degree}{item.field ? ` (${item.field})` : ''}<span className="badge bg-info text-dark ms-2">{item.percentage}</span>
                </h5>
                <div className="mb-1">
                  {item.college && <span className="fw-semibold">{item.college}, </span>}
                  {item.school && <span className="fw-semibold">{item.school}, </span>}
                  {item.institution && <span>{item.institution},  </span>}
                  {item.board && <span>{item.board}, </span>}
                  <span>{item.Place}</span>
                </div>
                
                <p className="card-text text-muted">{item.summary}</p>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}