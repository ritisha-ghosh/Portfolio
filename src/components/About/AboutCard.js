import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{fontFamily:"cursive"}}>
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ritisha Ghosh </span>
            from <span className="purple"> Kolkata, WestBengal, India.</span>
            <br />
            I am currently pursing B.Tech degree in Computer Science And Engineering.
        {/*}    <br />
            I have completed 4 semesters with 7 cgpa . {*/}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Guitar Playing
            </li>
            
          </ul>

          <p style={{ color: "#004170" }}>
          {/*}  "Strive to build things that make a difference!"{" "}{*/}
          </p>
          <footer className="blockquote-footer"  >Ritisha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
