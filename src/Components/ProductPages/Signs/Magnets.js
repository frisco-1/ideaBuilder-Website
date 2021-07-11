import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Breadcrumb } from "react-bootstrap";
import Select from "react-select";

import { MAGNETS } from "../../Products/Prices";

function Magnets() {
  //state
  const [product, setProduct] = useState({ value: MAGNETS.products[0].id, label: MAGNETS.products[0].size });
  const [quantity, setQuantity] = useState(2);
  const [isLaminated, setIsLaminated] = useState(false);

  let productImg = product !== null ? MAGNETS.products[product.value].img : "";

  let calculatedPrice = (product !== null ? MAGNETS.products[product.value].price : 0) * quantity + (isLaminated ? 15 : 0);
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Magnets</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="pb-5">
        <Col md={12}>
          <Row className="justify-content-sm-start">
            <h2 className="pt-2 pb-2">Magnets</h2> <p className="magnetProductTag">(Cm)</p>
          </Row>
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
                    <span className="magnetOptionLabel">{product != null ? MAGNETS.products[product.value].productCode : null}</span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} sm={4}>
                    <div className="magentSize">Size:</div>
                  </Col>
                  <Col xs={6} sm={4}>
                    <div className="magnetOptionLabel">QTY:</div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={6} sm={4}>
                    <Select
                      value={product}
                      onChange={setProduct}
                      options={MAGNETS.products.map((option) => ({ value: option.id, label: option.size }))}
                      placeholder="Select Magnet Size"
                      isSearchable={false}
                    />
                  </Col>
                  <Col xs={6} sm={4}>
                    <Form.Control
                      type="number"
                      step={"2"}
                      min={"2"}
                      max={"20"}
                      value={quantity}
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="magnetDescription">
                      <span className="magentOptionLabel">{product != null ? MAGNETS.products[product.value].description : null}</span>
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
                  <h3>Sign Cost: ${calculatedPrice}</h3>
                </Row>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Magnets;
