import React from 'react';
import { Container, Row, Col, Form, Breadcrumb } from 'react-bootstrap';
import  Select from 'react-select';
import { Link } from 'react-router-dom';

//Array
import {DOORHANGERS} from '../../Products/Prices';

//Invoices
function DoorHanger() {
  //State
  const [pName, setPName] = React.useState({ label: '3.6" x 8.5" Cardstock 14 PT', value: 0 });
  const [quantity, setQuantity] = React.useState({ label: 0, value: 0 });

  //Array Functions
  const pNameOptions = DOORHANGERS.map((pName) => ({ label: pName.name, value: pName.id }));

  const quantityOptions = DOORHANGERS[pName.value]?.pricing.map((q) => ({ label: q.quantity, value: q.id }));

  const pictures = DOORHANGERS[pName.value]?.img;
  let showPrice = DOORHANGERS[pName.value]?.pricing[quantity.value].price;
  
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Door Hangers</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="pb-5">
        
          <Col md={12}>
            <h2 className="pt-2 pb-2">Invoices</h2> <hr />
          </Col>
          <Row className = "PricingColor">
            <Col md={6} className="p-3 ">
              <img src={pictures} alt='DoorHanger' width='100%'/>
            </Col>

            <Col md={6} className="p-3  position-relative">
              <h3>Configure & Price</h3>
              <hr />
              <Form>
                <Form.Group controlId="productInvoice">
                  <Form.Label>Select Invoice Type:</Form.Label>
                  <Select
                    value={pName}
                    onChange={setPName}
                    options={pNameOptions}
                    placeholder="Select Invoice Type"
                    isSearchable={false}
                  />
                </Form.Group>

                <Form.Group controlId="productQuantity">
                  <Form.Label>Quantity:</Form.Label>
                  <Select
                    value={quantity}
                    onChange={setQuantity}
                    options={quantityOptions}
                    placeholder="Select Quantity"
                    className="mb-5"
                    isSearchable={false}
                  />
                </Form.Group>
              </Form>

              <h3 className="position-absolute pricingDiv">Printing Cost: ${showPrice}</h3>
            </Col>
          </Row>
        
      </Container>
    </>
  );
}


export default DoorHanger;