import React, { useEffect } from 'react'
import { Projects } from './Projects'

export const Project = ({title}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = title;
  }, []);

  return (
    <>
      <Projects />
    </>
  )
}
