import React from "react";
import { Container, Row, Col, Form, Breadcrumb } from "react-bootstrap";
import Select from "react-select";
//PRICES
import {FLYERS} from "../../Products/Prices";

function Flyers() {
  //State
  const [type, setType] = React.useState({label: '8.5" x 11" 100LB Text 4/4', value: 0});
  const [quantity, setQuantity] = React.useState({label: 0, value: 0});

  //Array Functions

  // typeOptions
  const typeOptions = FLYERS.map((product) => product.type)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((type) => ({ label: type, value: type }));
  
  const pictures = FLYERS.filter(p => type && p.type === type.label)
    .map(img => img.img)
    .filter((v, i, a) => a.indexOf(v) === i)
  
  const productCode = FLYERS.filter(p => type && p.type === type.label)
    .map(code => code.code)
    .filter((v, i, a) => a.indexOf(v) === i)

  //quantityOptions
  const quantityOptions = FLYERS.filter((product) => type && product.type === type.value)
    .map((product) => product.quantity)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((quantity) => ({ label: quantity, value: quantity }));

  // PriceOptions
  const priceOptions = FLYERS.filter((product) => type && product.type === type.value && quantity && product.quantity === quantity.value).map(
    (product) => product.price.toLocaleString("en-US")
  );

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Flyers</Breadcrumb.Item>
      </Breadcrumb>

      <Container className="pb-5">
        
        <Col md={12}>
          <h2 className="pt-2 pb-2 d-inline">Flyers </h2>(FLY) <hr />
        </Col>
        
        <Row className = "PricingColor">
          <Col md={6} className="p-3">
            <img src={pictures} alt="Flyers" width="100%" />
          </Col>

          <Col md={6} className="p-3 position-relative">
            <h3>Configure & Price</h3>
            <hr />
            <p>{productCode}</p>
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

            <h3 className="position-absolute pricingDiv">Printing Cost: ${priceOptions.toLocaleString("en-US")}</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Flyers
