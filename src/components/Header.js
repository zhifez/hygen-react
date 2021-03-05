import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function Header () {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">hygenXreact</Navbar.Brand>
      <Navbar.Toggle aria-controls="header-nav" />
        <Navbar.Collapse id="header-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/hello-world">Hello</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}