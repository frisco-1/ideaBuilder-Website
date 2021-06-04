import React from 'react';
import { Carousel, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { ALL, SIGNS } from './Products/NavItems';


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
      
      
        <Row>
          <Col md={3} className='m-5 p-1 shadow' id='hiddenPhone'>
            
              <h4 className='p-3  d-flex sideBarP' >Popular Products</h4>
                <ListGroup variant='flush'>
                  <ListAll/>
                </ListGroup>
            
          </Col>

          <Col>
            
              <ListCard/>
            
          </Col>
        </Row>

    </div>
  )
}

function ListAll() {
  const mapAll = ALL.map(all => {
    return (
      <ListGroup.Item action >{all}</ListGroup.Item>
    )
  })
  return (
    <div>{mapAll}</div>
  )
}

function ListCard() {
  const mapSigns = SIGNS.map(sign => {
    return (
      <Col md={4}>
        <Card className='m-5 d-flex '>
          <Card.Title>{sign}</Card.Title>
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
