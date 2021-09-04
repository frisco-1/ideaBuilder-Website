import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Breadcrumb } from "react-bootstrap";
import Select from "react-select";
import NumericInput from 'react-numeric-input';

import { CARMAGNETS } from "../../Products/Prices";

function CarMagnets() {
  //state
  const [product, setProduct] = useState({ value: CARMAGNETS.products[0].id, label: CARMAGNETS.products[0].size });
  const [quantity, setQuantity] = useState(1);
  const [isLaminated, setIsLaminated] = useState(false);

  let productImg = product !== null ? CARMAGNETS.products[product.value].img : "";

  let calculatedPrice = (product !== null ? CARMAGNETS.products[product.value].price : 0) * quantity + (isLaminated ? 15 : 0);
  return (
    <>
      {/* CAR MAGNETS */}
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Car Magnets</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="pb-5">

        <Col md={12}>
          <h2 className="pt-2 pb-2 d-inline">Car Magnets </h2><hr />
        </Col>
        <Row className="PricingColor">
          <Col md={6} className="p-3 ">
            <img src={productImg} alt="Magnet Sign" width="100%"/>
          </Col>

          <Col md={6} className="p-3  position-relative">
            <h3>Configure & Price</h3>
            <hr />
            <p></p>

            <Form>
              {/* Quantity Using NumericInput */}
              <Form.Row>
                <Col md={6}>
                  <Form.Group controlId='productSize' >
                    <Form.Label className='d-block'>Size: </Form.Label>
                    <Select
                      value={product}
                      onChange={setProduct}
                      options={CARMAGNETS.products.map((option) => ({ value: option.id, label: option.size }))}
                      placeholder="Select Magnet Size"
                      isSearchable={false}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId='productQuantity' >
                    <Form.Label className='d-block'>Quantity: </Form.Label>
                    <NumericInput
                      type="number"
                      step={"1"}
                      min={"1"}
                      max={"20"}
                      value={quantity}
                      onChange={setQuantity}
                      className='d-block numberPadding'
                    />
                  </Form.Group>
                </Col>
              </Form.Row>

              <Form.Row>
                <Col>
                  <div className="magnetDescription">
                    <span className="magentOptionLabel">{product != null ? CARMAGNETS.products[product.value].description : null}</span>
                  </div>
                </Col>
              </Form.Row>

              <Form.Row>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Laminated"
                    checked={isLaminated}
                    className="magnetLaminated pb-5"
                    onChange={(e) => setIsLaminated(e.target.checked)}
                  />
                </Col>
              </Form.Row>
              
            </Form>
            <h3 className="position-absolute pricingDiv">Sign Cost: ${(calculatedPrice).toLocaleString(undefined, { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}</h3>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default CarMagnets;
