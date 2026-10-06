import React, { useContext } from 'react';
import { UserContext } from '../context/UserConext';
import { Icon } from '@iconify/react';
import { SectionHeader } from './SectionHeader';

// Distinct pastel color themes and Iconify icons matching the design
const iconConfig = {
  globe: {
    bg: '#80beff', // Vibrant soft blue
    icon: 'mdi:earth',
  },
  code: {
    bg: '#f8b4d9', // Soft pink
    icon: 'mdi:code-tags',
  },
  coffee: {
    bg: '#cbb2fe', // Soft purple
    icon: 'mdi:coffee',
  },
  database: {
    bg: '#a7ebd0', // Soft mint green
    icon: 'mdi:database-outline',
  },
  shield: {
    bg: '#fec89a', // Soft peach/orange
    icon: 'mdi:shield-check-outline',
  },
  terminal: {
    bg: '#a7ebd0', // Soft mint green
    icon: 'mdi:database-outline',
  },
  users: {
    bg: '#fde68a', // Soft pastel yellow
    icon: 'mdi:palette-outline',
  },
  ai: {
    bg: '#fed7aa', // Light peach
    icon: 'mdi:code-tags',
  },
  default: {
    bg: '#e2e8f0',
    icon: 'mdi:circle-outline',
  },
};

export const Attainments = () => {
  const { skills = [] } = useContext(UserContext) || {};

  return (
    <section id="skills" className="py-5" style={{ backgroundColor: '#fcfcfd' }}>
      <div className="container py-4">
        {/* Section Header with Accent Line */}
        <SectionHeader
          title="Skills"
          subtitle="Technologies, tools, and proficiencies I utilize in software development"
        />

        {/* 3-Column Clean Card Grid */}
        <div className="row g-4 justify-content-center">
          {skills.map((skillGroup, idx) => {
            const config = iconConfig[skillGroup.icon] || iconConfig.default;

            return (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div className="clean-skill-card h-100">
                  {/* Top Pastel Circle Icon Badge */}
                  <div
                    className="skill-badge-circle"
                    style={{ backgroundColor: config.bg }}
                  >
                    <Icon icon={config.icon} width={28} height={28} color="#ffffff" />
                  </div>

                  {/* Category Title */}
                  <h3 className="skill-card-title">{skillGroup.title}</h3>

                  {/* Centered Plain-Text Skill Items */}
                  <div className="skill-text-list">
                    {skillGroup.skills.map((item, itemIdx) => (
                      <span key={itemIdx} className="skill-text-item">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              
            );
          })}
        </div>
      </div>

      {/* Embedded CSS matching the reference styling */}
      <style>{`
        .clean-skill-card {
          background: #ffffff;
          border: 1px solid #eef0f3;
          border-radius: 16px;
          padding: 44px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .clean-skill-card:hover {
          transform: translateY(-4px);
        //   box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
        }

        .skill-badge-circle {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .skill-card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 24px;
          letter-spacing: -0.2px;
        }

        .skill-text-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 12px 20px;
          max-width: 290px;
        }

        .skill-text-item {
        font-size: 0.88rem;
        font-weight: 500;
        color: #1e293b;            /* Dark slate text */
        background-color: #f1f5f9;  /* Soft gray/blue pill background */
        padding: 6px 14px;
        border-radius: 20px;
        display: inline-block;
        transition: all 0.2s ease;
        border: 1px solid #e2e8f0;
        }

        .skill-text-item:hover {
        background-color: #0d5cff; /* Primary blue on hover */
        color: #ffffff;            /* White text */
        transform: translateY(-2px);
        border-color: #0d5cff;
        }

        @media (max-width: 768px) {
          .clean-skill-card {
            padding: 34px 24px;
          }
          .skill-text-list {
            gap: 10px 16px;
          }
        }
          
      `}</style>
    </section>
  );
};