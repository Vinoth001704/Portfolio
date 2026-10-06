import React, { useContext, useEffect, useState, useRef, useCallback } from "react";
import { UserContext } from "../context/UserConext";
import { Icon } from "@iconify/react";
import homeImage from "../assets/images/homeImage.jpg";
import aboutImage from "../assets/images/aboutImage.jpg";
// import thankyouImage from "../assets/images/thankyou.jpg";
import { SectionHeader } from "../components/SectionHeader";
import { StatementBanner } from "../components/StatementBanner";
import { ThankYou } from "./ThankYou";
import { MoreProjectsCard } from "../components/MoreProjectsCard";
import { Projects } from "../components/Projects";
import { CredentialsSection, Resume} from "../components/CredentialsSection";
import { ContactSection } from "../components/ContactSection";
import { Experience } from "../components/Experience";
import { Education } from "../components/EducationPage";

const FALLBACK_IMG = "https://placehold.co/600x400/1763ff/ffffff?text=Project";

/* ── Custom Intersection Observer for Scroll Animations ── */
function useScrollReveal() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const elementsRef = useRef({});

  const register = useCallback((id) => (el) => {
    if (el) elementsRef.current[id] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.12 }
    );

    Object.values(elementsRef.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return { isVisible: (id) => visibleSections.has(id), register };
}
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



export const Home = ({ title }) => {
  const user = useContext(UserContext) || {};
  const { isVisible, register } = useScrollReveal();
  const [filter, setFilter] = useState("All");
  const [contactStatus, setContactStatus] = useState("");
 const { skills = [] } = useContext(UserContext) || {};
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);

  const projects = user.projects || [];
  const filteredProjects = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Java / Spring") return p.tools?.includes("Java") || p.tools?.includes("Spring Boot");
    if (filter === "React / MERN") return p.tools?.includes("React.js") || p.tools?.includes("MongoDB");
    return true;
  });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus("Sending...");
    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // Free key from web3forms.com

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setContactStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setContactStatus("Could not send message. Please try again.");
      }
    } catch {
      setContactStatus("Network error. Please try again later.");
    }
  };

  return (
    <div className="portfolio-onepage-wrapper">
      {/* ──────────────── 1. HERO SECTION ──────────────── */}
      <section
        id="home"
        ref={register("home")}
        className={`snap-section d-flex align-items-center justify-content-center ${
          isVisible("home") ? "fade-in-visible" : "fade-in-hidden"
        }`}
        style={{ minHeight: "100vh", position: "relative", backgroundColor: "#ffffff" }}
      >
        <div className="container position-relative d-flex align-items-center justify-content-center hero-container">
          {/* Left Text */}
          <div className="hero-left-block text-start">
            <h1 className="hero-title">Portfolio</h1>
            <div className="hero-year">2026</div>
            <div className="hero-name">{user.name || "VinothKumar S"}</div>
          </div>

          {/* Center Illustration */}
          <div className="hero-center-block text-center">
            <img src={homeImage} alt="Hero Illustration" className="hero-img" />
          </div>

          {/* Right Roles */}
          <div className="hero-right-block text-start">
            {user.role &&
              user.role.map((r, i) => (
                <div key={i} className="hero-role-item">
                  {r}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ──────────────── 2. ABOUT SECTION ──────────────── */}
      <section
            id="about"
            className="d-flex align-items-center justify-content-center"
            style={{
              minHeight: "100vh",
              backgroundColor: "#ffffff",
              padding: "60px 20px",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div
              className="container position-relative d-flex align-items-center justify-content-center about-main-container"
              style={{ minHeight: "650px" }}
            >
              {/* Left: Walking Character Cutout */}
             {/* Left: Walking Character Cutout */}
      <div
        className="about-character-block text-center text-lg-start"
        style={{
          position: "absolute",
          left: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1
        }}
      >
        <img
          src={aboutImage}
          alt="VinothKumar Walking Illustration"
          style={{
            height: "75vh",            /* Scales dynamically with screen height */
            maxHeight: "720px",        /* Significantly increased from previous limit */
            minHeight: "520px",        /* Prevents it from appearing too short on small desktops */
            width: "auto",
            objectFit: "contain",
            display: "block",
            filter: "drop-shadow(0 20px 30px rgba(0, 0, 0, 0.08))"
          }}
        />
      </div>
      
              {/* Right: Text Layout matching reference */}
              <div
                className="about-text-block text-start"
                style={{
                  position: "absolute",
                  left: "42%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  maxWidth: "600px",
                  width: "100%",
                  zIndex: 2
                }}
              >
                {/* Greeting */}
                <h2
                  style={{
                    fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                    fontWeight: 400,
                    color: "#111111",
                    margin: 0,
                    lineHeight: 1.15
                  }}
                >
                  Hello!
                </h2>
      
                {/* Name Header */}
                <h1
                  style={{
                    fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                    fontWeight: 400,
                    color: "#111111",
                    marginTop: "2px",
                    marginBottom: "36px",
                    lineHeight: 1.15
                  }}
                >
                  I'm{" "}
                  <span
                    style={{
                      color: "#0052ff",
                      fontWeight: 800,
                      letterSpacing: "-0.5px"
                    }}
                  >
                    {user.name || "VinothKumar S"}
                  </span>
                </h1>
      
                {/* Roles line with pipe dividers */}
                <div
                  style={{
                    fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)",
                    fontWeight: 700,
                    color: "#111111",
                    marginBottom: "24px",
                    letterSpacing: "-0.2px"
                  }}
                >
                  {user.role &&
                    user.role.map((role, idx) => (
                      <span key={idx}>
                        {role}
                        {idx !== user.role.length - 1 && (
                          <span style={{ margin: "0 14px", fontWeight: 300, color: "#222" }}>
                            |
                          </span>
                        )}
                      </span>
                    ))}
                </div>
      
                {/* Introduction Paragraphs */}
                <div
                  style={{
                    fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)",
                    color: "#1f1f1f",
                    lineHeight: 1.6,
                    fontWeight: 400
                  }}
                >
                  <p className="mb-2">
                    Welcome to my digital space of code, clean architectures, and modern web applications.
                  </p>
                  <p className="mb-2">
                    Let me walk you through my journey, one project at a time.
                  </p>
                  <p className="mb-0 text-muted fw-normal">
                    But first...
                  </p>
                </div>
              </div>
            </div>
      
            {/* Responsive adjustments for Tablets & Mobile */}
          <style>{`
        .about-main-container {
          min-height: 800px; /* Gives the taller image adequate breathing room */
        }
      
        @media (max-width: 991px) {
          .about-main-container {
            flex-direction: column !important;
            min-height: auto !important;
            gap: 30px !important;
            padding-top: 40px;
          }
          .about-character-block,
          .about-text-block {
            position: static !important;
            transform: none !important;
            max-width: 100% !important;
            text-align: center !important;
          }
          .about-character-block img {
            height: 55vh !important;
            max-height: 520px !important;
            min-height: 340px !important;
            margin: 0 auto;
          }
        }
      `}</style>
      </section>

      {/* ──────────────── 3. EDUCATION SECTION ──────────────── */}
         <Education/>   

      {/* ──────────────── 4. SKILLS SECTION ──────────────── */}
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

    <StatementBanner content="I bridge the gap between design and code, turning user-centered concepts into intuitive, responsive, and high-performing web applications. My goal is to build seamless digital experiences where thoughtful visual design meets clean, functional engineering. ♥️" />

      {/* ──────────────── 5. PROJECTS SECTION ──────────────── */}
      <section
        id="projects"
        ref={register("projects")}
        className={`snap-section py-5 ${
          isVisible("projects") ? "fade-in-visible" : "fade-in-hidden"
        }`}
        style={{ backgroundColor: "#f8f9fb", minHeight: "100vh" }}
      >
        <div className="container py-4">
          {/* <div className="text-center mb-5">
            <span className="text-primary fw-bold text-uppercase small">Portfolio</span>
            <h2 className="display-5 fw-bold text-dark">Featured Projects</h2>
          </div> */}
          <Projects/>
          <MoreProjectsCard />
        </div>
      </section>

      {/* ──────────────── 6. Experience SECTION ──────────────── */}
      <Experience/>

      {/* ──────────────── 7. Resume SECTION ──────────────── */}
      <Resume/>

      {/* ──────────────── 8. Credentials SECTION ──────────────── */}
      <CredentialsSection/>
      {/* ──────────────── 9. CONTACT SECTION ──────────────── */}
      <ContactSection/>

      <section
        id="contact"
        ref={register("contact")}
        className={`snap-section py-5 bg-white ${
          isVisible("contact") ? "fade-in-visible" : "fade-in-hidden"
        }`}
        style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-12 col-lg-6">
              <div className="p-4 p-md-5 rounded-4 shadow-sm bg-light">
                <span className="text-uppercase text-primary fw-bold small">Get In Touch</span>
                <h2 className="display-6 fw-bold my-3">Start a Conversation</h2>
                <p className="text-muted mb-4">
                  Interested in discussing full-stack opportunities or projects? Reach out directly!
                </p>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle p-2 me-3 d-flex">
                    <Icon icon="mdi:email-outline" width={22} />
                  </div>
                  <div>
                    <div className="fw-semibold">Email</div>
                    <div className="text-muted">{user.contact?.email}</div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bg-primary text-white rounded-circle p-2 me-3 d-flex">
                    <Icon icon="mdi:phone-outline" width={22} />
                  </div>
                  <div>
                    <div className="fw-semibold">Phone</div>
                    <div className="text-muted">{user.contact?.phone}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="p-4 p-md-5 rounded-4 shadow-sm bg-light">
                <form onSubmit={handleContactSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Name</label>
                    <input type="text" name="name" required className="form-control form-control-lg rounded-3" placeholder="Your Name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input type="email" name="email" required className="form-control form-control-lg rounded-3" placeholder="name@example.com" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea name="message" required className="form-control form-control-lg rounded-3" rows="3" placeholder="Your message..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg rounded-pill w-100 fw-semibold">
                    Send Message
                  </button>
                  {contactStatus && <div className="mt-3 text-center text-primary fw-medium">{contactStatus}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 10. THANK YOU SECTION ──────────────── */}
        <ThankYou/>

      {/* ──────────────── STYLES & ANIMATIONS ──────────────── */}
      <style>{`
        /* Smooth Fade & Slide-up Scroll Animation */
        .fade-in-hidden {
          opacity: 0;
          transform: translateY(45px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Hover lift effects for cards */
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08) !important;
        }

        /* Hero exact positioning */
        .hero-container {
          min-height: 640px;
        }
        .hero-left-block {
          position: absolute;
          left: 5%;
          top: 40%;
          transform: translateY(-50%);
          z-index: 2;
        }
        .hero-title {
          color: #0d5cff;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.05;
          margin: 0;
        }
        .hero-year {
          color: #0d5cff;
          font-size: clamp(2.2rem, 4.5vw, 3.6rem);
          font-weight: 400;
          margin-bottom: 15px;
        }
        .hero-name {
          color: #1a1a1a;
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          font-weight: 500;
        }
        .hero-center-block {
          max-width: 580px;
          width: 100%;
          z-index: 1;
        }
        .hero-img {
          width: 100%;
          max-height: 560px;
          object-fit: contain;
          margin: 0 auto;
        }
        .hero-right-block {
          position: absolute;
          right: 6%;
          bottom: 22%;
          z-index: 2;
        }
        .hero-role-item {
          color: #222;
          font-size: clamp(1.1rem, 1.8vw, 1.45rem);
          line-height: 1.6;
        }

        /* Mobile Adjustments */
        @media (max-width: 991px) {
          .hero-left-block,
          .hero-right-block {
            position: static !important;
            transform: none !important;
            text-align: center !important;
          }
          .hero-container {
            flex-direction: column !important;
            gap: 25px !important;
            min-height: auto !important;
            padding: 40px 10px;
          }
          .hero-center-block { order: 2; }
          .hero-left-block { order: 1; }
          .hero-right-block { order: 3; }
        }
      `}</style>
    </div>
  );
};