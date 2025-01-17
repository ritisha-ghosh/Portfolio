import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import EducationRoadmap from "./EducationRoadmap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/avatar2.jpg";

import './Techstack.css';

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" style={{maxHeight:"400px",width:"auto", borderRadius:"165px"}} />
          </Col>
        </Row>

        <EducationRoadmap />

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

      {/*}  <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> {*/}
      </Container>
    </Container>
  );
}

export default About;
