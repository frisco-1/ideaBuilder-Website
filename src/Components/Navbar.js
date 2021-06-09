import React, { Component } from 'react';
import { Navbar, Container, Form, Button, Nav, NavDropdown } from 'react-bootstrap';
// import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
import { AiOutlineSearch } from 'react-icons/ai';
import { PRODUCTS } from './Products/ProductsName';
import { Link } from 'react-router-dom';

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

        {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">

              <Nav.Link href="#features">Features</Nav.Link>

              <NavDropdownMenu title="Dropdown 1" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

                <DropdownSubmenu href="#action/3.7" title="Text to show">

                  <NavDropdown.Item href="#action/8.1">Sub 1</NavDropdown.Item>

                  <DropdownSubmenu href="#action/3.7" title="Text to show">
                    <NavDropdown.Item href="#action/9.1">
                      Sub 2
                    </NavDropdown.Item>
                  </DropdownSubmenu>

                </DropdownSubmenu>
              </NavDropdownMenu>

            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
        
      </>
    )
  }
}

function ListPrinting() {
  const findPrint = PRODUCTS.filter(print => print.type === 'PRINTING');
  const mapPrint = findPrint.map(print => {
    return (
      <div>
        <NavDropdown.Item as={Link} to={print.id}>
          {print.name}
        </NavDropdown.Item>
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
  const findSigns = PRODUCTS.filter(signs => signs.type === 'SIGNS');
  const mapSigns = findSigns.map(signs => {
    return (
      <NavDropdown.Item as={Link} to={signs.id}>{signs.name}</NavDropdown.Item>
    )
  })

  return (
    <div>
      {mapSigns}
    </div>
  )
};

function ListItems() {
  const findItems = PRODUCTS.filter(item => item.type === 'ITEMS');
  const mapItems = findItems.map(item => {
    return (
      <NavDropdown.Item as={Link} to={item.id}>{item.name}</NavDropdown.Item>
    )
  })

  return (
    <div>
      {mapItems}
    </div>
  )
};

export default NavB;