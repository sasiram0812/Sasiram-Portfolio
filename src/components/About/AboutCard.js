import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sasiram </span>
            from <span className="purple"> TamilNadu, India.</span>
            <br />
            I’m currently pursuing my B.Tech in Information Technology
            <br />
            at Sri Krishna College of Technology,Coimbatore
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aptitude is Everything"{" "}
          </p>
          <footer className="blockquote-footer">Sasiram</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
