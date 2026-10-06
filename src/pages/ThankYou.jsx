import React from 'react';
import thankyouImage from '../assets/images/thankyou.jpg';

export const ThankYou = () => {
  return (
    <section id="thankyou" className="thankyou-section">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        {/* Spray Painting Character Artwork */}
        <div className="thankyou-image-wrapper">
          <img
            src={thankyouImage}
            alt="Thank You Graffiti Character"
            className="thankyou-artwork"
          />
        </div>

        {/* Action Link to Top */}
        <div className="mt-4 text-center">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              const homeEl = document.getElementById('home');
              if (homeEl) {
                homeEl.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="btn btn-outline-primary rounded-pill px-4 py-2 fw-medium"
          >
            Back to Top ↑
          </a>
        </div>
      </div>

      <style>{`
        .thankyou-section {
          width: 100%;
          min-height: 85vh;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          position: relative;
          overflow: hidden;
        }

        .thankyou-image-wrapper {
          width: 100%;
          max-width: 820px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .thankyou-artwork {
          width: 100%;
          max-height: 640px;
          height: auto;
          object-fit: contain;
          display: block;
          margin: 0 auto;
          filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.06));
          transition: transform 0.3s ease;
        }

        // .thankyou-artwork:hover {
        //   transform: scale(1.02);
        // }

        @media (max-width: 991px) {
          .thankyou-section {
            min-height: 65vh;
            padding: 50px 16px;
          }
          .thankyou-artwork {
            max-height: 480px;
          }
        }

        @media (max-width: 576px) {
          .thankyou-section {
            min-height: 50vh;
            padding: 40px 12px;
          }
          .thankyou-artwork {
            max-height: 340px;
          }
        }
      `}</style>
    </section>
  );
};