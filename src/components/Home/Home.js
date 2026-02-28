import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const navigate = useNavigate();

  const handleResumeClick = () => {
     navigate("/resume"); 
    // Make sure resume.pdf is inside public folder
  };

  const handleProjectClick = () => {
    navigate("/project"); // change if your route name is different
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SASIRAM V</strong>
              </h1>

              <div style={{ padding: 30, textAlign: "left" }}>
                <Type />
              </div>

              {/* 🔥 BUTTON SECTION ADDED HERE */}
              <div style={{ marginTop: 20 }}>
                <Button
                  variant="success"
                  size="lg"
                  style={{ marginRight: "15px", padding: "10px 25px" }}
                  onClick={handleResumeClick}
                >
                  See My Resume
                </Button>

                <Button
                  variant="outline-light"
                  size="lg"
                  style={{ padding: "10px 25px" }}
                  onClick={handleProjectClick}
                >
                  View Projects
                </Button>
              </div>

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;