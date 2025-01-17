import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{color:"#0689d6"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontFamily: "arial" }}>
          {isReadMore ? props.description.slice(0, 100) + "..." : props.description}
          <span onClick={toggleReadMore} style={{ color: "#0577b3", cursor: "pointer" }}>
            {isReadMore ? " Read More" : " Show Less"}
          </span>
        </Card.Text>
      <Button variant="primary" 
        href=" " 
        target="_blank">
          <BsGithub /> &nbsp;
          {"GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href=""
            target="_blank"
            style={{ marginLeft: "100px" }} // Update margin to 100px
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>   
        )} 
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
