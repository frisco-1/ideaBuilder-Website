import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

function ListCard({PRODUCTS}) {
  const findSigns = PRODUCTS.filter(signs => signs.type === 'SIGNS');
  const mapSigns = findSigns.map(sign => {
    return (
      <Col
        md={4}
        sm={6}
        className='m-6'
      >
        <Card className='m-3 d-flex '>
          <Card.Title key={sign.id} >{sign.name}</Card.Title>
          
          <Button variant="primary">Go somewhere</Button>
        </Card>
      </Col>
    )
  })

  return (
    <Row>
      {mapSigns}
    </Row>
  )
}

export default ListCard
