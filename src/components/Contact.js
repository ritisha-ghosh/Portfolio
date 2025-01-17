import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Particle from "./Particle"; // Ensure this file exists
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState({ show: false, type: "", message: "" });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.fullName && formData.email && formData.subject && formData.message) {
      emailjs
        .send(
          "service_d3j2chb", // Replace with your EmailJS service ID
          "template_i6ajfci", // Replace with your EmailJS template ID
          {
            from_name: formData.fullName,
            email_id: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          "BP_tVI8yO_s-NxnNy" // Replace with your EmailJS public key
        )
        .then(
          () => {
            setShowAlert({
              show: true,
              type: "success",
              message: "Your message has been sent successfully!",
            });
            setFormData({ fullName: "", email: "", subject: "", message: "" });
          },
          (error) => {
            setShowAlert({
              show: true,
              type: "danger",
              message: "Failed to send the message. Please try again later.",
            });
          }
        );
    } else {
      setShowAlert({
        show: true,
        type: "danger",
        message: "Please fill in all fields.",
      });
    }
  };

  return (
    <Container  className="contact-section123" style={{ paddingTop: "30px" }}>
      <Particle />
      <Container style={{ paddingBottom: "63px" }}>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={8} style={{ textAlign: "center" }}>
            <h1
              className="contact-heading123"
              style={{
                color: "white",
                paddingTop: "70px",
                paddingBottom: "30px",
              }}
            >
              Get in <strong className="purple">Touch</strong>
            </h1>
            {showAlert.show && (
              <Alert
                variant={showAlert.type}
                onClose={() => setShowAlert({ show: false })}
                dismissible
              >
                {showAlert.message}
              </Alert>
            )}
            <Form
              onSubmit={handleSubmit}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "left",
              }}
            >
              <Form.Group controlId="formFullName">
                <Form.Label style={{ color: "white", paddingTop: "20px" }}>
                  Full Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: "transparent", color: "white" }}
                />
              </Form.Group>
              <Form.Group controlId="formEmail" style={{ marginTop: "10px" }}>
                <Form.Label style={{ color: "white" }}>Email ID</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: "transparent", color: "white" }}
                />
              </Form.Group>
              <Form.Group controlId="formSubject" style={{ marginTop: "10px" }}>
                <Form.Label style={{ color: "white" }}>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Enter the subject of your message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: "transparent", color: "white" }}
                />
              </Form.Group>
              <Form.Group controlId="formMessage" style={{ marginTop: "10px" }}>
                <Form.Label style={{ color: "white" }}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: "transparent", color: "white" }}
                />
              </Form.Group>
              <div style={{ textAlign: "center" , paddingTop: "30px", paddingBottom: "20px"}}>
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    width: "150px",
                    backgroundColor: "#004170",
                    transition: "background-color 0.3s, transform 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#003366")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#004170")
                  }
                >
                  Send
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
