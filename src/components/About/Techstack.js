import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiAnsible,
  SiTerraform,
  SiAmazonaws,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* DevOps & Cloud */}
      <Col xs={4} md={2} className="tech-icons"><SiAmazonaws /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiKubernetes /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJenkins /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAnsible /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTerraform /></Col>
      
      <Col xs={4} md={2} className="tech-icons"><SiPrometheus /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGrafana /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>

     
      
      

      
    </Row>
  );
}

export default Techstack;
