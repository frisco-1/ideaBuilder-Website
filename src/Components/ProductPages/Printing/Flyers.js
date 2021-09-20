import React from "react";
import { Container, Row, Col, Form, Breadcrumb } from "react-bootstrap";
import Select from "react-select";
//PRICES
import {FLYERS} from "../../Products/Prices";

function Flyers() {
  //State
  const [type, setType] = React.useState({value: FLYERS[0].id, label: FLYERS[0].type});
  const [quantity, setQuantity] = React.useState({value: FLYERS[0].pricing[0].id, label: FLYERS[0].pricing[0].quantity});

  //Array Functions
    // typeOptions
  const typeOptions = FLYERS.map((type) => ({ value: type.id, label: type.type }));
  
    //quantityOptions
  let quantityOptions = FLYERS[type.value].pricing.map((qty) => ({ value: qty.id, label: qty.quantity }));
  
    //Other Variables
  const productCode = FLYERS[type.value]?.code;
  const price = FLYERS[type.value].pricing[quantity.value]?.price;
  const img = FLYERS[type.value]?.img;


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
            <img src={img} alt="Flyers" width="100%" />
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

            <h3 className="position-absolute pricingDiv">Item Cost: ${(price)?.toLocaleString(undefined, { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Flyers
