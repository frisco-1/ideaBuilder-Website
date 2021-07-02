import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiTwotonePhone } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div id='footer'>
      <Container fluid>
        <Row>
          <Col md={12}>
            <h3 id='footHeading'>Quick Links</h3>
          </Col>
          <Col md={4}>
            <h5 id='LinkHead'>Printing</h5>

            <ul className='list-unstyled'>
              <li><Link to='/business-cards' id='gray'>Business Cards</Link></li>
              <li><Link to='/brochures' id='gray'>Brochures</Link></li>
              <li><Link to ='/flyers' id='gray'>Flyers</Link></li>
              <li><Link to='invoices' id='gray'>Invoices</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 id='LinkHead'>Signs</h5>

            <ul className='list-unstyled'>
              <li><Link to='/magnets' id='gray'>Magnets</Link></li>
              <li><Link to ='/banners' id='gray'>Banners</Link></li>
              <li><Link to='/aluminum-signs' id='gray'>Aluminum Signs</Link></li>
              <li><Link to='/realtor-signs' id='gray'>Realtor Signs</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 id='LinkHead'>Promotion Items</h5>

            <ul className='list-unstyled'>
              <li><Link to='/pens' id='gray'>Pens</Link></li>
              <li><Link to='/keychains' id='gray'>Keychains</Link></li>
              <li><Link to='/drink-wear' id='gray'>Drink Wear</Link></li>
              <li><Link to='/table-covers' id='gray'>Table Covers</Link></li>
            </ul>
          </Col>

          {/* line break */}
          <Col md={12}>
            <hr id='line-break'/>
          </Col>
          {/* End of line break */}

          <Col md={6}>
            <h3 id='footHeading'>Address</h3>

            <p id='LinkHead'>3277 Lake Worth Rd. Suite B
            Palm Springs, FL 33461</p>
          </Col>

          <Col md={6}>
            <h3 id='footHeading'>Contact Us</h3>

            <ul className='list-unstyled fs-5'>
              <li><a href='tel:+5617211473' id='white'><AiTwotonePhone/> (561) 721-1473</a></li>
              <li><a href='mailto:sales@ideaprinting.com' id='white'><IoMdMail/> sales@ideaprinting.com</a></li>
            </ul>
          </Col>

          {/* line break */}
          <Col md={12}>
            <hr id='line-break'/>
          </Col>
          {/* End of line break */}
        </Row>
        <span id='LinkHead'>Idea Builder</span> <span id='grayf'>All Rights Reserved Copyright &#169; {year}</span> 
      </Container>
    </div>
  )
}

export default Footer
