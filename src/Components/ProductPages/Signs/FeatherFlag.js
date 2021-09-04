import React from 'react';
import { Container, Row, Col, Form, Breadcrumb } from 'react-bootstrap';
import NumericInput from 'react-numeric-input';
//imgCarousel
import FeatherFlagCarousel from '../../ProductsImgs/FeatherFlagCarousel';

function FeatherFlag() {
  //state
  const [quantity, setQuantity] = React.useState(1);
  //ArrayFunctions
  let price = 200 * quantity;

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Feather Flags</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="pb-5">

        <Col md={12}>
          <h2 className="pt-2 pb-2 d-inline">Feather Flags </h2><hr />
        </Col>
        <Row className="PricingColor">
          <Col md={6} className="p-3 ">
            <FeatherFlagCarousel />
          </Col>

          <Col md={6} className="p-3  position-relative">
            <h3>Configure & Price</h3>
            <hr />
            <p></p>

            <Form>
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
            <p className='mb-5'><span id='bold'>Description: </span> The Econo Feather Flag is suitable for outdoor events. Effectively advertise your logo or message with our econo feather flag. Its curved sleeve and free-flying edge allows the flag to grab attention without wrapping around the pole, and assembly is easy. Available hardware is a ground stake to fit to your pole set.</p>
            
            <h3 className="position-absolute pricingDiv">Sign Cost: ${(price).toLocaleString(undefined, { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}</h3>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default FeatherFlag;
