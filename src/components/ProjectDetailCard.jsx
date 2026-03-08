import React from 'react';
import './ProjectDetailCard.css';

export const ProjectDetailCard = ({
  image,
  title,
  description,
  author,
  date,
  url
}) => (
  <div className="project-detail-card">
    <div className="project-detail-img-wrap">
      {image && (
        image.endsWith('.svg') ? (
          <object
            type="image/svg+xml"
            data={image}
            className="project-detail-img"
            aria-label={title}
            tabIndex={-1}
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="project-detail-img"
          />
        )
      )}
    </div>
    <div className="project-detail-content">
      <h3 className="project-detail-title">{title}</h3>
      <p className="project-detail-desc">{description}</p>
      <div className="project-detail-meta">
        {author && (
          <span className="project-detail-author">
            <img
              src={author.avatar || '/images/default-avatar.jpg'}
              alt={author.name}
              className="project-detail-avatar"
            />
            {author.name}
          </span>
        )}
        {date && (
          <span className="project-detail-date">{date}</span>
        )}
      </div>
      {url && (
        <a
          href={url}
          className="project-detail-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      )}
    </div>
  </div>
);