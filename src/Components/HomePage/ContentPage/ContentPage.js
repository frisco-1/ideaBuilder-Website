import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import ListBar from './ListBar';
import TopSellers from './TopSellers';
import '../../../Stylesheets/HomePage.scss';

function ContentPage({PRODUCTS}) {
  return (
    <div>
      <Row id='margin-right-remove'>

        <Col md={3} className='InfoBar p-1 shadow' id='sideBarHide'>
          <h4 className='p-3  d-flex sideBarP' >Popular Products</h4>
          <ListGroup variant='flush'>
            <ListBar PRODUCTS={PRODUCTS}/>
          </ListGroup>
        </Col>

        <Col className='InfoSizing'>
          <TopSellers/>
        </Col>

      </Row>
    </div>
  )
}

export default ContentPage
