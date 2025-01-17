import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import Type from "./Type";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/RitishaGhosh_CV.pdf";
import { AiOutlineDownload, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Particle from "../Particle";

function Home() {
  const [responsiveStyles, setResponsiveStyles] = useState({
    textAlign: "left",
    socialPaddingTop: "20px",
    socialFlexDirection: "row",
    socialJustifyContent: "flex-start",
    avatarPaddingTop: "0px",
    buttonJustifyContent: "flex-start",
    typeMarginBottom: "30px", // Initial gap between Type and Find Me On
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setResponsiveStyles({
          textAlign: "center",
          socialPaddingTop: "10px",
          socialFlexDirection: "row",
          socialJustifyContent: "center",
          avatarPaddingTop: "20px",
          buttonJustifyContent: "center",
          typeMarginBottom: "50px", // Increased gap for responsive
        });
      } else {
        setResponsiveStyles({
          textAlign: "left",
          socialPaddingTop: "20px",
          socialFlexDirection: "row",
          socialJustifyContent: "flex-start",
          avatarPaddingTop: "0px",
          buttonJustifyContent: "flex-start",
          typeMarginBottom: "30px", // Default gap
        });
      }
    };

    handleResize(); // Apply styles on initial render
    window.addEventListener("resize", handleResize); // Update styles on window resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="home-section" id="about">
      <Particle />
      <Container>
        <div className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1
                style={{
                  paddingBottom: 15,
                  textAlign: responsiveStyles.textAlign,
                  color: "white",
                }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                👋🏼
                </span>
              </h1>

              <h1
                style={{
                  paddingTop: 15,
                  textAlign: responsiveStyles.textAlign,
                  color: "white",
                }}
                className="heading-name"
              >
                I'M
                <strong className="main-name"> RITISHA GHOSH</strong>
              </h1>

              <div
                style={{
                  paddingLeft: "0",
                  paddingBottom: 30,
                  paddingTop: 30,
                  textAlign: "left",
                  marginBottom: responsiveStyles.typeMarginBottom, // Dynamic gap between Type and Find Me On
                }}
              >
                <Type />
              </div>

              <Col
                md={12}
                className="home-social"
                style={{
                  textAlign: responsiveStyles.textAlign,
                  paddingTop: responsiveStyles.socialPaddingTop,
                }}
              >
                <h1>FIND ME ON</h1>

                <ul
                  className="home-social-links"
                  style={{
                    paddingLeft: "0px",
                    listStyle: "none",
                    display: "flex",
                    gap: "20px",
                    flexDirection: responsiveStyles.socialFlexDirection,
                    justifyContent: responsiveStyles.socialJustifyContent,
                    marginTop: "10px",
                  }}
                >
                  <li className="social-icons">
                    <a
                      href="https://github.com/ritisha-ghosh"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      style={{
                        fontSize: "24px",
                        color: "inherit",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#007bff")}
                      onMouseOut={(e) => (e.target.style.color = "inherit")}
                    >
                      <AiFillGithub />
                    </a>
                  </li>

                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/ritisha-ghosh-510rg2004"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      style={{
                        fontSize: "24px",
                        color: "inherit",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#007bff")}
                      onMouseOut={(e) => (e.target.style.color = "inherit")}
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>

                  <li className="social-icons">
                    <a
                      href="https://x.com/_ritisha_ghosh_"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      style={{
                        fontSize: "24px",
                        color: "inherit",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#007bff")}
                      onMouseOut={(e) => (e.target.style.color = "inherit")}
                    >
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </Col>
            </Col>

            <Col md={4} className="myAvtar">
              <Tilt>
                <img
                  src={myImg}
                  className="img-fluid"
                  alt="avatar"
                  style={{
                    transition: "transform 0.3s ease",
                    paddingTop: responsiveStyles.avatarPaddingTop,
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </Tilt>
            </Col>

            <Col
              style={{
                display: "flex",
                justifyContent: responsiveStyles.buttonJustifyContent,
                position: "relative",
                paddingTop: "5px",
              }}
            >
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{
                  maxWidth: "250px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0056b3")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#007bff")
                }
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Home;
