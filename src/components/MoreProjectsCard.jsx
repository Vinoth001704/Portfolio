import React from 'react';
import { Icon } from '@iconify/react';

export const MoreProjectsCard = () => {
  return (
  <div className="d-flex justify-content-center w-100 my-5 hover-scale-card" style={{ minHeight: '300px' }}>
      <div className="coming-soon-card">
        {/* Gradient Plus Icon Circle */}
        <div className="plus-icon-circle">
          <Icon icon="mdi:plus" width={38} height={38} color="#ffffff" />
        </div>

        {/* Heading */}
        <h3 className="coming-soon-title">More Projects Coming Soon!</h3>

        {/* Description */}
        <p className="coming-soon-desc">
          I'm actively working on new projects that showcase my growing skills in full-stack development. Check back soon to see my latest work!
        </p>

        {/* Feature Pills */}
        <div className="d-flex justify-content-center align-items-center gap-2 flex-wrap mt-2">
          <span className="pill-badge pill-dev">
            🚀 In Development
          </span>
          <span className="pill-badge pill-ideas">
            💡 New Ideas
          </span>
          <span className="pill-badge pill-learning">
            🎯 Learning Projects
          </span>
        </div>
      </div>

      <style>{`
        .coming-soon-card {
          background: #ffffff;
          border: 1px solid #edf1f7;
          border-radius: 20px;
          padding: 56px 40px;
          max-width: 660px;
          width: 100%;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 50, 150, 0.04);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .plus-icon-circle {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a5d8ff 0%, #b2f2bb 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          box-shadow: 0 6px 16px rgba(165, 216, 255, 0.35);
        }

        .coming-soon-title {
          font-size: clamp(1.4rem, 2.5vw, 1.75rem);
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 16px;
          letter-spacing: -0.3px;
        }

        .coming-soon-desc {
          font-size: 0.99rem;
          color: #4a5568;
          line-height: 1.65;
          max-width: 620px;
          margin: 0 auto 28px auto;
        }
.hover-scale-card {
  transition: transform 0.3s ease-in-out;
}

.hover-scale-card:hover {
  transform: scale(1.02);
}
        .pill-badge {
          font-size: 0.85rem;
          font-weight: 600;
          color: #2d3748;
          padding: 6px 14px;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid transparent;
        }

        /* Pill Pastels */
        .pill-dev {
          background-color: #fef9c3; /* Soft warm yellow */
          border-color: #fef08a;
        }

        .pill-ideas {
          background-color: #ffedd5; /* Soft peach */
          border-color: #fed7aa;
        }

        .pill-learning {
          background-color: #fce7f3; /* Soft light pink */
          border-color: #fbcfe8;
        }

        @media (max-width: 576px) {
          .coming-soon-card {
            padding: 40px 20px;
          }
          .plus-icon-circle {
            width: 64px;
            height: 64px;
          }
        }
      `}</style>
    </div>
  );
};