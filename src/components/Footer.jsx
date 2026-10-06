import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { UserContext } from '../context/UserConext';

export const Footer = () => {
  const user = useContext(UserContext) || {};
  const contact = user.contact || {};

  return (
    <footer className="bg-white text-dark pt-5 border-top mt-auto">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-12 col-md-6 mb-4">
            <h2 className="fw-bold">
              Hire Me for Your Next <span className="text-primary">Big Project!</span>
            </h2>
            <p className="text-muted">
              Feel free to reach out to discuss collaboration opportunities or project ideas.
            </p>
            <div className="d-flex gap-3 fs-4 mt-3">
              {contact.email && (
                <a href={`mailto:${contact.email}`} className="text-dark" title="Email">
                  <Icon icon="mdi:gmail" width={26} />
                </a>
              )}
              {contact.github && (
                <a href={contact.github} className="text-dark" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <Icon icon="mdi:github" width={26} />
                </a>
              )}
              {contact.linkedin && (
                <a href={contact.linkedin} className="text-dark" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <Icon icon="mdi:linkedin" width={26} />
                </a>
              )}
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <h6 className="fw-bold text-uppercase text-secondary mb-3">Navigation</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
              <li><Link to="/about" className="text-decoration-none text-muted">About Me</Link></li>
              <li><Link to="/education" className="text-decoration-none text-muted">Education</Link></li>
              <li><Link to="/skill" className="text-decoration-none text-muted">Skills</Link></li>
              <li><Link to="/project" className="text-decoration-none text-muted">Projects</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-muted">Contact</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <h6 className="fw-bold text-uppercase text-secondary mb-3">Information</h6>
            <p className="mb-1 text-muted"><strong>Name:</strong> {user.name}</p>
            <p className="mb-1 text-muted"><strong>Location:</strong> {contact.location}</p>
            <p className="mb-1 text-muted"><strong>Phone:</strong> {contact.phone}</p>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row pb-4">
          <div className="col d-flex justify-content-between flex-wrap gap-2 text-muted small">
            <span>© {new Date().getFullYear()} {user.name}. All rights reserved.</span>
            <span className="fw-semibold">BUILT WITH REACT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};