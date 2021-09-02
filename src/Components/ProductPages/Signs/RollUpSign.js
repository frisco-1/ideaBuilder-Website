import React from 'react';
import { Container, Row, Col, Form, Breadcrumb } from 'react-bootstrap';
import NumericInput from 'react-numeric-input';
import Select from 'react-select';
//imgCarousel
import { ROLLUPSIGN } from '../../Products/Prices';

function RollUpSign() {
  //state
  const [type, setType] = React.useState({ label: ROLLUPSIGN[0].type, value: ROLLUPSIGN[0].id });

  const [quantity, setQuantity] = React.useState(1);
  //ArrayFunctions
  const typeOptions = ROLLUPSIGN.map((t) => ({ label: t.type, value: t.id }));

  let price = ROLLUPSIGN[type.value]?.price * quantity;
  console.log(price);

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Roll Up Sign</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="pb-5">

        <Col md={12}>
          <h2 className="pt-2 pb-2 d-inline">Roll Up Sign </h2><hr />
        </Col>
        <Row className="PricingColor">
          <Col md={6} className="p-3 ">
            <img src="./img/Roll Up Sign/RollUpSign-01.png" alt="Roll Up Sign" width="100%"/>
          </Col>

          <Col md={6} className="p-3  position-relative">
            <h3>Configure & Price</h3>
            <hr />
            <p></p>

            <Form>
              <Form.Group controlId='productType' >
                <Form.Label className='d-block'>Type: </Form.Label>
                <Select
                  value={type}
                  onChange={setType}
                  options={typeOptions}
                  placeholder="Select Sign Type"
                  isSearchable={false}
                />
                
              </Form.Group>
              {/* Quantity Using NumericInput */}
              <Form.Group controlId='productQuantity' className='pb-5' >
                <Form.Label className='d-block'>Quantity: </Form.Label>
                <NumericInput
                  className='d-block numberPadding'
                  min={1}
                  max={50}
                  value={quantity}
                  onChange={setQuantity}
                />
              </Form.Group>
            </Form>

            <h3 className="position-absolute pricingDiv">Sign Cost: ${(price).toLocaleString(undefined, { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}</h3>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default RollUpSign;
