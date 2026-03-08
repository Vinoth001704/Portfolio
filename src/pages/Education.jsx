// import React from 'react'
// import  { EducationComponents } from '../components/EducationComponents'
// import { EducationComponents } from '../components/EducationComponents'
import { useEffect } from 'react';
import EducationPage from '../components/EducationPage'

export const Education = ({title}) => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.title = title;
    }, []);
  return (
    <>
  <EducationPage/> 
    </>
  )
}
