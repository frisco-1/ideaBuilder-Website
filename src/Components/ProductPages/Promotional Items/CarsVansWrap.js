import React from "react";
import { Container, Row, Col, Form, Breadcrumb } from "react-bootstrap";
import Select from "react-select";
//PRICES
import {CARS_VANS_WRAP} from "../../Products/Prices";

function CarsVansWrap() {
  //State
  const [name, setName] = React.useState({value: CARS_VANS_WRAP[0].id, label: CARS_VANS_WRAP[0].name});
  const [type, setType] = React.useState({value: CARS_VANS_WRAP[0].products[0].id, label: CARS_VANS_WRAP[0].products[0].type});

  //Array Functions
    // typeOptions
  const nameOptions = CARS_VANS_WRAP.map((name) => ({ value: name.id, label: name.name }));
  const typeOptions = CARS_VANS_WRAP[name.value].products.map((type) => ({ value: type.id, label: type.type }));
    //Other Variables
  const productCode = CARS_VANS_WRAP[name.value].products[type.value]?.code;
  const price = CARS_VANS_WRAP[name.value].products[type.value]?.price;
  const description = CARS_VANS_WRAP[name.value]?.des;

  const img = CARS_VANS_WRAP[name.value].products[type.value]?.img;


  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Wraps (Cars & Vans)</Breadcrumb.Item>
      </Breadcrumb>

      <Container className="pb-5">
        
        <Col md={12}>
          <h2 className="pt-2 pb-2 d-inline">Wraps (Cars & Vans) </h2><hr />
        </Col>
        
        <Row className = "PricingColor">
          <Col md={6} className="p-3">
            <img src={img} alt="Wraps" width="100%" />
          </Col>

          <Col md={6} className="p-3 position-relative">
            <h3>Configure & Price</h3>
            <hr />
            <p>{productCode}</p>

            <Form>
              <Form.Row>
                <Col md={6}>
                  <Form.Group controlId="productName">
                    <Form.Label>Product:</Form.Label>
                    <Select value={name} onChange={setName} options={nameOptions} placeholder="Select Product" isSearchable={false} />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="productType">
                    <Form.Label>Type:</Form.Label>
                    <Select value={type} onChange={setType} options={typeOptions} placeholder="Type" isSearchable={false} />
                  </Form.Group>
                </Col>
              </Form.Row>
            </Form>

            <p  className="pb-5"><span id='bold'>Description: </span>{description}</p>

            <h3 className="position-absolute pricingDiv">Item Cost: ${(price)?.toLocaleString(undefined, { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CarsVansWrap;
