import React from 'react';
import thankyou from '../images/thankyou.jpg';
// import './ThankYou.css';

export const ThankYou = () => {
  return (
    <div className="thankyou-page">
      <img
        src={thankyou}
        alt="Thank You"
        className="thankyou-img"
        style={{
          width: '100%',
          maxWidth: '850px',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
        }}
      />
    </div>
  );
};