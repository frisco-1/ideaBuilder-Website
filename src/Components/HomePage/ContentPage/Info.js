import React from 'react';
import { Col, Row } from 'react-bootstrap';

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

      <Col md={6} className='located-card'>
        <div className='d-flex text-center align-self-center flex-column'>
          <h3>We're Located In Palm Springs, Florida!</h3>
        </div>
      </Col>
      <Col md={6} className='located-card'>
        <div className='d-flex text-center align-self-center flex-column'>
          <h5>Contact Us</h5>
          <a href='tel:+5617211473' id='white'><AiTwotonePhone/> (561) 721-1473</a>
          <a href='mailto:sales@ideaprinting.com' id='white'><IoMdMail /> sales@ideaprinting.com</a>
          <p id='white'><FaMapMarkerAlt/> 3277 Lake Worth Rd. Suite B
            Palm Springs, FL 33461</p>
            
        </div>
      </Col>
    </Row>
  )
}

export default ListCard
