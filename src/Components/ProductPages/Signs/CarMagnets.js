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
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Car Magnets</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="pb-5">
        <Col md={12}>
          <h2 className="pt-2 pb-2 d-inline">Car Magnets </h2>(CM) <hr />
        </Col>
        <Row className="PricingColor ">
          <Col md={6} className="p-3 text-center">
            <div>
              <img className="magnetsImage" src={productImg} alt="Magnet Sign" />
            </div>
          </Col>

          <Col md={6} className="p-3  position-relative ">
            <h3>Configure & Price</h3>
            <hr />
            <Form>
              <Form.Group controlId="productMagnets" className="magnetOptions">
                <Row>
                  <Col>
                    <span className="magnetOptionLabel">{product != null ? CARMAGNETS.products[product.value].productCode : null}</span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} sm={4}>
                    <div className="magentSize">Size:</div>
                  </Col>
                  <Col xs={6} sm={4}>
                    <div className="magnetOptionLabel">Quantity:</div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={6} sm={4}>
                    <Select
                      value={product}
                      onChange={setProduct}
                      options={CARMAGNETS.products.map((option) => ({ value: option.id, label: option.size }))}
                      placeholder="Select Magnet Size"
                      isSearchable={false}
                    />
                  </Col>
                  <Col xs={6} sm={4}>
                    <NumericInput
                      type="number"
                      step={"1"}
                      min={"1"}
                      max={"20"}
                      value={quantity}
                      onChange={setQuantity}
                      className='d-block numberPadding'
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="magnetDescription">
                      <span className="magentOptionLabel">{product != null ? CARMAGNETS.products[product.value].description : null}</span>
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-md-start">
                  <Form.Check
                    type="checkbox"
                    label="Laminated"
                    checked={isLaminated}
                    className="magnetLaminated"
                    onChange={(e) => setIsLaminated(e.target.checked)}
                  />
                </Row>
                <Row className="magnetsPriceRow">
                  <h3>Sign Cost: ${calculatedPrice.toLocaleString("en-US")}</h3>
                </Row>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CarMagnets;
