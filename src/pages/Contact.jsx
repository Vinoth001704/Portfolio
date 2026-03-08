import React, { useEffect } from 'react'
import ContactPage from '../components/ContactPage'

export const Contact = ({title}) => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.title = title;
    }, []);
  return (
   <>
   <ContactPage/>
   </>
  )
}
