import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pic1 from "../../Assets/Projects/portfolio.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ paddingTop: "0px" }}>
          My Recent <strong className="purple">Works </strong>
        </h1>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pic1} // Update this line to use your portfolio image
              isBlog={false}
              title="Portfolio Website"
              description="This is my personal Portfolio Website which I have created using React.js. I have shared about myself, my skills, projects, and archievements."
              ghLink=" " // Update with your GitHub link
              demoLink=" " // Update with your demo link
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
