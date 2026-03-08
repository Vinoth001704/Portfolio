import React from 'react';
import './Attainments.css';
import imge from '../assets/Vk.png';
const designSkills = [
  { name: 'Design', percent: 85 },
  { name: 'Branding', percent: 90 },
  { name: 'Ecommerce', percent: 80 }
];

const developerSkills = [
  { name: 'Front-End Development', percent: 90 },
  { name: 'Back-End Development', percent: 85 },
  { name: 'Full-Stack Development', percent: 88 },
  { name: 'Database Management', percent: 75 },
  { name: 'API Integration', percent: 90 }
];

const languageSkills = [
  { name: 'Tamil', percent: 90 },
  { name: 'English', percent: 80 }
];

function CircularProgress({ percent }) {
  const radius = 80;
  const stroke = 8;
  const normalizedRadius = radius - stroke;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;
  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#222"
        fill="none"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{ opacity: 0.18 }}
      />
      <circle
        stroke="#222"
        fill="none"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: 'stroke-dashoffset 1s', }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="2rem"
        fontWeight="bold"
        fill="#222"
      >
        {percent}%
      </text>
    </svg>
  );
}

export const Attainments = () => (
    <>
  
  <div className="attainments-bg container ">
      <h3 className="text-muted fs-5">Showcasing My Core Achievements</h3>
      <h1 className="text-primary fw-bold text-start display-3 mb-3">Attainments</h1>
    <div className="attainments-section">
      <div className="attainments-left">
        <h2 className="attainments-title" style={{color:'#1976d2'}}>Design Skills</h2>
        <div className="attainments-sub">Highlight My Expertise in:</div>
        <div className="attainments-circles ms-md-5">
          {designSkills.map((skill, idx) => (
            <div key={skill.name} className="attainments-circle-wrap">
              <CircularProgress percent={skill.percent} />
              <div className="button-81">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="attainments-right ">
        <h2 className="attainments-title" style={{color:'#1976d2'}}>Developer Skills</h2>
        <div className="attainments-sub">Highlight My Expertise in:</div>
        <div className="attainments-bars">
          {developerSkills.map((skill, idx) => (
            <div key={skill.name} className="attainments-bar-wrap">
              <div className="attainments-bar-label">{skill.name}</div>
              <div className="attainments-bar-bg">
                <div
                  className="attainments-bar-fill"
                  style={{ width: `${skill.percent}%` }}
                />
                <span className="attainments-bar-percent">{skill.percent}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="attainments-left ">
        <h2 className="attainments-title" style={{color:'#1976d2'}}>Language Skills</h2>
        <div className="attainments-sub">Highlight My Expertise in:</div>
        <div className="attainments-circles ms-md-5 ">
          {languageSkills.map((skill, idx) => (
            <div key={skill.name} className="attainments-circle-wrap">
              <CircularProgress percent={skill.percent} />
              <div className="attainments-pill button-81">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
    </>
);