import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import {INFO} from '../../../TopSellersBackEnd.js'


function Info() {
  const TopSellers = INFO.map((info =>
    <Col md={4} key={info.id}>
      <Button href={info.url} id='ProductCard'>
        <img src={info.pic} alt={info.name} width='100%'/>
        <h5 className='d-flex text-center align-content-center justify-content-center' key={info.id}>{info.name}</h5>
      </Button>
    </Col>

  ));
  return (
    <>
      <h3>Top Sellers</h3>
      <Row>
        {TopSellers}
      </Row>

      
    </>
  )
}

export default Info
