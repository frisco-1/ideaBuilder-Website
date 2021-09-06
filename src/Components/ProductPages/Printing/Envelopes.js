import React from "react";
import { Container, Row, Col, Form, Breadcrumb } from "react-bootstrap";
import Select from "react-select";
//PRICES
import { ENVELOPES } from "../../Products/Prices";

//Envelopes
function Envelopes() {
  //State
  const [type, setType] = React.useState(
    { value: ENVELOPES[0].id, label: ENVELOPES[0].type }
  );
  const [quantity, setQuantity] = React.useState(
    { value: ENVELOPES[0].amount[0].id, label: ENVELOPES[0].amount[0].quantity }
  );

  //Options
  const typeOptions = ENVELOPES.map(option => ({ value: option.id, label: option.type }));
  const quantityOptions = ENVELOPES[type.value].amount.map(option => ({ value: option.id, label: option.quantity }));

  const price = ENVELOPES[type.value].amount[quantity.value].price;

  
  let image = ENVELOPES[type.value].img;

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
            <img src={image} alt="Envelopes" width="100%" />
          </Col>

          <Col md={6} className="p-3 CalCol position-relative">
            <h3>Configure & Price</h3>
            <hr />
            <Form>
              <Form.Group controlId="productType">
                <Form.Label>Type:</Form.Label>
                <Select
                  value={type}
                  onChange={setType}
                  options={typeOptions}
                  placeholder="Select Type"
                  isSearchable={false} 
                />
              </Form.Group>

              <Form.Group controlId="productQuantity" className="pb-5">
                <Form.Label>Quantity:</Form.Label>
                <Select value={quantity} onChange={setQuantity} options={quantityOptions} placeholder="Quantity" isSearchable={false} />
              </Form.Group>
            </Form>

            <h3 className="position-absolute pricingDiv">Sign Cost: ${(price).toLocaleString(undefined, { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Envelopes;