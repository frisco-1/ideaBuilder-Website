import React from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';
import {INFO} from '../../../HomeLinks.js'


function Info() {
  return (
    <>
      <Row>
        <Col md={4}>
          <Button href={INFO[0].url}>
            <img src={INFO[0].pic} alt={INFO[0].name} width='100%'/>
            <h3 key={INFO[0].id}>{INFO[0].name}</h3>
          </Button>
        </Col>
        <Col md={4}>
          <Button href={INFO[1].url}>
            <img src={INFO[1].pic} alt={INFO[0].name} width='100%'/>
            <h3 key={INFO[1].id}>{INFO[1].name}</h3>
          </Button>
        </Col>
        <Col md={4}>
          <Button href={INFO[0].url}>
            <Card class=''>
              <img src={INFO[0].pic} alt={INFO[0].name} width='100%'/>
              <Card.Title key={INFO[0].id}>{INFO[0].name}</Card.Title>
            </Card>
          </Button>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Button href={INFO[0].url}>
            <img src={INFO[0].pic} alt={INFO[0].name} width='100%'/>
            <h3 key={INFO[0].id}>{INFO[0].name}</h3>
          </Button>
        </Col>
        <Col md={4}>
          <Button href={INFO[0].url}>
            <Card class=''>
              <img src={INFO[0].pic} alt={INFO[0].name} width='100%'/>
              <Card.Title key={INFO[0].id}>{INFO[0].name}</Card.Title>
            </Card>
          </Button>
        </Col>
        <Col md={4}>
          <Button href={INFO[0].url}>
            <Card class=''>
              <img src={INFO[0].pic} alt={INFO[0].name} width='100%'/>
              <Card.Title key={INFO[0].id}>{INFO[0].name}</Card.Title>
            </Card>
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default Info
