import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  // Data for "What I Do"
  const whatIDo = [
    {
      title: "Cloud Cost Optimization",
      desc: [
        "Cut AWS bills by 35%+ through automation, audits, and proactive resource management.",
        "Implemented right-sizing, reserved instances, and automated scheduling to minimize unnecessary spend.",
        "Regularly review and optimize cloud usage for maximum efficiency.",
        "Delivered cost transparency and reporting for stakeholders.",
      ],
    },
    {
      title: "CI/CD Excellence",
      desc: [
        "Designed Jenkins pipelines reducing deployment times by 80%.",
        "Automated build, test, and deployment processes for faster, more reliable releases.",
        "Integrated code quality checks and notifications for seamless developer experience.",
        "Enabled rapid rollback and blue-green deployments.",
      ],
    },
    {
      title: "Infrastructure as Code",
      desc: [
        "Provisioned reusable, secure AWS setups with Terraform.",
        "Standardized infrastructure deployments for consistency and scalability.",
        "Enabled rapid environment provisioning and disaster recovery.",
        "Maintained version-controlled infrastructure for auditability.",
      ],
    },
    {
      title: "Containerization",
      desc: [
        "Migrated and modernized applications with Docker & Kubernetes.",
        "Improved scalability, portability, and deployment speed.",
        "Automated container orchestration and monitoring for robust production systems.",
        "Implemented secure image management and CI/CD integration.",
      ],
    },
    {
      title: "Application Security with AWS WAF + ALB",
      desc: [
        "Secured EC2-hosted applications by configuring AWS WAF with tailored rules.",
        "Integrated WAF with Application Load Balancer for advanced traffic filtering.",
        "Managed EC2 security groups, DNS, and networking for maximum protection.",
      ],
    },
    {
      title: "Serverless Website Hosting",
      desc: [
        "Delivered cost-efficient, scalable websites using S3, Lambda, and CloudFront.",
        "Enabled secure, globally distributed, and virtually free hosting.",
        "Automated deployments and optimized performance for static and dynamic content.",
      ],
    },
  ];

  const achievementsRef = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      achievementsRef.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.style.opacity = 1;
          el.style.transform = "scale(1) translateY(0)";
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <Particle />
      <Container style={{ maxWidth: 1200, padding: "2.5rem 1rem" }}>
        {/* Hero Section */}
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
                fontSize: "3.7rem",
                letterSpacing: "1.2px",
                marginBottom: "0.5rem",
              }}
            >
              Vedant Gaidhane
            </h1>
            <br />
            <br />
            <h2
              style={{
                color: "#8f8d8dff",
                fontSize: "1.6rem",
                fontWeight: 600,
                marginBottom: "1.2rem",
              }}
            >
              DevOps Engineer
            </h2>
            <p
              style={{
                fontSize: "1.15rem",
                color: "#bbb5b5ff",
                maxWidth: 1000,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Passionate about building automated, scalable, and cost-efficient cloud infrastructures that deliver results.
              
              <br />

              I thrive on transforming complex, resource-heavy environments into streamlined, high-performance systems.
            </p>
          </Col>
        </Row>

        {/* What I Do Section - Clean Card Grid, Responsive Width */}
        <Row className="justify-content-center" style={{ margin: "2.5rem 0" }}>
          <Col xs={12}>
            <h3
              style={{
                color: "#6c63ff",
                textAlign: "center",
                fontWeight: 700,
                marginBottom: "2rem",
                letterSpacing: "1px",
              }}
            >
              What I Do
            </h3>
          </Col>
          <Col xs={12}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2rem",
                justifyItems: "center",
              }}
            >
              {whatIDo.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#fff",
                    borderRadius: "1.5rem",
                    boxShadow: "0 6px 32px rgba(108,99,255,0.10)",
                    padding: "2.2rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    minHeight: 220,
                    maxWidth: 420,
                    width: "100%",
                    border: "1.5px solid #ecebff",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                    e.currentTarget.style.boxShadow = "0 12px 36px rgba(108,99,255,0.16)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "0 6px 32px rgba(108,99,255,0.10)";
                  }}
                >
                  <h5
                    style={{
                      color: "#6c63ff",
                      fontWeight: 700,
                      marginBottom: 14,
                      textAlign: "center",
                      width: "100%",
                      fontSize: "1.15rem",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {item.title}
                  </h5>
                  <ul
                    style={{
                      paddingLeft: 0,
                      listStyle: "none",
                      color: "#444",
                      fontSize: "1rem",
                      marginBottom: 0,
                      width: "100%",
                      lineHeight: 1.7,
                      textAlign: "left",
                    }}
                  >
                    {item.desc.map((line, i) => (
                      <li
                        key={i}
                        style={{
                          marginBottom: 8,
                          paddingLeft: 0,
                        }}
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Tech Stack Section */}
        <Row>
          <Col xs={12}>
            <h3
              style={{
                color: "#6c63ff",
                textAlign: "center",
                margin: "2rem 0 1rem 0",
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              Tech Stack
            </h3>
          </Col>
        </Row>
        <Techstack />

        {/* Tool Stack Section */}
        <Row>
          <Col xs={12}>
            <h3
              style={{
                color: "#6c63ff",
                textAlign: "center",
                margin: "2rem 0 1rem 0",
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              Tools I Use
            </h3>
          </Col>
        </Row>
        <Toolstack />

        {/* Contact Call-to-Action */}
        <Row
          className="justify-content-center"
          style={{ margin: "2.5rem 0", textAlign: "center" }}
        >
          <Col xs={12}>
            <h3 style={{ color: "#6c63ff", fontWeight: 700 }}>Let’s Connect</h3>
            <p style={{ color: "#444", fontSize: "1.08rem" }}>
              I’m always eager to exchange ideas on DevOps strategies, cloud
              efficiency, and automation workflows.
            </p>
            <div
              style={{
                margin: "1.5rem 0",
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                as="a"
                variant="primary"
                href="mailto:er.vedantgaidhane@gmail.com"
                style={{
                  fontWeight: 600,
                  borderRadius: "2rem",
                  padding: "0.8rem 1.5rem",
                  fontSize: "1rem",
                  letterSpacing: "0.5px",
                }}
              >
                📧 Email Me
              </Button>
              <Button
                as="a"
                variant="outline-primary"
                href="tel:+917294926849"
                style={{
                  fontWeight: 600,
                  borderRadius: "2rem",
                  padding: "0.8rem 1.5rem",
                  fontSize: "1rem",
                  letterSpacing: "0.5px",
                  borderWidth: 2,
                }}
              >
                📞 Call Me
              </Button>
            </div>
            <blockquote
              style={{
                fontStyle: "italic",
                color: "#6c757d",
                maxWidth: 500,
                margin: "2rem auto 0 auto",
                fontSize: "1.08rem",
              }}
            >
              “Good automation doesn’t replace great engineers — it amplifies
              them.”
            </blockquote>
          </Col>
        </Row>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
