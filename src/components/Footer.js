import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Vedant Gaidhane </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} VG</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Vedantgaidhane"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/VedantGaidhane?t=1pTPD2TV7g7Dsjb5xJq_rg&s=09"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
               <SiX />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/er-vedant-gaidhane-4a4051208"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/vedant_gaidhane?igsh=MXI5cWwxcW9qenlsMg=="
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
