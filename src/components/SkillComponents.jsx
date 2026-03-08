import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../context/UserConext';
import './SkillComponents.css';

function CircularProgress({
  percent = 75,
  size = 200,
  radius = 42,
  trackWidth = 5,
  progressWidth = 10,
  trackColor = '#e6e6e6',
  progressColor = '#EC407A',
  textColor = '#000',
  fontSize = '1.6rem',
  unit = '%',
  animate = true,
  animationDuration = 1000, // ms
  round = true,
  className = '',
}) {
  const [value, setValue] = useState(animate ? 0 : percent);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!animate) {
      setValue(percent);
      return;
    }
    const start = performance.now();
    const duration = Math.max(100, animationDuration);

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(t);
      const next = Math.round(eased * percent);
      setValue(next);
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [percent, animate, animationDuration]);

  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - value / 100);
  const cx = 50;
  const cy = 50;

  return (
    <svg
      role="progressbar"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      aria-labelledby="circular-progress-bar"
      className={className}
    >
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke={trackColor}
        strokeWidth={trackWidth}
        strokeLinecap={round ? 'round' : 'butt'}
        style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
      />
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke={progressColor}
        strokeWidth={progressWidth}
        strokeLinecap={round ? 'round' : 'butt'}
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        style={{
          transform: 'rotate(-90deg)',
          transformOrigin: '50% 50%',
          transition: 'stroke-dashoffset 120ms linear', // keeps smooth between RAF frames
        }}
      />
      <text
        x="50%"
        y="50%"
        fontSize={fontSize}
        fontWeight={400}
        fill={textColor}
        textAnchor="middle"
        dy=".35em"
      >
        <tspan className="circular-percent-0">{value}</tspan>
        <tspan className="circular-unit-0">{unit}</tspan>
      </text>
    </svg>
  );
}

// Add this small helper component below CircularProgress (in same file)
function SkillCard({ skill, index = 0 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // stagger: each card appears and starts animation after index * 250ms
    const delay = Math.max(0, index * 250);
    const id = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(id);
  }, [index]);

  return (
    <div className={`skill-card ${visible ? 'visible' : ''}`}>
      <CircularProgress
        percent={skill.percent}
        size={140}
        radius={38}
        trackWidth={6}
        progressWidth={8}
        trackColor="#e6e6e6"
        progressColor={skill.color || '#EC407A'}
        textColor="#777"
        fontSize="1.1rem"
        unit="%"
        animate={visible}                // start progress animation when visible
        animationDuration={900}
        className="my-progress"
      />
      <div className="skill-name">{skill.name}</div>
    </div>
  );
}

// Replace the mapping in SkillComponents to use SkillCard
export const SkillComponents = () => {
  const user = useContext(UserContext) || {};
  const skills = (user.skills && user.skills.length) ? user.skills : [
    { name: 'JavaScript', percent: 90, color: '#1763ff', svg: null },
    { name: 'React', percent: 85, color: '#1763ff', svg: null },
    { name: 'Node.js', percent: 80, color: '#1763ff', svg: null },
    { name: 'HTML', percent: 95, color: '#1763ff', svg: null },
  ];

  return (
    <section className="skills-section">
      <h3 className="text-muted mb-4">Attainments</h3>
      <h1 className="text-primary fw-bold text-start mb-1 display-3">My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name || index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default CircularProgress;
