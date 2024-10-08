import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className=" text-dark py-4 mt-auto" style={{ backgroundColor: '#AAC8F8' }}>
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>
              We are a resume builder app designed to help you create stunning resumes effortlessly.
            </p>
          </Col>
          <Col md={3}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-dark text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-dark text-decoration-none">Contact</a></li>
              <li><a href="/privacy" className="text-dark text-decoration-none">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://github.com" className="text-dark text-decoration-none">GitHub</a></li>
              <li><a href="https://linkedin.com" className="text-dark text-decoration-none">LinkedIn</a></li>
              <li><a href="https://twitter.com" className="text-dark text-decoration-none">Twitter</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12} className="text-center">
            <p>&copy; 2024 Elite Resume app. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
