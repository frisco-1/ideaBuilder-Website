import React from 'react';
import { Container, Row, Col, Form, Breadcrumb } from 'react-bootstrap';
import Select from 'react-select';
import NumericInput from 'react-numeric-input';

import { REALTORSIGNS } from '../../Products/Prices';

function RealtorSigns() {
  //state
  const [type, setType] = React.useState({ label: 'Aluminum Sign', value: 0 });
  const [size, setSize] = React.useState({ label: '18" x 24"', value: 0 });
  

  //ArrayFunctions
  const typeOptions = REALTORSIGNS.map((type) => ({ label: type.type, value: type.id }));

  const sizeOptions = REALTORSIGNS[type.value]?.category.map((s) => ({ label: s.size, value: s.id }));

  //Quantity Options
  const quantityOptions = REALTORSIGNS[type.value]?.category.map((p) => p.quantity);

  const [quantity, setQuantity] = React.useState(quantityOptions);

  //Calculating price with quantity variable times p.price
  let price = REALTORSIGNS[type.value]?.category.map((p) => p.price * quantity);

  let image = REALTORSIGNS[type.value]?.img;

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Realtor Signs</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="pb-5">
        
          <Col md={12}>
          <h2 className="pt-2 pb-2 d-inline">Realtor Signs </h2>(REA) <hr />
          </Col>
          <Row className = "PricingColor">
            <Col md={6} className="p-3 ">
              <img src={image} alt='RealtorSigns' width='100%'/>
            </Col>

            <Col md={6} className="p-3  position-relative">
              <h3>Configure & Price</h3>
              <hr />
              <Form>
                <Form.Group controlId="productType">
                  <Form.Label>Select Sign Type:</Form.Label>
                  <Select
                    value={type}
                    onChange={setType}
                    options={typeOptions}
                    placeholder="Select Sign Type"
                    isSearchable={false}
                  />
                </Form.Group>
              
              <Form.Row>
                  <Col md={6}>
                    <Form.Group controlId="productSize">
                      <Form.Label>Size:</Form.Label>
                      <Select
                        value={size}
                        onChange={setSize}
                        options={sizeOptions}
                        placeholder="Select Size"
                        className=""
                        isSearchable={false}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId='productQuantity' className='pb-5' >
                      <Form.Label className='d-block'>Quantity: </Form.Label>
                      <NumericInput
                        className='d-block numberPadding'
                        min={quantityOptions}
                        max={100}
                        value={quantity}
                        onChange={setQuantity}
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
              </Form>

              <h3 className="position-absolute pricingDiv">Sign Cost: ${price.toLocaleString("en-US")}</h3>
            </Col>
          </Row>
        
      </Container>
    </>
  )
}

export default RealtorSigns;
