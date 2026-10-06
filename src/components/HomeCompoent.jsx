import React, { useContext } from "react";
import { Link } from "react-router-dom";
import homeImage from '../assets/images/homeImage.jpg';
import { UserContext } from "../context/UserConext";

export default function HomeComponent() {
  const user = useContext(UserContext) || {};

  return (
    <section className="container min-vh-100 d-flex align-items-center py-5">
      <div className="row w-100 align-items-center justify-content-between g-4">
        
        {/* Left Column: Heading and Name */}
        <div className="col-12 col-lg-4 text-center text-lg-start">
          <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-3">
            Welcome to my space
          </span>
          <h1 className="text-primary fw-bold display-4 mb-2">Portfolio</h1>
          <h2 className="text-muted fs-3 mb-3">2026</h2>
          <h3 className="text-dark fw-bold fs-2">{user.name}</h3>
          
          <div className="mt-4 d-flex gap-3 justify-content-center justify-content-lg-start">
            <Link to="/project" className="button-81">View Work</Link>
            <Link to="/contact" className="button-82">Contact Me</Link>
          </div>
        </div>

        {/* Center Column: Illustration */}
        <div className="col-12 col-lg-4 text-center">
          <img
            src={homeImage}
            alt="Portfolio Illustration"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxHeight: '420px', width: 'auto' }}
          />
        </div>

        {/* Right Column: Roles */}
        <div className="col-12 col-lg-4 text-center text-lg-end">
          <h5 className="text-secondary text-uppercase fw-semibold mb-3" style={{ letterSpacing: '1px' }}>
            Specializations
          </h5>
          {user.role && user.role.map((role, index) => (
            <div
              key={index}
              className="fs-4 text-dark fw-medium mb-2"
            >
              {role}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}