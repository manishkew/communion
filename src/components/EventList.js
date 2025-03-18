import React from 'react';
import { Row, Col } from 'react-bootstrap';
import EventCard from './EventCard';

function EventList({ events }) {
  if (events.length === 0) {
    return <p className="text-center">No events found matching your criteria.</p>;
  }

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {events.map(event => (
        <Col key={event.id}>
          <EventCard event={event} />
        </Col>
      ))}
    </Row>
  );
}

export default EventList;