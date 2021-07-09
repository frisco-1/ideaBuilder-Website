import React from "react";
import { Container, Row, Col, Form, Breadcrumb } from "react-bootstrap";
import Select from "react-select";
import { Link } from "react-router-dom";
//PRICES
import { BCPRICES } from "../../Products/Prices";

function BusinessCard() {
  //State
  const [type, setType] = React.useState({ label: "Black & White 14 PT.", value: 0});
  const [quantity, setQuantity] = React.useState({ label: '0', value: 0 });

  //Array Functions
  const typeOptions = BCPRICES.map((product) => product.type)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((type) => ({ label: type, value: type }));
  
  const pictures = BCPRICES.filter(p => type && p.type === type.label)
    .map(img => img.img);
  
  const quantityOptions = BCPRICES.filter((product) => type && product.type === type.value)
    .map((product) => product.quantity)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((quantity) => ({ label: quantity, value: quantity }));

  const priceOptions = BCPRICES.filter((product) => type && product.type === type.value && quantity && product.quantity === quantity.value).map(
    (product) => product.price
  );
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Business Card</Breadcrumb.Item>
      </Breadcrumb>

      <Container className="pb-5">
        
        <Col md={12}>
          <h2 className="pt-2 pb-2">Business Cards</h2> <hr />
        </Col>

        <Row className = "PricingColor">
          <Col md={6} className="p-3 ">
            <img src={pictures} alt='BusinessCard' width='100%'/>
          </Col>

          <Col md={6} className="p-3 position-relative">
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

export default BusinessCard
