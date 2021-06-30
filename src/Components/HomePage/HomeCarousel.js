import React from 'react';
import { Carousel } from 'react-bootstrap';

function HomeCarousel() {
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
    </div>
  )
}

export default HomeCarousel
