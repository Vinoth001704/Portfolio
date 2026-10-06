import React, { useEffect } from 'react';
import { Attainments } from '../components/Attainments';
import { StatementBanner } from '../components/StatementBanner';

export const Skill = ({ title }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (title) document.title = title;
  }, [title]);

  return ( <>
  <Attainments />
  <StatementBanner content="I bridge the gap between design and code, turning user-centered concepts into intuitive, responsive, and high-performing web applications. My goal is to build seamless digital experiences where thoughtful visual design meets clean, functional engineering." />
  </> 
);
};