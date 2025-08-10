import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";

function Instagram() {
  return (
    <Container
      fluid
      className="about-section"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #f6f7fb 0%, #ecebff 100%)",
        padding: 0,
      }}
    >
      <Container style={{ maxWidth: 1200, padding: "2.5rem 1rem" }}>
        <Row
          className="justify-content-center align-items-center"
          style={{
            minHeight: "30vh",
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          <Col md={10}>
            <h1
              style={{
                fontWeight: 800,
                color: "#04ae86ff",
                fontSize: "2.7rem",
                letterSpacing: "1px",
                marginBottom: "0.5rem",
                fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
              }}
            >
              {/* <FaInstagram
                style={{
                  color: "#E1306C",
                  marginBottom: "8px",
                  marginRight: "10px",
                }}
              /> */}
              Photography
            </h1>
            <br />

            <h2
              style={{
                color: "#444",
                fontSize: "1.4rem",
                fontWeight: 600,
                marginBottom: "1.2rem",
                fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
              }}
            >
              Capturing moments, one click at a time.
            </h2>
            <p
              style={{
                fontSize: "1.15rem",
                color: "#555",
                maxWidth: 700,
                margin: "0 auto",
                lineHeight: 1.7,
                fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
              }}
            >
              Photography is my creative outlet and hobby. Explore my favorite
              shots and visual stories on Instagram.
            </p>
            <a
              href="https://www.instagram.com/clickss_by_v/profilecard/?igsh=bmxmOXpxZTVrcjZr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#fffefeff",
                color: "#290310ff",
                borderRadius: "2rem",
                padding: "0.8rem 2rem",
                fontWeight: 600,
                fontSize: "1.1rem",
                textDecoration: "none",
                boxShadow: "0 2px 12px rgba(108,99,255,0.10)",
                border: "2px solid #ffffffff",
                transition: "background 0.2s, color 0.2s",
                marginTop: "2rem",
                marginBottom: "2.5rem",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#0c4731ff";
                e.currentTarget.style.color = "#170000ff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#ffffffff";
                e.currentTarget.style.color = "#290310ff";
              }}
            >
              Visit My Instagram Gallery
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} xs={12}>
            <div
              style={{
                width: "100%",
                minHeight: 400,
                borderRadius: "1.2rem",
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(108,99,255,0.10)",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Optionally embed Instagram feed or a placeholder image */}
              <img
                src={require("../Assets/Landscape.jpg")}
                alt="Photography Showcase"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  objectFit: "contain",
                  border: "none",
                  borderRadius: "2rem",
                  filter: "blur(0.5px) drop-shadow(0 0 18px #ecebff)",
                  background: "#fff",
                  boxShadow: "none",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Instagram;