import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserConext";
import portfolioIllustration2 from '../images/portfolio-illustration2.jpg';
import { Icon } from "@iconify/react";
import resume from '../files/VinothKumar.pdf';
import './index.css';

export default function AboutComponents() {
  const user = useContext(UserContext);
  const [showFull, setShowFull] = useState(false);

  // Split summary for demo (adjust as needed)
  const summaryParts = user.summary.split(". ");
  const shortSummary = summaryParts.slice(0, 1).join(". ") + ".";
  const restSummary = summaryParts.slice(1).join(". ");

  return (
    <>
      {/* Main About Section */}
      <section
        style={{
          minHeight: "100vh",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div className="container">
          <div className="row align-items-center flex-wrap-reverse">
            {/* Left: Illustration */}
            <div className="col-lg-5 d-flex justify-content-center mb-5 mb-lg-0">
              <img
                src={portfolioIllustration2}
                alt="About Illustration"
                style={{
                  maxWidth: "340px",
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
            {/* Right: Text Content */}
            <div className="col-lg-7">
              <h1 style={{ fontWeight: 400, fontSize: "3rem", marginBottom: 0 }}>
                Hello!
              </h1>
              <h2 style={{ fontWeight: 400, fontSize: "2.5rem", margin: 0 }}>
                I'm{" "}
                <span style={{ color: "#1763ff", fontWeight: 700 }}>
                  {user.name}
                </span>
              </h2>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "1.6rem",
                  margin: "2rem 0 1rem 0",
                  color: "#111",
                }}
              >
                {user.role &&
                  user.role.map((role, idx) => (
                    <span key={idx}>
                      {role}
                      {idx !== user.role.length - 1 && (
                        <span style={{ color: "#888" }}> | </span>
                      )}
                    </span>
                  ))}
              </div>
              <div className="text-secondary"
                style={{
                  fontSize: "1.2rem",
                  color: "#222",
                  fontWeight: 400,
                  marginBottom: 20,
                }}
              >
                {user.summary}
              </div>
              <div className="d-flex gap-3 mt-3">
                <a
                  className="button-81"
                  role="button"
                  href="#contact"
                  onClick={e => {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Hire Me !
                </a>
               <a
                  href={resume}
                  download
                  className="button-82"
                  role="button"
                  style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}
                >
                  Download CV <Icon icon="material-symbols:download-rounded" width="26" height="26" />
                </a>
                {/* <a href="/portfolio" className="btn btn-outline-primary btn-lg rounded-pill">
                  <Icon icon="ic:baseline-phone" width="26" height="26" /> Contact Me
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#fff",
          fontFamily: "Poppins, sans-serif",
          padding: "60px 0 40px 0",
        }}
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-5">
              <h2 style={{ color: "#1763ff", fontWeight: 700, fontSize: "2.5rem" }}>
                A little about me
              </h2>
            </div>
            <div className="col-md-7 d-flex align-items-center">
             <div style={{ fontSize: "1.25rem", color: "#222", fontWeight: 400 }}>
            I craft robust and user-friendly web applications that solve real-world problems. My passion lies in building clean, efficient, and scalable solutions using modern technologies. From responsive frontends to reliable backends, I enjoy turning ideas into interactive digital experiences.
          </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-5">
              <h2 style={{ color: "#1763ff", fontWeight: 700, fontSize: "2.2rem", marginBottom: 0 }}>
                What I do
              </h2>
              <div style={{ color: "#1763ff", fontWeight: 400, fontSize: "2rem" }}>
                (and love doing)
              </div>
            </div>
          <div className="col-md-7">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-4" style={{ fontWeight: 600, fontSize: "1.25rem" }}>
              <ul style={{ paddingLeft: 0, listStyle: "none", marginBottom: 0 }}>
                <li style={{ marginBottom: 6 }}>Frontend Development</li>
                <li style={{ marginBottom: 6 }}>React.js</li>
                <li style={{ marginBottom: 6 }}>HTML &amp; CSS</li>
                <li style={{ marginBottom: 6 }}>JavaScript</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="col-6 col-md-6 col-lg-4" style={{ fontWeight: 600, fontSize: "1.25rem" }}>
              <ul style={{ paddingLeft: 0, listStyle: "none", marginBottom: 0 }}>
                <li style={{ marginBottom: 6 }}>Backend Development</li>
                <li style={{ marginBottom: 6 }}>Java &amp; Node.js, Express</li>
                <li style={{ marginBottom: 6 }}>MongoDB / SQL</li>
                <li style={{ marginBottom: 6 }}>REST APIs</li>
                <li>Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>
    </>
  );
}