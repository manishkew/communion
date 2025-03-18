import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AboutPage() {
  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col md={8} className="mx-auto text-center">
          <h1 className="mb-4">About Communion</h1>
          <p className="lead">
            Communion is a platform dedicated to bringing people together across diverse faiths and beliefs,
            fostering understanding, respect, and community support.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col lg={6} className="mb-4 mb-lg-0">
          <Card className="border-0 h-100">
            <Card.Body>
              <h2 className="mb-4">Our Mission</h2>
              <p>
                Communion was founded with a simple yet powerful mission: to create bridges between different
                faith communities and interest groups. In today's world, we believe that understanding and
                respecting our differences while celebrating our common humanity is more important than ever.
              </p>
              <p>
                Through organizing events, facilitating discussions, and providing a platform for community
                support, we aim to foster a world where people of all faiths and backgrounds can come together
                in harmony and mutual respect.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="bg-light border-0 h-100">
            <Card.Body>
              <h2 className="mb-4">Our Values</h2>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-circle-fill me-2 text-primary"></i>
                    <div>
                      <h5>Respect</h5>
                      <p>We honor all faith traditions and personal beliefs, recognizing the dignity inherent in every person.</p>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-circle-fill me-2 text-primary"></i>
                    <div>
                      <h5>Community</h5>
                      <p>We believe in the power of togetherness and the strength that comes from supporting one another.</p>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-circle-fill me-2 text-primary"></i>
                    <div>
                      <h5>Understanding</h5>
                      <p>We promote dialogue and education to foster deeper appreciation of diverse perspectives.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">How It Works</h2>
          <div className="d-flex flex-column flex-md-row justify-content-center text-center">
            <div className="mx-4 mb-4 mb-md-0">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-search" style={{ fontSize: '2rem' }}></i>
              </div>
              <h4>Discover</h4>
              <p>Find events and communities that align with your interests and values.</p>
            </div>
            <div className="mx-4 mb-4 mb-md-0">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-people" style={{ fontSize: '2rem' }}></i>
              </div>
              <h4>Connect</h4>
              <p>Join events and meet people from diverse backgrounds and beliefs.</p>
            </div>
            <div className="mx-4">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-heart" style={{ fontSize: '2rem' }}></i>
              </div>
              <h4>Contribute</h4>
              <p>Create your own events and help build a more connected community.</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={8} className="mx-auto text-center">
          <Card className="bg-light border-0 p-4">
            <Card.Body>
              <h3 className="mb-3">Join Our Community</h3>
              <p className="mb-4">
                Whether you're looking to connect with people of your own faith, learn about different beliefs,
                or simply want to be part of a supportive community, Communion welcomes you with open arms.
              </p>
              <button className="btn btn-primary btn-lg">Sign Up Today</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;