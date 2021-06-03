import React from 'react';
import { Carousel, Row, Col, ListGroup } from 'react-bootstrap';
import { ALL } from './Products/NavItems';


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
        <Col md={3}>
          <div className='p-5' id='hiddenPhone'>
            <h4 className='p-2' >Popular Products</h4>
              <ListGroup variant='flush'>
                <ListAll/>
              </ListGroup>
            </div>
          </Col>

          <Col md={9}>

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

export default Home;
