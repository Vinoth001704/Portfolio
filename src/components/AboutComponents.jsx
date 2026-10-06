import React, { useContext } from "react";
import { UserContext } from "../context/UserConext";
import aboutImage from "../assets/images/aboutImage.jpg";
import resume from '../assets/files/VinothKumar.pdf';
export default function AboutComponents() {
  const user = useContext(UserContext) || {};

  return (
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
          <div className="d-flex gap-3 flex-wrap">
              <a href="/contact" className="button-81">Hire Me!</a>
              <a
                href={resume}
                download={`${user.name?.replace(/\s+/g, "_") || "Resume"}_Resume.pdf`}
                className="button-82"
              >
                Download CV <Icon icon="material-symbols:download-rounded" width="24" height="24" />
              </a>
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
  );
}