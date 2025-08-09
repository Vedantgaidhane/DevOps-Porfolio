import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiUbuntu,
  SiDocker,
  SiJenkins,
  SiAmazonaws,
  SiGithub,
  SiGitlab,
  SiGnubash,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Operating System */}
      <Col xs={4} md={2} className="tech-icons"><SiUbuntu /></Col>

      {/* IDE / Editors / Platforms */}
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
      
     
      
      
      <Col xs={4} md={2} className="tech-icons"><SiGithub /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGitlab /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGnubash /></Col>
    </Row>
  );
}

export default Toolstack;
