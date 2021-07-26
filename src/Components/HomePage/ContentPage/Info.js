import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';

import { AiTwotonePhone } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';

function ListCard() {

  return (
    <Row>
      <Col md={12} className='welcome-card'>
        <div className='d-flex text-center align-self-center flex-column'>
          <h2>Welcome to Idea Builder!</h2>
          <h5>Your Local Printing and Signs Business Since 1999</h5>
        </div>
      </Col>

      <Col xs={6} className='located-card'>
        <div className='d-flex justify-content-center align-self-center text-center'>
          <h3 className='InfoHeading'>We're Located In Palm Springs, Florida!</h3>
        </div>
      </Col>

      <Col xs={6} className='contact-card'>
        <div className='d-flex text-center align-self-center flex-column'>
          <h3 className='InfoHeading'>Contact Us</h3>
          <div className='d-flex text-center align-self-center flex-column InfoContact'>
            <a href='tel:+5617211473' id='white'><AiTwotonePhone/> (561) 721-1473</a>
            <a href='mailto:sales@ideaprinting.com' id='white'><IoMdMail /> sales@ideaprinting.com</a>
            <p id='white-nonLink Info-l'><FaMapMarkerAlt/> 3277 Lake Worth Rd. Suite B
              Palm Springs, FL 33461</p>
          </div>
        </div>
      </Col>

      <Col md={12} className='welcome-card'>
        <div className='d-flex text-center align-self-center flex-column'>
          <h2>Looking for T Shirts and Custom Apparel?</h2>

          <Button id='card-button' target="_blank"  href='https://www.ibtshirts.com/'>Visit <img src='../../img/ib tshirt logo.png' height='40px' alt='ib tshirts'/> .com </Button>
        </div>
      </Col>
      <Col md={12} className='welcome-card'>
        <div className='d-flex text-center align-self-center flex-column'>
          <h2>Looking for Websites?</h2>

          <Button id='card-button' target="_blank"  href='https://www.ibsites.com/'>Visit <img src='../../img/ib sites logo.png' height='40px' alt='ib tshirts'/> .com </Button>
        </div>
      </Col>
    </Row>
  )
}

export default ListCard
