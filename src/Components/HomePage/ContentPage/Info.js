import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import {INFO} from '../../../HomeLinks.js'


function Info() {
  return (
    <>
      <h3>Top Sellers</h3>
      <Row>
        <Col md={4} >
          <Button href={INFO[0].url} id='ProductCard'>
            <img src={INFO[0].pic} alt={INFO[0].name} width='100%'/>
            <h5 className='d-flex text-center align-content-center justify-content-center' key={INFO[0].id}>{INFO[0].name}</h5>
          </Button>
        </Col>
        <Col md={4} >
          <Button href={INFO[1].url} id='ProductCard'>
            <img src={INFO[1].pic} alt={INFO[1].name} width='100%'/>
            <h5 className='d-flex text-center align-content-center justify-content-center' key={INFO[1].id}>{INFO[1].name}</h5>
          </Button>
        </Col>
      </Row>

      
    </>
  )
}

export default Info
