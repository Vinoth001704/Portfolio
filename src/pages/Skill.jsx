import React, { useEffect } from 'react'
import { SkillComponents } from '../components/SkillComponents'
import { Attainments } from './Attainments'

export const Skill = ({title}) => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.title = title;
    }, []);
  return (
   <>
   <Attainments/>
   </> 
    )
}
