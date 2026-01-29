import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/p.png";
import bitsOfCode from "../../Assets/Projects/c.png";
import bits from "../../Assets/Projects/a.png";
import bitss from "../../Assets/Projects/b.png";
import bb from "../../Assets/Projects/aa.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ChatApp"
              description="ChatApp is a personal chat room built with React.js, Material-UI, and Firebase, designed to create a private space for friends to hang out and share resources. It features real-time messaging, image sharing, and message reactions, making conversations more interactive and engaging."
              ghLink="https://github.com/sasiram0812/chatapp-frontend"
              demoLink="https://sasi-chatapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CGPA Calculator"
              description="A user-friendly CGPA Calculator that helps students easily compute their GPA and CGPA semester-wise with accurate results."
              ghLink="https://github.com/sasiram0812/CGPACalculator-"
              demoLink="https://cgpacalculatorreact.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bits}
              isBlog={false}
              title="Portfolio"
              description="A personal portfolio website built to showcase my projects, skills, and academic journey as an IT student, with a clean design and responsive layout."
              ghLink="https://github.com/sasiram0812/Sasiram-Portfolio.git"
              demoLink="https://sasiram-portfolio.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitss}
              isBlog={false}
              title="Email Automation using UiPath"
              description="A UiPath-based Email Automation project designed to automatically read, process, and respond to emails, improving operational efficiency and reducing manual work."
              ghLink=""
              demoLink
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bb}
              isBlog={false}
              title="Unnal Mudiyum – All In One Place"
              description="Unnal Mudiyum is a full-stack student productivity web app that helps users manage study tracking, to-do tasks, fitness logs, and daily insights in one place. Built with React, Firebase Authentication, Firestore, and deployed on Netlify, featuring secure login, real-time data sync, and a clean responsive UI."
              ghLink="https://github.com/sasiram0812/Unnal-Mudiyum"
              demoLink="https://unnalmudiyum.netlify.app/"
            />
          </Col>


        
          


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
