import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import EventList from '../components/EventList';
import EventFilter from '../components/EventFilter';
import EventForm from '../components/EventForm';
import SampleEvents from '../data/SampleEvents';

function EventsPage() {
  const [events, setEvents] = useState(SampleEvents);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Extract unique categories from events
  const categories = [...new Set(events.map(event => event.category))];
  
  // Filter events based on selected category
  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory);
  
  // Add new event
  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <Container className="py-4">
      <h1 className="mb-4">Upcoming Events</h1>
      
      <EventFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <EventForm onAddEvent={handleAddEvent} categories={categories} />
      
      <EventList events={filteredEvents} />
    </Container>
  );
}

export default EventsPage;