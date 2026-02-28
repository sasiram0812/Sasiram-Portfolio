import React from "react";
import { Row, Col } from "react-bootstrap";

function Leetcode() {
  return (
    <Row className="justify-content-center">
      <Col lg={8} md={10} sm={12} className="text-center">

        <h1 className="project-heading mb-4">
          LeetCode <strong className="purple">Stats</strong>
        </h1>

        {/* <img
          src="https://leetcard.jacoblin.cool/sasiram?theme=dark&ext=heatmap"
          alt="LeetCode Stats"
          className="leetcode-card"
        /> */}
        <img
        src="https://leetcard.jacoblin.cool/sasiram"
        alt="LeetCode Stats"
        className="img-fluid"
      />
      <div className="cp-cardd mt-5">
      <a 
        href="https://leetcode.com/u/sasiram/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Leetcode Profile
      </a>
      </div>

              {/* CodeChef Section */}
              <h1 className="project-heading mb-4">
          CodeChef <strong className="purple">Stats</strong>
        </h1>
        <div className="cp-card mt-5">
          <h4>CodeChef</h4>
          {/* <p>⭐ 2 Star Coder</p>
          <p>🔥 Rating: 1450</p> */}
          <a 
            href="https://www.codechef.com/users/sasiram08"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CodeChef Profile
          </a>
        </div>

      

      </Col>
    </Row>
  );
}

export default Leetcode;