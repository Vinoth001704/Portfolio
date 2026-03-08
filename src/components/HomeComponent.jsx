import React, { useContext } from "react";
// import "./HomeComponent.css"; // Optional: for extra styles
import portfolioIllustration from '../images/portfolio-illustration1.jpg';
import { UserContext } from "../context/UserConext";
export default function HomeComponent() {
   const user = useContext(UserContext);
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff", position: "relative",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",  position: "relative",
        }}
      >
        {/* Left: Title and Name */}
        <div style={{ flex: "1 1 350px", minWidth: 320 }}>
          <div style={{ textAlign: "center" ,position: "absolute",
        top: "0",
        left: "10%",
        background: "transparent",
        padding: "24px 32px",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        textAlign: "left",}}>
            <h1
              style={{
                color: "#1763ff",
                fontWeight: 700,
                fontSize: "3rem",
                marginBottom: 0,
                letterSpacing: 1,
              }}
            >
              Portfolio
            </h1>
            <div
              style={{
                color: "#1763ff",
                fontWeight: 400,
                fontSize: "2.5rem",
                marginBottom: 0,
                marginTop: "-0.5rem",
              }}
            >
              2025
            </div>
            <div
              style={{
                color: "#222",
                fontWeight: 500,
                fontSize: "1.5rem",
                marginTop: "0.5rem",backdropFilter:" blur(10px)"
              }}
            >
              {user.name}
            </div>
          </div>
        </div>

        {/* Center: Illustration */}
        <div
          style={{
            flex: "2 1 500px",
            minWidth: 320,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={portfolioIllustration}
            alt="Portfolio Illustration"
            style={{
              maxWidth: "450px",
              width: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>

        {/* Right: Roles */}
        <div
          style={{
            flex: "1 1 250px",
            minWidth: 220,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            marginLeft: 30,
            marginTop: 50,
          }}
        >

          {user.role && user.role.map((role, index) => (
  <div
    key={index}
    style={{
      fontSize: "1.3rem",
      color: "#222",
      fontWeight: 400,
      marginBottom: index === user.role.length - 1 ? 0 : 10, // Remove margin from last item
      paddingRight: index !== user.role.length - 1 ? 12 : 0,
      display: "inline-block"
    }}
  >
    {role}
  </div>
))}
    
        </div>
      </div>
    </section>
  );
}