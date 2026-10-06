import React, { useEffect } from 'react';
// import EducationPage from '../components/EducationPage';

export const Education = ({ title }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (title) document.title = title;
  }, [title]);

  return <Education />;

};