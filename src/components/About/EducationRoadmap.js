import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import logo1 from "../../Assets/logo1.jpg"; // Replace with the actual path to college logo
import logo2 from "../../Assets/logo2.jpg"; // Replace with the actual path to school logo

function EducationRoadmap() {
  const educationData = [
    {
      logo: logo1,
      institution: "Bengal Institute Of Technology",
      university: "Maulana Abul Kalam Azad University of Technology",
      degree: "Bachelor of Technology (B.Tech)",
      stream: "Computer Science & Engineering",
      cgpa: "CGPA - xx (completed 4 semesters)",
      duration: "Oct 2022 - 2026",
    },
    {
      logo: logo2,
      institution: "Laban Hrad Vidyapith For Girls",
      board: "WBCHSE",
      qualification: "Higher Secondary Education (12th)",
      stream: "Science (Physics, Chemistry, Mathematics, Biology)",
      grade: "70%",
      duration: "Jul 2020 - Apr 2022",
    },
    {
      logo: logo2,
      institution: "Laban Hrad Vidyapith For Girls",
      board: "WBBSE",
      qualification: "Secondary Education (10th)",
      stream: "General Study",
      grade: "84.7%",
      duration: "Jan 2014 - Feb 2020",
    },
  ];

  const experienceData = [
    {
      company: "Code Alpha",
      role: "Full Stack Development",
      position: "Intern",
      duration: "01 Jan 2025 - 31 Jan 2025",
      description: "  ",
    },
    {
      company: "Oasis Infobyte",
      role: "Web Development and Designing",
      position: "Intern",
      duration: "05 Nov 2024 - 10 Dec 2024",
      description: "Design and develop a Traveling website's front page using HTML, CSS, and JavaScript.",
    },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px", color: "#0077ff" }}>
        My <strong className="purple">Journey</strong>
      </h1>
      <Col md={6}>
        <h2 className="section-heading" style={{ paddingBottom: "20px", color: "#0077ff" }}>
          Education
        </h2>
        <div className="roadmap">
          {educationData.map((edu, index) => ( // Display items in the given order
            <Col key={index} md={12} className="education-col">
              <div className="milestone" >
                <div className="milestone-line">
                  <div className="milestone-bullet"></div>
                </div>
                <Card className="education-card" style={{ backgroundColor: "transparent", marginTop: "5px", marginBottom: "5px" }}>
                  <Card.Body>
                {/*}    <Card.Title style={{color:"#0ab8e4", fontFamily:"cursive"}}>{edu.institution}</Card.Title>  {*/}


                <Card.Title style={{
  color: "#0ab8e4",
 // fontFamily: "cursive",
  textDecoration: "underline",
  textDecorationThickness: "0.8px",
  textDecorationColor: "#0ab8e4",
  textUnderlineOffset: "3px" // Optional: Adjust offset for better aesthetics
}}>   {edu.institution}</Card.Title>

                
                    <Card.Text className="education-details">
                      {edu.university && (
                        <>
                          <strong style={{ color: "#0077c0" }}>University :</strong> {edu.university}
                          <br />
                        </>
                      )}
                      {edu.board && (
                        <>
                          <strong style={{ color: "#0077c0" }}>Board :</strong> {edu.board}
                          <br />
                        </>
                      )}
                      {edu.degree && (
                        <>
                          <strong style={{ color: "#0077c0" }}>Degree :</strong> {edu.degree}
                          <br />
                        </>
                      )}
                      {edu.qualification && (
                        <>
                          <strong style={{ color: "#0077c0" }}>Qualification :</strong> {edu.qualification}
                          <br />
                        </>
                      )}
                      <strong style={{ color: "#0077c0" }}>Stream :</strong> {edu.stream}
                      <br />
                      <strong style={{ color: "#0077c0" }}>Grade :</strong> {edu.grade || edu.cgpa}
                      <br />
                      <strong style={{ color: "#0077c0" }}>Duration :</strong> {edu.duration}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </div>
      </Col>
      <Col md={6}>
        <h2 className="section-heading" style={{ paddingBottom: "20px", color: "#0077ff" }}>
          Experience
        </h2>
        <div className="roadmap">
          {experienceData.map((exp, index) => ( // Display items in the given order
            <Col key={index} md={12} className="education-col">
              <div className="milestone">
                <div className="milestone-line">
                  <div className="milestone-bullet"></div>
                </div>
                <Card className="education-card" style={{ backgroundColor: "transparent", marginTop: "5px", marginBottom: "5px" }}>
                  <Card.Body>
              {/*}      <Card.Title style={{color:"#0ab8e4",fontFamily:"cursive"}}>{exp.company}</Card.Title> {*/}


              <Card.Title style={{
  color: "#0ab8e4",
  //fontFamily: "cursive",
  textDecoration: "underline",
  textDecorationThickness: "0.8px",
  textDecorationColor: "#0ab8e4",
  textUnderlineOffset: "3px" // Optional: Adjust offset for better aesthetics
}}>
  {exp.company}
</Card.Title>


                    <Card.Text className="education-details">
  
                      <strong style={{ color: "#0077c0" }}>Role :</strong> {exp.role}
                      <br />
                      <strong style={{ color: "#0077c0" }}>Position :</strong> {exp.position}
                      <br />
                      <strong style={{ color: "#0077c0" }}>Duration :</strong> {exp.duration}
                      <br />
                      <strong style={{ color: "#0077c0" }}>Description :</strong> {exp.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </div>
      </Col>
    </Row>
  );
}

export default EducationRoadmap;
