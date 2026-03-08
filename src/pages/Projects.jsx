import React, { useContext, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { UserContext } from '../context/UserConext';
import { Icon } from '@iconify/react';

const FALLBACK_IMAGE = 'https://mdbootstrap.com/img/Photos/Others/images/16.jpg';

/* ── Project Card ───────────────────────────────────────── */
const ProjectCard = ({ project, onSelect, idx = 0 }) => {
  const tools = Array.isArray(project.tools) ? project.tools : [];

  return (
    <div
      className="col-12 col-sm-6 col-lg-4 mb-4"
      style={{ animation: `pReveal 0.5s ease ${idx * 0.1}s both` }}
    >
      <div className="prj-card" onClick={onSelect} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onSelect()}>
        {/* Status badge */}
        {project.status && (
          <span className="prj-status">{project.status}</span>
        )}

        {/* Image */}
        <div className="prj-card-img-wrap">
          <img src={project.image || FALLBACK_IMAGE} alt={project.title} className="prj-card-img" />
        </div>

        {/* Body */}
        <div className="prj-card-body">
          <div className="prj-card-tools">
            {tools.slice(0, 4).map((t, i) => (
              <span key={i} className="prj-tool-chip">{t}</span>
            ))}
          </div>

          <h3 className="prj-card-title">{project.title}</h3>
          <p className="prj-card-summary">{project.summary}</p>

          <div className="prj-card-footer">
            <div className="prj-card-meta">
              <Icon icon="mdi:calendar-blank-outline" width={16} />
              <span>{project.year}</span>
            </div>
            <span className="prj-card-arrow">
              <Icon icon="mdi:arrow-top-right" width={20} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Detail Modal ───────────────────────────────────────── */
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (project) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  if (!project) return null;

  const tools = Array.isArray(project.tools) ? project.tools : [];

  return createPortal(
    <div className="pm-backdrop" onClick={onClose}>
      <div className="pm-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="pm-close" aria-label="Close" onClick={onClose}>
          <Icon icon="mdi:close" width={24} />
        </button>

        <div className="pm-hero">
          <img src={project.image || FALLBACK_IMAGE} alt={project.title} className="pm-hero-img" />
          {project.status && <span className="pm-status-badge">{project.status}</span>}
        </div>

        <div className="pm-content">
          <div className="pm-tool-list">
            {tools.map((t, i) => (
              <span key={i} className="prj-tool-chip">{t}</span>
            ))}
          </div>

          <h2 className="pm-title">{project.title}</h2>
          <p className="pm-desc">{project.description}</p>

          <div className="pm-info-grid">
            <div className="pm-info-item">
              <Icon icon="mdi:calendar" width={20} className="pm-info-icon" />
              <div>
                <small className="pm-info-label">Timeline</small>
                <div className="pm-info-value">{project.year}</div>
              </div>
            </div>
            <div className="pm-info-item">
              <Icon icon="mdi:account" width={20} className="pm-info-icon" />
              <div>
                <small className="pm-info-label">Team</small>
                <div className="pm-info-value">Solo</div>
              </div>
            </div>
            <div className="pm-info-item">
              <Icon icon="mdi:layers-outline" width={20} className="pm-info-icon" />
              <div>
                <small className="pm-info-label">Stack</small>
                <div className="pm-info-value">{tools.join(', ')}</div>
              </div>
            </div>
          </div>

          {project.features?.length > 0 && (
            <div className="pm-features">
              <h6 className="pm-section-title">Key Features</h6>
              <ul className="pm-feature-list">
                {project.features.map((f, i) => (
                  <li key={i}>
                    <Icon icon="mdi:check-circle" width={18} className="pm-check" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pm-actions">
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="pm-btn pm-btn-primary">
                <Icon icon="mdi:open-in-new" width={18} /> Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="pm-btn pm-btn-outline">
                <Icon icon="mdi:github" width={18} /> Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

/* ── Stats Bar ──────────────────────────────────────────── */
const StatsBar = ({ count }) => {
  const stats = [
    { icon: 'mdi:folder-multiple', value: `${count}+`, label: 'Projects Built' },
    { icon: 'mdi:code-tags', value: '8+', label: 'Technologies Used' },
    { icon: 'mdi:lightning-bolt', value: '100%', label: 'Passion Driven' },
  ];

  return (
    <div className="prj-stats">
      {stats.map((s, i) => (
        <div key={i} className="prj-stat-item">
          <Icon icon={s.icon} width={28} className="prj-stat-icon" />
          <strong className="prj-stat-value">{s.value}</strong>
          <span className="prj-stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
};

/* ── Main Projects Component ────────────────────────────── */
export const Projects = () => {
  const { projects = [] } = useContext(UserContext) || {};
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <section className="prj-section">
      <div className="container">
        {/* Header */}
        <div className="prj-header">
        
          <h1 className="prj-heading">
            Explore My <span className="prj-heading-accent">Best Projects</span> & Work
          </h1>
          <p className="prj-subheading">
            A curated collection of projects showcasing my skills in full-stack development,
            creative problem-solving, and building real-world applications.
          </p>
        </div>

        {/* Stats */}
        <StatsBar count={projects.length} />

        {/* Grid */}
        {projects.length === 0 ? (
          <p className="text-center text-muted py-5">No projects to display.</p>
        ) : (
          <div className="row">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} idx={idx} onSelect={() => setSelected(project)} />
            ))}
          </div>
        )}
      </div>

      <ProjectModal project={selected} onClose={closeModal} />

      {/* ── Styles ──────────────────────── */}
      <style>{`
        .prj-section {
          padding: 60px 0 80px;
          min-height: 100vh;
        }

        /* Header */
        .prj-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 40px;
        }
        .prj-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #e8f5e9;
          color: #2e7d32;
          font-weight: 600;
          font-size: 0.85rem;
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 16px;
        }
        .prj-heading {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          color: #1a1a2e;
          line-height: 1.2;
          margin-bottom: 16px;
        }
        .prj-heading-accent {
          color: #1565c0;
        }
        .prj-subheading {
          color: #666;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        /* Stats */
        .prj-stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          margin-bottom: 50px;
          padding: 28px 24px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
        }
        .prj-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .prj-stat-icon { color: #1565c0; }
        .prj-stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a2e;
        }
        .prj-stat-label {
          font-size: 0.8rem;
          color: #888;
          font-weight: 500;
        }

        /* ── Card ─────────────────────── */
        .prj-card {
          position: relative;
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .prj-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }
        .prj-status {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 2;
          background: #e53935;
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .prj-card-img-wrap {
          height: 200px;
          overflow: hidden;
        }
        .prj-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s;
        }
        .prj-card:hover .prj-card-img {
          transform: scale(1.08);
        }
        .prj-card-body {
          padding: 20px;
        }
        .prj-card-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 12px;
        }
        .prj-tool-chip {
          background: #f0f4ff;
          color: #1565c0;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 6px;
          letter-spacing: 0.3px;
        }
        .prj-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 6px;
        }
        .prj-card-summary {
          font-size: 0.88rem;
          color: #777;
          line-height: 1.55;
          margin: 0 0 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .prj-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #f0f0f0;
          padding-top: 14px;
        }
        .prj-card-meta {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.82rem;
          color: #999;
        }
        .prj-card-arrow {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #1565c0;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.25s, transform 0.25s;
        }
        .prj-card:hover .prj-card-arrow {
          background: #0d47a1;
          transform: rotate(45deg);
        }

        /* ── Modal ────────────────────── */
        .pm-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1050;
          background: rgba(10, 10, 30, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: pmFade 0.25s ease-out;
        }
        .pm-dialog {
          position: relative;
          background: #fff;
          border-radius: 24px;
          width: 100%;
          max-width: 860px;
          max-height: 88vh;
          overflow-y: auto;
          box-shadow:
            0 0 0 1px rgba(0,0,0,0.04),
            0 8px 30px rgba(0,0,0,0.12),
            0 30px 80px rgba(0,0,0,0.18);
          animation: pmSlide 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          scrollbar-width: thin;
          scrollbar-color: #c4c4c4 transparent;
        }
        .pm-dialog::-webkit-scrollbar {
          width: 6px;
        }
        .pm-dialog::-webkit-scrollbar-track {
          background: transparent;
        }
        .pm-dialog::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 10px;
        }
        .pm-dialog::-webkit-scrollbar-thumb:hover {
          background: #aaa;
        }
        .pm-close {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 10;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 12px rgba(0,0,0,0.15);
          transition: background 0.2s, transform 0.25s;
          color: #333;
        }
        .pm-close:hover {
          background: #fff;
          transform: rotate(90deg) scale(1.05);
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        }

        .pm-hero {
          position: relative;
          width: 100%;
          height: 320px;
          overflow: hidden;
          border-radius: 24px 24px 0 0;
        }
        .pm-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
          pointer-events: none;
        }
        .pm-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .pm-dialog:hover .pm-hero-img {
          transform: scale(1.02);
        }
        .pm-status-badge {
          position: absolute;
          top: 16px;
          left: 20px;
          z-index: 2;
          background: linear-gradient(135deg, #e53935, #c62828);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 5px 14px;
          border-radius: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 2px 8px rgba(229,57,53,0.35);
        }

        .pm-content {
          padding: 28px 36px 36px;
          margin-top: -40px;
          position: relative;
          z-index: 1;
        }
        .pm-tool-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }
        .pm-tool-list .prj-tool-chip {
          background: linear-gradient(135deg, #e8eeff, #f0f4ff);
          color: #1565c0;
          font-size: 0.74rem;
          font-weight: 600;
          padding: 5px 14px;
          border-radius: 20px;
          border: 1px solid rgba(21,101,192,0.1);
        }
        .pm-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 10px;
          letter-spacing: -0.3px;
          line-height: 1.3;
        }
        .pm-desc {
          font-size: 1rem;
          color: #5a5a6e;
          line-height: 1.75;
          margin-bottom: 28px;
        }

        /* Info grid */
        .pm-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 28px;
        }
        .pm-info-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #f6f8fc;
          padding: 16px 18px;
          border-radius: 14px;
          border: 1px solid #eef0f5;
          transition: background 0.2s, border-color 0.2s;
        }
        .pm-info-item:hover {
          background: #eef3ff;
          border-color: #d4e0ff;
        }
        .pm-info-icon {
          color: #1565c0;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .pm-info-label {
          font-size: 0.7rem;
          color: #999;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.6px;
          margin-bottom: 2px;
        }
        .pm-info-value {
          font-size: 0.9rem;
          font-weight: 600;
          color: #2d2d3f;
        }

        /* Features */
        .pm-features {
          margin-bottom: 28px;
        }
        .pm-section-title {
          font-weight: 700;
          font-size: 1.05rem;
          color: #1a1a2e;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .pm-section-title::before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 18px;
          background: #1565c0;
          border-radius: 4px;
        }
        .pm-feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 10px;
        }
        .pm-feature-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: #444;
          padding: 10px 14px;
          background: #f6f8fc;
          border-radius: 12px;
          border: 1px solid #eef0f5;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .pm-feature-list li:hover {
          background: #eef3ff;
          border-color: #d4e0ff;
          transform: translateX(4px);
        }
        .pm-check { color: #2e7d32; flex-shrink: 0; }

        /* Actions */
        .pm-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          padding-top: 12px;
          border-top: 1px solid #f0f0f5;
          margin-top: 4px;
        }
        .pm-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: 14px;
          font-weight: 600;
          font-size: 0.92rem;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .pm-btn-primary {
          background: linear-gradient(135deg, #1565c0, #1976d2);
          color: #fff;
          box-shadow: 0 4px 14px rgba(21,101,192,0.25);
        }
        .pm-btn-primary:hover {
          background: linear-gradient(135deg, #0d47a1, #1565c0);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(21,101,192,0.4);
        }
        .pm-btn-outline {
          background: #fff;
          color: #333;
          border: 2px solid #e0e0e0;
        }
        .pm-btn-outline:hover {
          border-color: #1565c0;
          color: #1565c0;
          background: #f0f4ff;
          transform: translateY(-2px);
        }

        /* Animations */
        @keyframes pReveal {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pmFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pmSlide {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .prj-stats { gap: 24px; flex-wrap: wrap; }
          .pm-backdrop { padding: 12px; }
          .pm-dialog { border-radius: 20px; max-height: 92vh; }
          .pm-hero { height: 220px; border-radius: 20px 20px 0 0; }
          .pm-content { padding: 20px 22px 28px; margin-top: -30px; }
          .pm-title { font-size: 1.35rem; }
          .pm-info-grid { grid-template-columns: 1fr; }
          .pm-actions { justify-content: stretch; }
          .pm-btn { flex: 1; justify-content: center; }
        }
        @media (max-width: 480px) {
          .prj-card-img-wrap { height: 160px; }
          .prj-stats { gap: 16px; padding: 20px 16px; }
          .prj-stat-value { font-size: 1.2rem; }
          .pm-hero { height: 180px; }
          .pm-content { padding: 16px 16px 24px; }
          .pm-feature-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};