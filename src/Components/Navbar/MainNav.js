import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MainNav({ListItems, ListPrinting, ListSigns}) {
  return (
    <div>
      {/* Websites Links */}
        <Navbar collapseOnSelect expand="lg" id="linksBg" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to='/'>Home</Nav.Link>

                <NavDropdown title="Printing" id="collasible-nav-dropdown">
                  <ListPrinting/>
                </NavDropdown>

                <NavDropdown title="Signs" id="collasible-nav-dropdown">
                  <ListSigns/>
                </NavDropdown>

                <NavDropdown title="Promotional Items" id="collasible-nav-dropdown">
                  <ListItems/>
                </NavDropdown>

                <Nav.Link as={Link} to='/contact'>Contact Us</Nav.Link>

              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default MainNav;
