import React from "react";
import { Container, Row, Col, Form, Breadcrumb } from "react-bootstrap";
import Select from "react-select";
//PRICES
import {BROCHURES} from "../../Products/Prices";

function Brochures() {
  //State
  const [type, setType] = React.useState({label: BROCHURES[0].type, value: BROCHURES[0].id});
  const [quantity, setQuantity] = React.useState({ label: BROCHURES[0].price[0].quantity, value: BROCHURES[0].price[0].id });

  //Array Functions
  const typeOptions = BROCHURES.map((t) => ({ label: t.type, value: t.id }));
  const quantityOptions = BROCHURES[type.value].price.map((q) => ({ label: q.quantity, value: q.id }));
  console.log(quantityOptions);

  const productPicture = BROCHURES[type.value]?.img;

  const price = BROCHURES[type.value]?.price[quantity.value].price;

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Brochures</Breadcrumb.Item>
      </Breadcrumb>

      <Container className="pb-5">
        
        <Col md={12}>
          <h2 className="pt-2 pb-2 d-inline">Brochures </h2> <hr />
        </Col>
        
        <Row className = "PricingColor">
          <Col md={6} className="p-3">
            <img src={productPicture} alt="Brochures" width="100%" />
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

            <h3 className="position-absolute pricingDiv">Printing Cost: ${(price).toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':2})}</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Brochures
