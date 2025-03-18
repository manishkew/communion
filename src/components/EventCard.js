import React from 'react';
import { Card, Badge } from 'react-bootstrap';

function EventCard({ event }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Map categories to Bootstrap color variants
  const getCategoryColor = (category) => {
    switch(category) {
      case 'Religious':
        return 'primary';
      case 'Social':
        return 'success';
      case 'Charity':
        return 'warning';
      default:
        return 'secondary';
    }
  };

  return (
    <Card className="mb-4 h-100">
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {formatDate(event.date)}
        </Card.Subtitle>
        <Badge bg={getCategoryColor(event.category)} className="mb-2">
          {event.category}
        </Badge>
        <Card.Text className="mb-2">
          <strong>Location:</strong> {event.location}
        </Card.Text>
        <Card.Text>{event.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EventCard;