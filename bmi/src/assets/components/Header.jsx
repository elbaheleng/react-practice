import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand >LiveFit – Instant BMI feedback for a healthier lifestyle.
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  )
}

export default Header