import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
        <h3>${product.price}</h3>
    )
  })
  return (
    <Container>
      <Row>
        <Col md={12}><h2>Business Cards</h2></Col>

        <Col md={6}>
          <img src='./img/p-business-card.jpg' alt='business-card' width='100%'/>
        </Col>

        <Col md={6}>
          <Select
            value={type}
            onChange={setType}
            options={typeOptions}
            placeholder='Select Type'
          />
          <Select
            value={quantity}
            onChange={setQuantity}
            options={quantityOptions}
            placeholder='Quantity'
          />

          {priceOptions}
        </Col>
      </Row>
    </Container>
  )
}
