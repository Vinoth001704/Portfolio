import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function ContactPage() {
  return (
    <section className="container py-5 " id='contact'>
      <div className="row justify-content-center align-items-center">
        {/* Contact Info Card */}
        <div className="col-12 col-lg-6 mb-4">
          <div className="contact-card p-5 h-100 rounded-4 shadow-sm bg-white">
            <p className="text-uppercase text-secondary mb-2" style={{ letterSpacing: '1px', fontSize: '0.95rem' }}>
              Let's work together
            </p>
            <h2 className="fw-bold mb-3" style={{ fontSize: '2.2rem', lineHeight: '1.2' }}>
              Start a <span className="text-primary">Conversation</span> About Your Next Project
            </h2>
            <p className="mb-4 text-secondary" style={{ fontSize: '1.05rem' }}>
              Interested in collaborating or have a question? Reach out and I'll respond promptly to help bring your ideas to life.
            </p>
            <div className="mb-3 d-flex align-items-center">
              <span className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: 40, height: 40 }}>
                <i className="bi bi-envelope" style={{ fontSize: '1.3rem' }}></i>
              </span>
              <div>
                <div className="fw-semibold">E-mail</div>
                <div>vinothkumar00023@gmail.com</div>
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <span className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: 40, height: 40 }}>
                <i className="bi bi-telephone" style={{ fontSize: '1.3rem' }}></i>
              </span>
              <div>
                <div className="fw-semibold">Phone number</div>
                <div>+91 80727 31639</div>
              </div>
            </div>
      
           
          </div>
        </div>
        {/* Contact Form Card */}
        <div className="col-12 col-lg-6 mb-4">
          <div className="contact-card p-5 h-100 rounded-4 shadow-sm bg-white">
            <form>
              <div className="mb-3">
                <input type="text" className="form-control form-control-lg rounded-3" placeholder="Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control form-control-lg rounded-3" placeholder="Email" />
              </div>
             
              <div className="mb-4">
                <textarea className="form-control form-control-lg rounded-3" rows="3" placeholder="Type your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg rounded-pill w-100 d-flex align-items-center justify-content-center">
                <span className="me-2"><i className="bi bi-arrow-right-circle"></i></span>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}