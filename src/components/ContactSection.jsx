import React, { useContext } from 'react';
import { Icon } from '@iconify/react';
import { SectionHeader } from './SectionHeader';
import { UserContext } from '../context/UserConext';

export const ContactSection = () => {
  const user = useContext(UserContext) || {};
  const contact = user.contact || {};
  const contactOptions = [
    { id: 'email', title: 'Email', value: contact.email, icon: 'mdi:email-outline', color: '#7bc0ff', href: contact.email ? `mailto:${contact.email}` : null },
    { id: 'linkedin', title: 'LinkedIn', value: 'Connect with me', icon: 'mdi:linkedin', color: '#2563eb', href: contact.linkedin },
    { id: 'github', title: 'GitHub', value: 'View my code', icon: 'mdi:github', color: '#1f2937', href: contact.github },
    { id: 'instagram', title: 'Instagram', value: 'Follow me', icon: 'mdi:instagram', color: '#e1306c', href: contact.instagram },
  ];
  const contactLinks = contactOptions.filter((item) => item.href);

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <div className="container py-5">
        
        {/* Section Header */}
        <SectionHeader title=" Let's Connect" subtitle="Ready to start your next project? Let's work together!" />


        {/* Main Content Column */}
        <div className="" style={{ maxWidth: '540px' }}>
          
          {/* Intro Text */}
          <div className="mb-4">
            <h4 className="fw-bold d-flex align-items-center gap-2 mb-3" style={{ fontSize: '1.25rem' }}>
              <Icon icon="mdi:message-text-outline" color="#7bc0ff" width={26} /> 
              Get In Touch
            </h4>
            <p className="text-secondary" style={{ fontSize: '0.99rem', lineHeight: 1.6 }}>
              I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about web development. Feel free to reach out!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="d-flex flex-column gap-3 mb-4">
            {contactLinks.map((item) => (
              <a 
                key={item.id} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link-card"
              >
                <div 
                  className="contact-icon-wrapper" 
                  style={{ backgroundColor: item.color }}
                >
                  <Icon icon={item.icon} color="#ffffff" width={22} height={22} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-title">{item.title}</span>
                  <span className="contact-card-desc">{item.value}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Quick Response Box */}
          <div className="quick-response-box">
            <h6 className="fw-bold mb-2 text-dark" style={{ fontSize: '0.99rem' }}>Quick Response</h6>
            <p className="text-secondary mb-0" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
              I typically respond to emails within 24 hours. For urgent matters, feel free to connect with me on LinkedIn.
            </p>
          </div>

        </div>
      </div>

      <style>{`
        /* Contact Link Card */
        .contact-link-card {
          display: flex;
          align-items: left;
          gap: 16px;
          padding: 16px;
          background-color: #ffffff;
          border: 1px solid #edf0f5;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.015);
        }

        .contact-link-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
          border-color: #e2e8f0;
        }

        /* Icon Wrapper */
        .contact-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Text Block */
        .contact-card-text {
          display: flex;
          flex-direction: column;
        }

        .contact-card-title {
          font-weight: 700;
          color: #1a202c;
          font-size: 0.95rem;
          margin-bottom: 2px;
        }

        .contact-card-desc {
          color: #64748b;
          font-size: 0.9rem;
        }

        /* Quick Response Information Box */
        .quick-response-box {
          background-color: #ffffff;
          border: 1px solid #edf0f5;
          border-radius: 12px;
          padding: 20px 24px;
          margin-top: 24px;
        }
      `}</style>
    </section>
  );
};