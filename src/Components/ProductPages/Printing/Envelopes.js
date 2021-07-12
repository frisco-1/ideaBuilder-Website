import React from "react";
import { Container, Row, Col, Form, Breadcrumb } from "react-bootstrap";
import Select from "react-select";
//PRICES
import { ENVELOPES } from "../../Products/Prices";

//Envelopes
function Envelopes() {
  //State
  const [type, setType] = React.useState();
  const [quantity, setQuantity] = React.useState();

  //Array Functions

  // typeOptions
  const typeOptions = ENVELOPES.map((product) => product.type)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((type) => ({ label: type, value: type }));

  //quantityOptions
  const quantityOptions = ENVELOPES.filter((product) => type && product.type === type.value)
    .map((product) => product.quantity)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((quantity) => ({ label: quantity, value: quantity }));

  // PriceOptions
  const priceOptions = ENVELOPES.filter((product) => type && product.type === type.value && quantity && product.quantity === quantity.value).map(
    (product) => product.price.toLocaleString("en-US")
  );

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Envelopes</Breadcrumb.Item>
      </Breadcrumb>

      <Container className="pb-5">
        <Col md={12}>
          <h2 className="pt-2 pb-2">Envelopes</h2> <hr />
        </Col>
        <Row className = "PricingColor">
          <Col md={6} className="p-3 CalCol">
            <img src="./img/p-business-card.jpg" alt="business-card" width="100%" />
          </Col>

          <Col md={6} className="p-3 CalCol position-relative">
            <h3>Configure & Price</h3>
            <hr />
            <Form>
              <Form.Group controlId="productType">
                <Form.Label>Type:</Form.Label>
                <Select value={type} onChange={setType} options={typeOptions} placeholder="Select Type" isSearchable={false} />
              </Form.Group>

              <Form.Group controlId="productQuantity" className="pb-5">
                <Form.Label>Quantity:</Form.Label>
                <Select value={quantity} onChange={setQuantity} options={quantityOptions} placeholder="Quantity" isSearchable={false} />
              </Form.Group>
            </Form>

            <h3 className="position-absolute pricingDiv">Printing Cost: ${priceOptions}</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Envelopes;