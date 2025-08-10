import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the key DevOps and AWS projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* AWS Resource Tracker */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="AWS Resource Tracker"
              description="A robust shell script leveraging AWS CLI and jq to fetch and display EC2, S3, IAM, and RDS details in a readable format. Enables automated monitoring for real-time AWS insights, helping teams maintain visibility and control over their cloud resources."
              ghLink="https://github.com/Vedantgaidhane/AWS-Resource-Explorer"
            />
          </Col>

          {/* AWS Node Health Tracker */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="AWS Node Health Tracker"
              description="A Bash script to monitor AWS node health including CPU, memory, and disk space. Utilizes standard Unix tools for analysis and Git for version control. This tool ensures proactive detection of resource bottlenecks and supports operational reliability."
              ghLink="https://github.com/Vedantgaidhane/AWS-Node-Health-Tracker"
            />
          </Col>

          {/* Cost Optimization Lambda */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="AWS Cost Optimization using Lambda"
              description="Implemented AWS Lambda functions to automatically remove unattached EC2 snapshots, reducing unnecessary storage costs. Optimized memory, timeouts, and triggers for efficient execution, resulting in significant AWS cost savings and improved serverless performance."
            />
          </Col>

          {/* Dockerized Spring Boot */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Dockerized Spring Boot Java Web Service"
              description="Containerized a Spring Boot Java web service using Maven and Docker. Created a production-ready Dockerfile, built the image, and deployed the container on port 8080 (exposed via port 80). This approach streamlines deployment and enhances scalability."
              ghLink="https://www.linkedin.com/posts/er-vedant-gaidhane-4a4051208_docker-springboot-java-activity-7187676432783884288-_pEG"
            />
          </Col>

          {/* Wanderlust Deployment */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Wanderlust Three-Tier Deployment"
              description="Deployed a full-stack application (React, TypeScript, Node.js, MongoDB) with Docker on AWS EC2. Configured backend infrastructure using NVM and MongoDB for seamless performance. Followed AWS DevOps best practices for scalability and reliability."
              ghLink="https://github.com/Vedantgaidhane/wanderlust"
            />
          </Col>

          {/* EKS 2048 Game */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="2048 Game on EKS with ALB & Ingress"
              description="Created a secure VPC with public/private subnets on EKS, configured Application Load Balancer for routing, and used Ingress Controller for efficient traffic management to application pods. Demonstrates advanced Kubernetes networking and AWS integration."
              ghLink="https://github.com/Vedantgaidhane/Deploying-2048-Game-with-EKS-ALB-and-Ingress-Controller-in-a-VPC"
            />
          </Col>

          {/* CountryBank CI/CD */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="CountryBank CI/CD Pipeline"
              description="Implemented a robust Jenkins pipeline integrating Docker, SonarQube, Trivy, and Gradle for automated build, test, and deployment on AWS EC2. This pipeline ensures code quality, security, and rapid delivery for banking applications."
              ghLink="https://github.com/Vedantgaidhane/CountryBank"
            />
          </Col>

          {/* Secret Santa CI/CD */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Secret Santa CI/CD Pipeline"
              description="Developed a Jenkins-based CI/CD pipeline for the Secret Santa app, featuring Docker containerization, SonarQube integration, and AWS deployment. Automated testing and deployment streamline the release process and improve reliability."
            />
          </Col>

          {/* PetClinic GitLab CI/CD */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="PetClinic GitLab CI/CD"
              description="Built a CI/CD pipeline in GitLab using Docker, Maven, SonarQube, and AWS EC2 runners for automated deployment. This setup ensures continuous integration, code quality checks, and seamless deployments for Java applications."
            />
          </Col>

          {/* E-Commerce CI/CD */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="E-Commerce CI/CD Automation"
              description="Automated a Jenkins CI/CD pipeline integrating GitHub, Maven, SonarQube, Nexus, Docker, and Trivy for secure and fast deployments. Enhanced the software delivery process with security scanning and artifact management."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
