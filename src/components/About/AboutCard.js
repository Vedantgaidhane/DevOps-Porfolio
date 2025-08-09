import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I’m <span className="purple">Vedant Gaidhane</span>, a passionate{" "}
            <span className="purple">DevOps Engineer</span> who loves building efficient, automated, and scalable cloud solutions.
            <br />
            <br />
            I specialize in turning cloud chaos into cost-effective, high-performance infrastructure — from scripting automated deployments to hunting down and eliminating unused cloud resources.
          </p>

          <p style={{ textAlign: "justify" }}>
            <strong>Here’s what I enjoy working on:</strong>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Cloud Cost Optimization – saved 35%+ on AWS bills through automation and resource audits
              </li>
              <li className="about-activity">
                <ImPointRight /> CI/CD Pipelines – built Jenkins workflows reducing deployment time by 80%
              </li>
              <li className="about-activity">
                <ImPointRight /> Infrastructure as Code – provisioning reusable AWS setups with Terraform
              </li>
              <li className="about-activity">
                <ImPointRight /> Containerization – modernized legacy apps using Docker & Kubernetes
              </li>
            </ul>
          </p>

          <p style={{ textAlign: "justify" }}>
            <strong>Some highlights:</strong>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Automated 4+ hour deployment tasks into 5-minute CI/CD jobs
              </li>
              <li className="about-activity">
                <ImPointRight /> Reduced downtime by 90% with integrated monitoring solutions
              </li>
              <li className="about-activity">
                <ImPointRight /> Known for my “Zombie Resource Hunting” approach – reclaimed lakhs in cloud spend
              </li>
            </ul>
          </p>

          <p style={{ textAlign: "justify" }}>
            <strong>Tools & Tech I work with:</strong><br />
            AWS (EC2, S3, Lambda, VPC) | Terraform | Jenkins | Docker | Kubernetes | Git | Linux | CloudWatch
          </p>

          <p style={{ textAlign: "justify" }}>
            I’m always up for a conversation about DevOps strategies, cloud efficiency, or automation workflows.
            Feel free to connect!
          </p>

          <p > 
            📧 <strong>Email:</strong> vedantkgaidhane@gmail.com<br />
            📞 <strong>Phone:</strong> +91 7264926849
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Good automation makes great engineers even better."
          </p>
          <footer className="blockquote-footer">Vedant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
