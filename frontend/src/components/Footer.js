import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <p>
            Contact Us:016677543777 | Email Us:{" "}
            <a href={`mailto:sarahzabeen36@gmail.com`}>Click here to mail!</a>
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
