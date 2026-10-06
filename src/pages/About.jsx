import React, { useEffect } from 'react';
import AboutComponents from '../components/AboutComponents';

export const About = ({ title }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (title) document.title = title;
  }, [title]);

  return <AboutComponents />;
};