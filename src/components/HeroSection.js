import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-section bg-primary text-white py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="mx-auto text-center">
            <h1 className="display-4 fw-bold">Connecting People Across Faiths & Interests</h1>
            <p className="lead mb-4">
              Discover events and build meaningful connections with people who share your faith, 
              values, and interests. Communion brings communities together to foster understanding and support.
            </p>
            <Button 
              as={Link} 
              to="/events" 
              variant="light" 
              size="lg" 
              className="px-4"
            >
              Explore Events
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;