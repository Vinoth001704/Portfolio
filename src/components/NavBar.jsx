import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserConext';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const NavBar = () => {
  const user = useContext(UserContext) || {};
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // 120px offset for sticky navbar

      navItems.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Close mobile dropdown if open
      const navCollapse = document.getElementById('portfolioNav');
      if (navCollapse && navCollapse.classList.contains('show')) {
        navCollapse.classList.remove('show');
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3">
      <div className="container">
        {/* Brand / Logo */}
        <a
          className="navbar-brand fw-bold fs-4 text-primary"
          href="/"
          onClick={(e) => scrollToSection(e, 'home')}
        >
          {user.name || 'VinothKumar S'}
        </a>

        {/* Mobile Hamburger Toggle */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNav"
          aria-controls="portfolioNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items with Dynamic Active Highlight */}
        <div className="collapse navbar-collapse" id="portfolioNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-2">
            {navItems.map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <li className="nav-item" key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => scrollToSection(e, id)}
                    className={`nav-link px-3 transition-all ${
                      isActive
                        ? 'text-primary fw-bold active-nav-link'
                        : 'text-dark fw-medium'
                    }`}
                    style={{
                      borderBottom: isActive ? '2px solid #0d5cff' : '2px solid transparent',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="d-flex ms-lg-3 mt-3 mt-lg-0">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="btn btn-outline-primary rounded-pill px-4"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};