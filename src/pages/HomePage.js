import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      
      <Container className="py-5">
        <h2 className="text-center mb-4">Welcome to Communion</h2>
        <p className="text-center mb-5">
          Connecting people of all faiths through events and community support.
          Our platform helps you find meaningful connections and events in your community.
        </p>
        
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100">
              <Card.Body className="text-center">
                <div className="mb-3">
                  <i className="bi bi-calendar-event" style={{ fontSize: '2rem' }}></i>
                </div>
                <Card.Title>Find Events</Card.Title>
                <Card.Text>
                  Discover events related to your faith and interests. Connect with like-minded individuals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card className="h-100">
              <Card.Body className="text-center">
                <div className="mb-3">
                  <i className="bi bi-people" style={{ fontSize: '2rem' }}></i>
                </div>
                <Card.Title>Build Community</Card.Title>
                <Card.Text>
                  Foster meaningful relationships with people who share your values and beliefs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card className="h-100">
              <Card.Body className="text-center">
                <div className="mb-3">
                  <i className="bi bi-heart" style={{ fontSize: '2rem' }}></i>
                </div>
                <Card.Title>Support Each Other</Card.Title>
                <Card.Text>
                  Offer help and receive support from your community members when needed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;