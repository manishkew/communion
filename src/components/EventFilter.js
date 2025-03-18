import React from 'react';
import { Form, ButtonGroup, Button } from 'react-bootstrap';

function EventFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="mb-4">
      <h5>Filter by Category:</h5>
      <ButtonGroup className="w-100">
        <Button 
          variant={selectedCategory === 'All' ? 'primary' : 'outline-primary'}
          onClick={() => onSelectCategory('All')}
        >
          All
        </Button>
        {categories.map((category, index) => (
          <Button 
            key={index}
            variant={selectedCategory === category ? 'primary' : 'outline-primary'}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default EventFilter;