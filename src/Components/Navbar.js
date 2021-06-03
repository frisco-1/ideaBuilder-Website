import React, { Component } from 'react';
import { Navbar, Container, Form, Button, Nav, NavDropdown } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { PRINTING, SIGNS, ITEM } from './Products/NavItems';

class NavB extends Component {
  render() {
    return (
      <>
        {/* NavbarHeader */}
        <Navbar  >
          <Container fluid='md' className='topNav'> 
            <Navbar.Brand href="#home" className='d-flex justify-content-center align-items-center'>
              <img
                alt=""
                src="./img/logo.png"
                width='150px'
                height='85px'
                className="pr-3"
              />{' '}
              <div className='d-flex flex-column'>
                <span className='logo' id='main'>Idea Builder</span>
              <br/>
              <span className='logo' id='small'>Printing & Design</span>
              </div>
            </Navbar.Brand>

            <Nav>
              <Form className="d-flex align-items-center ">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className=""
                  id="roundSearch1"
                  aria-label="Search"
                />
                <Button
                  variant="outline-success"
                  id='roundSearch2'
                  className='d-flex align-items-center justify-content-center'
                >
                    <AiOutlineSearch />
                    
                </Button>
              </Form>
                
              <a href='tel:561-721-1473' className='d-flex pl-4' id='support'>
                <img src='./img/support.png' alt='support' height='50px' className='pr-2'/>
                    
                CALL US NOW
                <br/>
                561-721-1473
              </a>
            </Nav>
          
          </Container>
        </Navbar>

        {/* Websites Links */}
        <Navbar collapseOnSelect expand="lg" id="linksBg" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>Home</Nav.Link>

                <NavDropdown title="Printing" id="collasible-nav-dropdown">
                  <ListPrinting/>
                </NavDropdown>

                <NavDropdown title="Signs" id="collasible-nav-dropdown">
                  <ListSigns/>
                </NavDropdown>

                <NavDropdown title="Promotional Items" id="collasible-nav-dropdown">
                  <ListItems/>
                </NavDropdown>

                <Nav.Link>Contact Us</Nav.Link>

              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
      </>
    )
  }
}

function ListPrinting() {
  const mapPrint = PRINTING.map(print => {
    return (
      <div>
      <NavDropdown.Item>{print}</NavDropdown.Item>
      </div>
    )
  })

  return (
    <div>
      { mapPrint}
    </div>
  )
};

function ListSigns() {
  const mapSigns = SIGNS.map(signs => {
    return (
      <NavDropdown.Item>{signs}</NavDropdown.Item>
    )
  })

  return (
    <div>
      {mapSigns}
    </div>
  )
};

function ListItems() {
  const mapItems = ITEM.map(item => {
    return(
      <NavDropdown.Item>{item}</NavDropdown.Item>
    )
  })

  return (
    <div>
      {mapItems}
    </div>
  )
};

export default NavB;