import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Breadcrumb } from "react-bootstrap";
import Select from "react-select";
import { Link } from "react-router-dom";
import styles from "./magnets.module.css";

import { MAGNETS } from "../../Products/Prices";

function Magnets() {
  //state
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(2);
  const [isLaminated, setIsLaminated] = useState(false);

  let calculatedPrice = (product !== null ? MAGNETS.products[product.value].price : 0) * quantity + (isLaminated ? 15 : 0);
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Magnets</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="pb-5">
        <Col md={12}>
          <h2 className="pt-2 pb-2">Magnets</h2> <hr />
        </Col>
        <Row className="PricingColor">
          <Col md={5} className="p-3 "></Col>

          <Col md={7} className="p-3  position-relative">
            <h3>Configure & Price</h3>
            <hr />
            <Form>
              <Form.Group controlId="productMagnets" style={{ width: "30em" }} class="magnetOptions">
                <Row>
                  <Col md={2}></Col>
                  <Col md={10}>
                    <span className={styles.size}>Size:</span>
                  </Col>
                </Row>

                <Row>
                  <Col xs={2}>
                    <span className={styles.optionLabel}>{product != null ? MAGNETS.products[product.value].productCode : null}</span>
                  </Col>
                  <Col xs={10}>
                    <Select
                      value={product}
                      onChange={setProduct}
                      options={MAGNETS.products.map((option) => ({ value: option.id, label: option.size }))}
                      placeholder="Select Magnet Size"
                      isSearchable={false}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}></Col>
                  <Col xs={10}>
                    <div className={styles.description}>
                      <span className={styles.optionLabel}>{product != null ? MAGNETS.products[product.value].description : null}</span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                    <span className={styles.optionLabel}>QTY</span>
                  </Col>
                  <Col xs={10}>
                    <Form.Control
                      type="number"
                      step={"2"}
                      min={"2"}
                      max={"20"}
                      value={quantity}
                      onChange={(e) => {
                        if (e.target.value % 2 === 0) {
                          setQuantity(e.target.value);
                        }
                      }}
                    />
                  </Col>
                </Row>
                <Row className="justify-content-md-end">
                  <Form.Check
                    type="checkbox"
                    label="Laminated"
                    checked={isLaminated}
                    className={styles.laminated}
                    onClick={(e) => setIsLaminated(e.target.checked)}
                  />
                </Row>
                <Row>
                  <h3 className="pricingDiv">Printing Cost: ${calculatedPrice}</h3>
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
