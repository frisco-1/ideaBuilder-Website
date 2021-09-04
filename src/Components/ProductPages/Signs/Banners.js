import React from 'react';
import { Container, Row, Col, Form, Breadcrumb } from 'react-bootstrap';
import Select from 'react-select';
import NumericInput from 'react-numeric-input';

import { BANNERS } from '../../Products/Prices';

function Banners() {
  //state
  const [size, setSize] = React.useState({ label: '2" x 6"', value: 0 });

  const sizeOptions = BANNERS.map((s) => ({ label: s.size, value: s.id }));
  const codeOptions = BANNERS[size.value]?.code;
  console.log(sizeOptions);
  const [quantity, setQuantity] = React.useState(1);
  let price = BANNERS[size.value]?.price * quantity;
  console.log(price);
  let img = BANNERS[size.value]?.img;

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Banners</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="pb-5">
        
          <Col md={12}>
          <h2 className="pt-2 pb-2 d-inline">Banners </h2>(BAN) <hr />
          </Col>
          <Row className = "PricingColor">
            <Col md={6} className="p-3 ">
              <img src={img} alt='Banners' width='100%'/>
            </Col>

            <Col md={6} className="p-3  position-relative">
              <h3>Configure & Price</h3>
              <hr />
              <p>{codeOptions}</p>
              <Form>
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
                    <Form.Group controlId='productQuantity' >
                      <Form.Label className='d-block'>Quantity: </Form.Label>
                      <NumericInput
                        className='d-block numberPadding'
                        min={1}
                        max={100}
                        value={quantity}
                        onChange={setQuantity}
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <p className='pb-5'><span id='bold'>Description: </span> We use a premium heavyweight 13 oz. scrim vinyl banner. It has a very smooth surface for best printing results. This material is typically used for billboards, building wraps, banners, event flags, trade show signage, parades, etc.</p>
              </Form>
            
            

              <h3 className="position-absolute pricingDiv">Sign Cost: ${price.toLocaleString("en-US")}</h3>
            </Col>
          </Row>
        
      </Container>
    </>
  )
}

export default Banners
