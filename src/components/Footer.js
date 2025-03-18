import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-4 mt-5">
      <Container className="text-center">
        <p className="mb-0">© {new Date().getFullYear()} Communion App. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;