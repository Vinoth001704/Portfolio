import React, { useEffect, useRef, useCallback, useState } from 'react';
import HomeComponent from '../components/HomeComponent';
import ContactPage from '../components/ContactPage';
import EducationPage from '../components/EducationPage';
import { About } from './About';
import { ThankYou } from './ThankYou';
import { Projects } from './Projects';
import { Attainments } from './Attainments';

const sections = [
  { id: 'home', Component: HomeComponent },
  { id: 'about', Component: About },
  { id: 'education', Component: EducationPage },
  { id: 'skills', Component: Attainments },
  { id: 'projects', Component: Projects },
  { id: 'contact', Component: ContactPage },
  { id: 'thankyou', Component: ThankYou },
];

function useScrollReveal(threshold = 0.15) {
  const [revealed, setRevealed] = useState(() => new Set());
  const refs = useRef([]);

  const setRef = useCallback((el, index) => {
    refs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const newIds = [];
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            newIds.push(entry.target.dataset.sectionId);
          }
        });
        if (newIds.length > 0) {
          setRevealed((prev) => {
            const next = new Set(prev);
            newIds.forEach((id) => next.add(id));
            return next.size !== prev.size ? next : prev;
          });
        }
      },
      { threshold }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [threshold]);

  return { revealed, setRef };
}

export const Home = ({ title }) => {
  const { revealed, setRef } = useScrollReveal();

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      {sections.map(({ id, Component }, index) => (
        <div
          key={id}
          ref={(el) => setRef(el, index)}
          data-section-id={id}
          className={`section${revealed.has(id) ? ' visible' : ''}`}
        >
          <Component />
        </div>
      ))}
    </>
  );
};
