import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import  Select from 'react-select';
//PRICES
import { BCPRICES } from '../Products/Prices';

export function BusinessCard() {
  //State
  const [type, setType] = React.useState();
  const [quantity, setQuantity] = React.useState();

  //Array Functions
  const typeOptions = BCPRICES
    .map(product => product.type)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((type) => ({ label: type, value: type }));

  const quantityOptions = BCPRICES
    .filter((product) => type && product.type === type.value)
    .map(product => product.quantity)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((quantity) => ({ label: quantity, value: quantity }));

  const priceOptions = BCPRICES
    .filter(product => type && product.type === type.value && quantity && product.quantity === quantity.value)
    .map(product => {
      return (
        <div className='d-inline'>${product.price}</div>
    )
  })
  return (
    <Container>
      <Row>
        <Col md={12}><h2>Business Cards</h2></Col>

        <Col md={6} className='p-3 CalCol'>
          <img src='./img/p-business-card.jpg' alt='business-card' width='100%'/>
        </Col>

        <Col md={6} className='p-3 CalCol '>
          <h3>Configure & Price</h3>
          <hr/>
          <Form>
            <Form.Group controlId='productType'>
              <Form.Label>Type:</Form.Label>
              <Select
              value={type}
              onChange={setType}
              options={typeOptions}
              placeholder='Select Type'
              isSearchable={false}
              />
            </Form.Group>
              
            <Form.Group controlId='productQuantity'>
              <Form.Label>Quantity</Form.Label>
              <Select
                value={quantity}
                onChange={setQuantity}
                options={quantityOptions}
                placeholder='Quantity'
                isSearchable={false}
              />
            </Form.Group>

          </Form>

         <h3 className='pricingDiv'>Printing Cost: {priceOptions}</h3> 
        </Col>
      </Row>
    </Container>
  )
}
