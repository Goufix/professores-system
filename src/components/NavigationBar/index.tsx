import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CustomNavbar } from "./styles";

export function NavigationBar() {
  return (
    <CustomNavbar variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand href="#home">Professores-System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Desafio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </CustomNavbar>
  );
}
