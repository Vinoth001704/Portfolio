import React, { useEffect } from 'react';
import { Projects } from '../components/Projects';

export const Project = ({ title }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (title) document.title = title;
  }, [title]);

  return <Projects />;
};