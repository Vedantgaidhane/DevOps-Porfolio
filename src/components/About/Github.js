import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {/* <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">DevOps & AWS</strong> Contributions
      </h1> */}
      {/* <GitHubCalendar
        username="Vedantgaidhane"  // ⛔ Replace this with your GitHub username
        blockSize={15}
        blockMargin={5}
        color="#FF9900"            // AWS Orange (can be changed to #232f3e for AWS dark blue)
        fontSize={16}
      /> */}
    </Row>
  );
}

export default Github;
