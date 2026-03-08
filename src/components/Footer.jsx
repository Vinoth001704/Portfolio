import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { UserContext } from '../context/UserConext'

export const Footer = () => {
  const user = useContext(UserContext) || {};
  const contact = user.contact || {};

  return (
    <footer className="bg-light text-dark pt-5">
      <div className="container">
        <div className="row align-items-start">
          {/* Left Side */}
          <div className="col-md-6 mb-4">
            <h2 className="fw-bold">
              Hire Me for Your Next{" "}
              <span className="text-primary">Big Project!</span>
            </h2>
            <p className="text-muted">
              Contact me in any convenient way to discuss your idea.
            </p>
            <div className="d-flex gap-3">
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="text-dark"
                  title="Email"
                >
                  <Icon icon="mdi:gmail" width={24} />
                </a>
              )}
              {contact.github && (
                <a
                  href={contact.github}
                  className="text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <Icon icon="mdi:github" width={24} />
                </a>
              )}
              {contact.linkedin && (
                <a
                  href={contact.linkedin.startsWith('http') ? contact.linkedin : `https://${contact.linkedin}`}
                  className="text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <Icon icon="mdi:linkedin" width={24} />
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-uppercase">Navigation</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-dark text-decoration-none">Portfolio</Link></li>
              <li><Link to="/about" className="text-dark text-decoration-none">About Me</Link></li>
              <li><Link to="/education" className="text-dark text-decoration-none">Education</Link></li>
              <li><Link to="/skill" className="text-dark text-decoration-none">Skills</Link></li>
              <li><Link to="/project" className="text-dark text-decoration-none">Projects</Link></li>
              <li><Link to="/contact" className="text-dark text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-uppercase">Information</h6>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Location:</strong> {contact.location}</p>
          </div>
        </div>

        <hr />

        {/* Bottom */}
        <div className="row pb-3">
          <div className="col d-flex justify-content-between">
            <p className="mb-0">© {new Date().getFullYear()} {user.name}</p>
            <p className="mb-0 fw-bold">ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  )
}