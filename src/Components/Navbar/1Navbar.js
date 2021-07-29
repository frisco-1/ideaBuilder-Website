import React, { Component } from 'react';
import '../../Stylesheets/Navbar.scss';
import {NavDropdown } from 'react-bootstrap';
// import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
import { PRODUCTS } from '../Products/ProductsName';
import { Link } from 'react-router-dom';
import SiteLinks from '../../Data.json';

import TopNav from './TopNav';
import MainNav from './MainNav';

class NavB extends Component {
  render() {
    return (
      <>
        <TopNav data={SiteLinks}/>
        <MainNav ListPrinting={ListPrinting} ListSigns={ListSigns} ListItems={ListItems}/>
        
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