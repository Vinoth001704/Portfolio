import React, { useContext, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { UserContext } from '../context/UserConext';

export const Contact = ({ title }) => {
  const [status, setStatus] = useState('');
  const user = useContext(UserContext) || {};
  const contact = user.contact || {};

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (title) document.title = title;
  }, [title]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(e.target);
    // Replace with your Web3Forms access key from https://web3forms.com
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus('Thank you! Your message was sent successfully.');
        e.target.reset();
      } else {
        setStatus('Could not send message. Please try again.');
      }
    } catch {
      setStatus('Network error. Please try again later.');
    }
  };

  return (
    <section className="container py-5" id="contact">
      <div className="row justify-content-center align-items-center g-4">
        {/* Left Column: Contact Information */}
        <div className="col-12 col-lg-6">
          <div className="p-4 p-md-5 rounded-4 shadow-sm bg-white">
            <span className="text-uppercase text-primary fw-bold small" style={{ letterSpacing: '1px' }}>
              Let's work together
            </span>
            <h2 className="fw-bold display-6 my-3">
              Start a <span className="text-primary">Conversation</span>
            </h2>
            <p className="text-muted mb-4">
              Interested in collaborating, hiring, or discussing a project? Reach out and I'll respond promptly.
            </p>

            {contact.email && <div className="d-flex align-items-center mb-3">
              <div className="bg-primary text-white rounded-circle p-2 me-3 d-flex justify-content-center align-items-center" style={{ width: 44, height: 44 }}>
                <Icon icon="mdi:email-outline" width={22} />
              </div>
              <div>
                <div className="fw-semibold">E-mail</div>
                <div className="text-muted">{contact.email}</div>
              </div>
            </div>}

            {contact.phone && <div className="d-flex align-items-center">
              <div className="bg-primary text-white rounded-circle p-2 me-3 d-flex justify-content-center align-items-center" style={{ width: 44, height: 44 }}>
                <Icon icon="mdi:phone-outline" width={22} />
              </div>
              <div>
                <div className="fw-semibold">Phone</div>
                <div className="text-muted">{contact.phone}</div>
              </div>
            </div>}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="col-12 col-lg-6">
          <div className="p-4 p-md-5 rounded-4 shadow-sm bg-white">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="form-control form-control-lg rounded-3" 
                  placeholder="Your Name" 
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="form-control form-control-lg rounded-3" 
                  placeholder="name@example.com" 
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Message</label>
                <textarea 
                  name="message" 
                  required 
                  className="form-control form-control-lg rounded-3" 
                  rows="3" 
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg rounded-pill w-100 fw-semibold">
                Send Message
              </button>

              {status && (
                <div className="mt-3 text-center text-primary fw-medium">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};