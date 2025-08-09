import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate <b className="purple">DevOps Engineer</b> who enjoys building automated, scalable, and cost-effective cloud infrastructures.
              <br />
              <br />
              I specialize in:
              <i>
                <b className="purple"> AWS Cloud, CI/CD Pipelines, Infrastructure as Code, </b>
                and <b className="purple">Cloud Cost Optimization</b>.
              </i>
              <br />
              <br />
              I’ve helped teams reduce deployment time by 80%, reclaim lakhs in cloud spend, and implement zero-downtime release pipelines.
              <br />
              <br />
              Tools I love working with include:{" "}
              <b className="purple">Terraform, Jenkins, Docker, Kubernetes, and Git</b>.
              <br />
              <br />
              Outside work, I enjoy <i><b className="purple">writing blogs, exploring DevOps trends</b></i>, and learning new cloud strategies.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Let’s <span className="purple">connect</span> and talk about DevOps, cloud automation, or your next big idea!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Vedantgaidhane"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* Optional: Add your Twitter if needed */}
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/yourTwitterHandle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/er-vedant-gaidhane-4a4051208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* Optional: Add Instagram or remove if not needed */}
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/yourInstagramHandle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
