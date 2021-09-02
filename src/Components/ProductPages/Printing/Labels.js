import React from 'react';
import { Container, Row, Col, Form, Breadcrumb } from 'react-bootstrap';
import Select from 'react-select';

import { LABELS } from '../../Products/Prices';

function Labels() {
  //state
  const [shape, setShape] = React.useState({ value: LABELS.Shape[0].id, label: LABELS.Shape[0].name });
  const [paper, setPaper] = React.useState({ value: LABELS.Paper[0].id, label: LABELS.Paper[0].type });
  const [size, setSize] = React.useState({ value: LABELS.Price[0].id, label: LABELS.Price[0].size });
  const [lam, setLam] = React.useState({ value: LABELS.Price[0].style[0].id, label: LABELS.Price[0].style[0].lam });
  const [color, setColor] = React.useState({ value: LABELS.Price[0].style[0].color[0].id, label: LABELS.Price[0].style[0].color[0].selectColor });
  const [quantity, setQuantity] = React.useState({ value: LABELS.Price[0].style[0].color[0].amount[0].id, label: LABELS.Price[0].style[0].color[0].amount[0].quantity });

  const shapeOptions = LABELS.Shape.map((shape) => ({ label: shape.name, value: shape.id }));
  const paperOptions = LABELS.Paper.map((paper) => ({ label: paper.type, value: paper.id }));
  const sizeOptions = LABELS.Price.map((size) => ({ label: size.size, value: size.id }));
  const lamOptions = LABELS.Price[size.value].style.map((lam) => ({ label: lam.lam, value: lam.id }));
  const colorOptions = LABELS.Price[size.value].style[lam.value].color.map((color) => ({ label: color.selectColor, value: color.id }));
  const quantityOptions = LABELS.Price[size.value].style[lam.value].color[color.value].amount.map((q) => ({ label: q.quantity, value: q.id }));

  let price = LABELS.Price[size.value].style[lam.value].color[color.value].amount[quantity.value].price;

  //ArrayFunctions
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Labels</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="pb-5">

        <Col md={12}>
          <h2 className="pt-2 pb-2 d-inline">Labels </h2>(VSI) <hr />
        </Col>
        <Row className="PricingColor">
          <Col md={6} className="p-3 ">
            <img src='./img/BusinessCard/Black&White.png' alt='Labels' width='100%' />
          </Col>

          <Col md={6} className="p-3  position-relative">
            <h3>Configure & Price</h3>
            <hr />
            <Form>
              <Form.Row>
                <Col md={6}>
                  <Form.Group controlId='productShape'>
                    <Form.Label>Shape: </Form.Label>
                    <Select
                      value={shape}
                      onChange={setShape}
                      options={shapeOptions}
                      isSearchable={false}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId='productShape'>
                    <Form.Label>Paper: </Form.Label>
                    <Select
                      value={paper}
                      onChange={setPaper}
                      options={paperOptions}
                      isSearchable={false}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>

              <Form.Row>
                <Col md={6}>
                  <Form.Group controlId='productShape'>
                    <Form.Label>Size: </Form.Label>
                    <Select
                      value={size}
                      onChange={setSize}
                      options={sizeOptions}
                      isSearchable={false}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId='productShape'>
                    <Form.Label>Lamination: </Form.Label>
                    <Select
                      value={lam}
                      onChange={setLam}
                      options={lamOptions}
                      isSearchable={false}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>

              <Form.Row>
                <Col md={6}>
                  <Form.Group controlId='productShape'>
                    <Form.Label>Color: </Form.Label>
                    <Select
                      value={color}
                      onChange={setColor}
                      options={colorOptions}
                      isSearchable={false}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId='productShape'>
                    <Form.Label>Quantity: </Form.Label>
                    <Select
                      value={quantity}
                      onChange={setQuantity}
                      options={quantityOptions}
                      className='mb-5'
                      isSearchable={false}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
            </Form>

            <h3 className="position-absolute pricingDiv">Printing Cost: ${(price).toLocaleString(undefined, { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}</h3>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default Labels;
