import React from 'react';
import { Container, Row, Col, Form, Breadcrumb } from 'react-bootstrap';
import Select from 'react-select';
import NumericInput from 'react-numeric-input';

import { FOAMSIGNS } from '../../Products/Prices';

function FoamSigns() {
  //state
  const [size, setSize] = React.useState({ label: FOAMSIGNS[0].size, value: FOAMSIGNS[0].id });
  const [quantity, setQuantity] = React.useState(1);
  
  //ArrayFunctions
  const sizeOptions = FOAMSIGNS.map((s) => ({ label: s.size, value: s.id }));

  const code = FOAMSIGNS[size.value]?.code;

  let price = FOAMSIGNS[size.value]?.price * quantity; 

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Foam Signs</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="pb-5">
        
          <Col md={12}>
          <h2 className="pt-2 pb-2 d-inline">Foam Signs </h2>(FS)<hr />
          </Col>
          <Row className = "PricingColor">
            <Col md={6} className="p-3 ">
              <img src='./img/BusinessCard/Black&White.png' alt='Foam Signs' width='100%'/>
            </Col>

            <Col md={6} className="p-3  position-relative">
              <h3>Configure & Price</h3>
              <hr />
              <p>{code}</p>
            
              <Form>
                <Form.Row>
                  <Col md={6}>
                    {/* Select Size */}
                    <Form.Group controlId="productType">
                      <Form.Label>Select Size:</Form.Label>
                      <Select
                        value={size}
                        onChange={setSize}
                        options={sizeOptions}
                        placeholder="Select Sign Type"
                        isSearchable={false}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
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
                  </Col>
                </Form.Row>
              </Form>
              <p className='mb-5'><span id='bold'>Description: </span> Foam Signs are not laminated</p>
              <h3 className="position-absolute pricingDiv">Sign Cost: ${price.toLocaleString("en-US")}</h3>
            </Col>
          </Row>
        
      </Container>
    </>
  )
}

export default FoamSigns;
