import React, { useEffect } from 'react'
import { Footer, NavBar } from '../components'
import AboutComponents from '../components/AboutComponents'

export const About = ({title}) => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.title = title;
    }, []);
  return (
   <>
   <AboutComponents/>
   </>
  )
}
