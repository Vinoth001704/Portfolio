import React, { useContext, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { UserContext } from '../context/UserConext';
import { Icon } from '@iconify/react';
import { SectionHeader } from './SectionHeader';

const FALLBACK_IMAGE = 'https://placehold.co/600x400/1763ff/ffffff?text=Project';

/* Project Card */
const ProjectCard = ({ project, onSelect }) => {
  const tools = Array.isArray(project.tools) ? project.tools : [];

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div 
        className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden" 
        onClick={onSelect} 
        role="button" 
        tabIndex={0} 
        onKeyDown={(e) => e.key === 'Enter' && onSelect()}
        style={{ cursor: 'pointer', transition: 'transform 0.25s ease' }}
      >
        <div style={{ height: '200px', overflow: 'hidden' }}>
          <img 
            src={project.image || FALLBACK_IMAGE} 
            alt={project.title} 
            className="w-100 h-100 object-fit-cover" 
          />
        </div>
        <div className="card-body p-4 d-flex flex-column">
          <div className="d-flex flex-wrap gap-1 mb-2">
            {tools.slice(0, 3).map((tool, idx) => (
              <span key={idx} className="badge bg-primary-subtle text-primary small">
                {tool}
              </span>
            ))}
          </div>
          <h5 className="card-title fw-bold text-dark mt-2">{project.title}</h5>
          <p className="card-text text-muted small flex-grow-1">{project.summary}</p>
          <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-2">
            <span className="text-secondary small">{project.year}</span>
            <span className="btn btn-sm btn-primary rounded-circle">
              <Icon icon="mdi:arrow-top-right" width={18} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Modal */
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (project) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  if (!project) return null;
  const tools = Array.isArray(project.tools) ? project.tools : [];

  return createPortal(
    <div 
      className="modal show d-block" 
      tabIndex="-1" 
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} 
      onClick={onClose}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content rounded-4 border-0 shadow">
          <div className="modal-header border-0 pb-0">
            <h5 className="modal-title fw-bold">{project.title}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body p-4">
            <img 
              src={project.image || FALLBACK_IMAGE} 
              alt={project.title} 
              className="w-100 rounded-3 mb-3 object-fit-cover" 
              style={{ maxHeight: '280px' }} 
            />
            <p className="text-muted">{project.description}</p>
            <div className="mb-3">
              <h6 className="fw-bold">Technologies:</h6>
              <div className="d-flex flex-wrap gap-2">
                {tools.map((tool, idx) => (
                  <span key={idx} className="badge bg-light text-dark border">{tool}</span>
                ))}
              </div>
            </div>
            {project.features && (
              <div className="mb-3">
                <h6 className="fw-bold">Features:</h6>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-secondary small">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="modal-footer border-0">
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill px-4">
                Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark rounded-pill px-4">
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

/* Projects Main Section */
export const Projects = () => {
  const { projects = [] } = useContext(UserContext) || {};
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'Java / Spring') return project.tools?.includes('Java') || project.tools?.includes('Spring Boot');
    if (filter === 'React / MERN') return project.tools?.includes('React.js') || project.tools?.includes('MongoDB');
    return true;
  });

  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <SectionHeader title="My Work" subtitle="Projects & Case Studies" />

        {/* Filter Tabs */}
        <div className="d-flex justify-content-center gap-2 mt-4 flex-wrap">
          {['All', 'Java / Spring', 'React / MERN'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`btn rounded-pill px-4 ${filter === tab ? 'btn-primary' : 'btn-outline-secondary'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="row">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} onSelect={() => setSelected(project)} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};