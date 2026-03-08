import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Example SVG import (adjust path and name as needed)
// import { ReactComponent as MyLogo } from '../assets/my-logo.svg';

export const NavBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShow(true); // Scrolling up
      } else {
        setShow(false); // Scrolling down
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`navbar-bottom-center ${show ? 'show' : 'hide'}`}
      style={{
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#fff',
        borderRadius: '30px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        padding: '10px 30px',
        zIndex: 1000,
        transition: 'opacity 0.4s, visibility 0.4s',
        opacity: show ? 1 : 0,
        visibility: show ? 'visible' : 'hidden',
      }}
    >
      <ul className="d-flex gap-4 mb-0" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li>
          <Link to="/" className={`nav-icon${isActive('/') ? ' active' : ''}`} title='Hii'>
         <Icon icon={`majesticons:home${isActive('/') ? '' : '-line'}`} width="26" height="26"/>
          </Link>
        </li>
        <li>
          <Link to="/about" className={`nav-icon${isActive('/about') ? ' active' : ''}`}>
          <Icon icon={`streamline-logos:about-me-logo${isActive('/about') ? '-block' : ''}`} width="26" height="26"  />
          </Link>
        </li>
        <li>
          <Link to="/education" className={`nav-icon${isActive('/education') ? ' active' : ''}`}>
            <Icon icon={`streamline:quality-education${isActive('/education') ? '-remix' : ''}`} width="26" height="26" />
          </Link>
        </li>  <li>
          <Link to="/skill" className={`nav-icon${isActive('/skill') ? ' active' : ''}`}>
          <Icon icon="simple-icons:coderabbit" width="26" height="26" />
          </Link>
        </li>
        <li>
          <Link to="/project" className={`nav-icon${isActive('/project') ? ' active' : ''}`}>
          <Icon icon={`material-symbols:deployed-code${isActive('/project') ? '-outline' : ''}`} width="26" height="26" />
          </Link>
        </li>
      
        <li>
          <Link to="/contact" className={`nav-icon${isActive('/contact') ? ' active' : ''}`}>
          <Icon icon="duo-icons:message-3" width="26" height="26" />
          </Link>
        </li>
      </ul>
      <style>{`
        .nav-icon {
          color: #333;
          font-size: 1.5rem;
          transition: color 0.5s, transform 0.2s;
          display: inline-block;
        }
        .nav-icon.active,
        .nav-icon:hover {
          color: #0d6efd;
          transform: scale(1.2);
        }
      `}</style>
    </nav>
  );
};
