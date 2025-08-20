import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import { Helmet } from "react-helmet-async";

function About() {
  // Data for "What I Do"
  const whatIDo = [
    {
      title: "Cloud Cost Optimization",
      desc: [
        "Reduced AWS bills through strategic automation, audits, and proactive resource management.",
        "Implemented right-sizing, reserved instances, and automated scheduling to minimize unnecessary spend.",
        "Delivered cost transparency and usage reporting for stakeholders.",
      ],
    },
    {
      title: "CI/CD Excellence",
      desc: [
        "Designed and maintained Jenkins pipelines reducing deployment times by 80%.",
        "Automated build, test, and deployment processes for multiple applications.",
        "Integrated SonarQube for automated code quality checks.",
        "Enabled blue-green and rolling deployments for zero downtime.",
      ],
    },
    {
      title: "Infrastructure as Code",
      desc: [
        "Provisioned reusable AWS infrastructure with Terraform.",
        "Version-controlled infrastructure for auditability and rollback.",
        "Enabled rapid environment provisioning for dev, staging, and prod.",
        "Implemented parameterized modules for reusable deployments.",
      ],
    },
    {
      title: "Containerized Deployments",
      desc: [
        "Deployed multiple applications on the same server using Docker to ensure isolation and resource efficiency.",
        "Automated image builds and pushed to private registries.",
        "Implemented Kubernetes for orchestration in staging environments.",
        "Secured container images with vulnerability scanning (Trivy).",
      ],
    },
    {
      title: "Application Security with AWS WAF + ALB",
      desc: [
        "Configured AWS WAF with tailored rules to protect EC2-hosted applications.",
        "Integrated WAF with Application Load Balancer for advanced traffic filtering.",
        "Managed EC2 security groups, DNS, and networking for maximum protection.",
        "Hardened workloads with GuardDuty and SIEM-based threat monitoring.",
      ],
    },
    {
      title: "Serverless Website Hosting",
      desc: [
        "Hosted static websites using AWS S3 with CloudFront CDN for global reach.",
        "Integrated Lambda@Edge for serverless processing and caching.",
        "Optimized cost to achieve near-zero hosting expenses.",
      ],
    },
    {
      title: "Web Server Management",
      desc: [
        "Configured and optimized Nginx, Apache HTTPD, and Tomcat for production workloads.",
        "Set up reverse proxies, SSL/TLS certificates, and caching.",
        "Performed load testing and tuning for high performance.",
      ],
    },
    {
      title: "Monitoring & Observability",
      desc: [
        "Set up Prometheus for metric collection and Grafana for real-time visualization.",
        "Integrated CloudWatch for AWS service monitoring and alerting.",
        "Configured proactive alerts for downtime, latency, and resource spikes.",
      ],
    },
    {
      title: "Security & Compliance",
      desc: [
        "Implemented IAM best practices with least privilege access control.",
        "Configured GuardDuty for continuous threat detection.",
        "Integrated AWS Config for compliance and auditing.",
        "Performed periodic vulnerability scanning and patching.",
      ],
    },
    {
      title: "Backup & Disaster Recovery",
      desc: [
        "Implemented automated EBS snapshot policies for critical workloads.",
        "Set up cross-region S3 replication for disaster recovery.",
        "Tested recovery procedures to ensure RTO/RPO compliance.",
      ],
    },
    {
      title: "DNS & Networking",
      desc: [
        "Configured Route 53 for domain management and traffic routing.",
        "Designed secure VPC architectures with public and private subnets.",
        "Set up NAT Gateways, Internet Gateways, and proper routing tables.",
      ],
    },
    {
      title: "Logging & Audit Trails",
      desc: [
        "Centralized logs with CloudWatch Logs and S3 archival.",
        "Enabled AWS CloudTrail for API activity tracking and security audits.",
        "Integrated log analysis into SIEM tools for real-time insights.",
      ],
    },
    {
      title: "Automation & Scripting",
      desc: [
        "Developed Bash and Python scripts to automate routine operational tasks.",
        "Automated AWS service provisioning and cleanup scripts.",
        "Used cron jobs and Lambda functions for scheduled maintenance.",
      ],
    },
    {
      title: "Dev/Test Environment Management",
      desc: [
        "Automated creation of on-demand staging environments for developers.",
        "Implemented data masking for non-production environments.",
        "Used spot instances for temporary workloads to save costs.",
      ],
    },
    {
      title: "Performance Optimization",
      desc: [
        "Optimized database query performance for hosted applications.",
        "Tuned EC2 instance types and storage for workload needs.",
        "Implemented CDN caching rules for faster content delivery.",
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
    <>
      <Helmet>
        <title>About | Vedant Gaidhane</title>
        <meta name="description" content="Learn more about Vedant Gaidhane, AWS & DevOps Engineer, his skills, experience, and professional background." />
      </Helmet>
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
          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
