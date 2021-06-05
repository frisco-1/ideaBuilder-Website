import React from 'react';
import { Carousel, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { PRODUCTS } from './Products/Products';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <Carousel id='hiddenPhone'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/carousel1.png"
            alt="First slide"
            width='100%'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/carousel2.png"
            alt="Second slide"
            width='100%'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/carousel3.png"
            alt="Third slide"
            width='100%'
          />
        </Carousel.Item>
      </Carousel>
      
      
        <Row id='margin-right-remove'>
          <Col md={3} className='m-5 p-1 shadow' id='sideBarHide'>
            
              <h4 className='p-3  d-flex sideBarP' >Popular Products</h4>
                <ListGroup variant='flush'>
                  <ListAll/>
                </ListGroup>
            
          </Col>

          <Col className='m-5'>
              <h4>Products</h4>
              <ListCard/>
            
          </Col>
        </Row>

    </div>
  )
}

function ListAll() {
  const mapAll = PRODUCTS.map(all => {
    return (
      <ListGroup.Item action as={Link} to={all.id}>{all.name}</ListGroup.Item>
    )
  })
  return (
    <div>{mapAll}</div>
  )
}

function ListCard() {
  const findSigns = PRODUCTS.filter(signs => signs.type === 'SIGNS');
  const mapSigns = findSigns.map(sign => {
    return (
      <Col md={4} sm={6} className='m-6'>
        <Card className='m-3 d-flex '>
          <Card.Title>{sign.name}</Card.Title>
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

export default Home;
