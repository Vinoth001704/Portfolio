import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '@iconify/react';
import './ProjectDetailModal.css';

export const ProjectDetailModal = ({ project, onClose }) => {
  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  const tools = Array.isArray(project.tools) ? project.tools : [];
  const headerBg = project.color || (project.title?.toLowerCase().includes('fest') ? '#1976d2' : '#00796b');

  return createPortal(
    <div className="project-modal-backdrop" onClick={onClose}>
      <div 
        className="project-modal-dialog" 
        onClick={(e) => e.stopPropagation()}
        role="dialog" 
        aria-modal="true"
      >
        {/* Top Header Banner with Gradient */}
        <div 
          className="project-modal-banner"
          style={{
            background: `linear-gradient(180deg, ${headerBg} 0%, ${headerBg} 60%, rgba(255, 255, 255, 0.95) 100%)`
          }}
        >
          {/* Status Badge */}
          <span className="project-modal-status">
            {project.status || 'COMPLETED'}
          </span>

          {/* Close Circular Button */}
          <button 
            type="button" 
            className="project-modal-close" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <Icon icon="mdi:close" width={20} height={20} />
          </button>

          {/* Giant Centered Project Name */}
          <h1 className="project-modal-title">
            {project.shortTitle || project.title?.split(' - ')[0] || project.title}
          </h1>
        </div>

        {/* Modal Scrollable Body */}
        <div className="project-modal-body">
          {/* Tech Badges */}
          <div className="project-modal-tools">
            {tools.map((tool, idx) => (
              <span key={idx} className="project-modal-tool-badge">
                {tool}
              </span>
            ))}
          </div>

          {/* Project Title Subheading */}
          <h2 className="project-modal-subheading">
            {project.title}
          </h2>

          {/* Long Detailed Description */}
          <p className="project-modal-desc">
            {project.description || project.summary}
          </p>

          {/* 3 Information Cards (Timeline, Team, Stack) */}
          <div className="project-meta-grid">
            {/* Timeline */}
            <div className="meta-card">
              <div className="meta-card-icon">
                <Icon icon="mdi:calendar-outline" width={20} height={20} color="#0d5cff" />
              </div>
              <div className="meta-card-content">
                <span className="meta-card-label">TIMELINE</span>
                <span className="meta-card-value">{project.date || project.year || '2025'}</span>
              </div>
            </div>

            {/* Team */}
            <div className="meta-card">
              <div className="meta-card-icon">
                <Icon icon="mdi:account-outline" width={20} height={20} color="#0d5cff" />
              </div>
              <div className="meta-card-content">
                <span className="meta-card-label">TEAM</span>
                <span className="meta-card-value">{project.team || 'Solo'}</span>
              </div>
            </div>

            {/* Stack */}
            <div className="meta-card">
              <div className="meta-card-icon">
                <Icon icon="mdi:layers-outline" width={20} height={20} color="#0d5cff" />
              </div>
              <div className="meta-card-content">
                <span className="meta-card-label">STACK</span>
                <span className="meta-card-value text-truncate">
                  {tools.length > 0 ? tools.join(', ') : 'Full Stack'}
                </span>
              </div>
            </div>
          </div>

          {/* Optional Action Links */}
          {(project.url || project.github) && (
            <div className="project-modal-footer">
              {project.url && (
                <a href={project.url} target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill px-4">
                  Live Preview
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline-dark rounded-pill px-4">
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};