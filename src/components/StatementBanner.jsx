import React from 'react';
import { Icon } from '@iconify/react';
export const StatementBanner = ({content ,icon ,color}) => {
  return (
    <section className="statement-section">
      <div className="container d-flex justify-content-center">
        <p className="statement-text">
            {content}
             <Icon  icon={ icon} width={28} height={28} color={color} />
        </p>
      </div>

      <style>{`
        .statement-section {
          width: 100%;
          background-color: #ffffff;
          padding: 90px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .statement-text {
          max-width: 700px;           /* Controls line length to create the 3 balanced lines */
          text-align: center;
          font-family: 'Poppins', system-ui, -apple-system, sans-serif;
          font-size: 1.125rem;        /* 18px */
          font-weight: 400;
          color: #2b303a;             /* Subtle soft dark charcoal matching the image */
          line-height: 1.75;          /* Comfortable vertical sentence spacing */
          letter-spacing: 0.15px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .statement-section {
            padding: 50px 16px;
          }
          .statement-text {
            font-size: 1rem;
            line-height: 1.65;
            max-width: 90%;
          }
        }
      `}</style>
    </section>
  );
};