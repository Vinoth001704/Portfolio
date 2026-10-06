import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { UserContext } from '../context/UserConext';

export default function ContactPage() {
  const user = useContext(UserContext) || {};
  const contact = user.contact || {};
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(e.target);
    // Replace with your public access key from https://web3forms.com
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setStatus('Message sent successfully!');
        e.target.reset();
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('Network error. Please try again later.');
    }
  };

  return (
    <section className="container py-5" id="contact">
      <div className="row justify-content-center align-items-center">
        {/* Info Column */}
        <div className="col-12 col-lg-6 mb-4">
          <div className="contact-card p-5 h-100 rounded-4 shadow-sm bg-white">
            <p className="text-uppercase text-secondary mb-2" style={{ letterSpacing: '1px', fontSize: '0.95rem' }}>
              Let's work together
            </p>
            <h2 className="fw-bold mb-3" style={{ fontSize: '2.2rem', lineHeight: '1.2' }}>
              Start a <span className="text-primary">Conversation</span>
            </h2>
            <p className="mb-4 text-secondary">
              Interested in collaborating or have an opportunity? Reach out and I'll respond promptly.
            </p>
            {contact.email && <div className="mb-3 d-flex align-items-center">
              <span className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: 40, height: 40 }}>
                <i className="bi bi-envelope"></i>
              </span>
              <div>
                <div className="fw-semibold">E-mail</div>
                <div>{contact.email}</div>
              </div>
            </div>}
            {contact.phone && <div className="mb-3 d-flex align-items-center">
              <span className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: 40, height: 40 }}>
                <i className="bi bi-telephone"></i>
              </span>
              <div>
                <div className="fw-semibold">Phone number</div>
                <div>{contact.phone}</div>
              </div>
            </div>}
          </div>
        </div>

        {/* Form Column */}
        <div className="col-12 col-lg-6 mb-4">
          <div className="contact-card p-5 h-100 rounded-4 shadow-sm bg-white">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input type="text" name="name" required className="form-control form-control-lg rounded-3" placeholder="Name" />
              </div>
              <div className="mb-3">
                <input type="email" name="email" required className="form-control form-control-lg rounded-3" placeholder="Email" />
              </div>
              <div className="mb-4">
                <textarea name="message" required className="form-control form-control-lg rounded-3" rows="3" placeholder="Type your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg rounded-pill w-100">
                Send Message
              </button>
              {status && <p className="mt-3 text-center fw-medium text-primary">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}