import React from 'react';

export const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-5">
      {/* Title */}
      <h2
        style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
          fontWeight: 700,
          color: '#1f242d',
          marginBottom: '14px',
          letterSpacing: '-0.5px',
        }}
      >
        {title}
      </h2>

      {/* Light Blue Accent Bar */}
      <div
        style={{
          width: '56px',
          height: '4px',
          backgroundColor: '#82b5ff',
          borderRadius: '4px',
          margin: '0 auto 16px auto',
        }}
      />

      {/* Subtitle */}
      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
            color: '#4b5563',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};