import React, { Component } from 'react';
import {NavDropdown } from 'react-bootstrap';
// import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
import { PRODUCTS } from '../Products/ProductsName';
import { Link } from 'react-router-dom';

import TopNav from './TopNav';
import MainNav from './MainNav';

class NavB extends Component {
  render() {
    return (
      <>
        <TopNav/>
        <MainNav ListPrinting={ListPrinting} ListSigns={ListSigns} ListItems={ListItems}/>
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
        <NavDropdown.Item as={Link} to={print.id} key={print.id}>
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
      <NavDropdown.Item as={Link} to={signs.id} key={signs.id}>{signs.name}</NavDropdown.Item>
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
      <NavDropdown.Item as={Link} to={item.id} key={item.id}>{item.name}</NavDropdown.Item>
    )
  })

  return (
    <div>
      {mapItems}
    </div>
  )
};

export default NavB;