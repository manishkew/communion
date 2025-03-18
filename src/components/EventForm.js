import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function EventForm({ onAddEvent, categories }) {
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    category: 'Religious'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate a unique ID (in a full app, this would be handled by the backend)
    const eventWithId = {
      ...newEvent,
      id: Date.now(),
    };
    
    onAddEvent(eventWithId);
    
    // Reset form
    setNewEvent({
      title: '',
      date: '',
      location: '',
      description: '',
      category: 'Religious'
    });
  };

  return (
    <div className="bg-light p-4 rounded mb-4">
      <h3 className="mb-3">Add New Event</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={newEvent.location}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={newEvent.category}
                onChange={handleChange}
                required
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={newEvent.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Add Event
        </Button>
      </Form>
    </div>
  );
}

export default EventForm;