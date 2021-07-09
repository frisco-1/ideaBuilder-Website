import React from 'react';
import { Container, Row, Col, Form, Breadcrumb } from 'react-bootstrap';
import  Select from 'react-select';
import { Link } from 'react-router-dom';
//imgCarousel
import InvoiceCarousel from '../ProductsImgs/InvoiceCarousel';
//Array
import {INVOICES} from '../Products/Prices';

//Invoices
function Invoices() {
  //State
  const [pName, setPName] = React.useState({ label: "Invoices Contracts Black Ink 2 Parts", value: 0 });
  const [size, setSize] = React.useState({ label: '5.5" x 8.5"', value: 0 });
  const [type, setType] = React.useState({ label: "Regular", value: 0 });
  const [quantity, setQuantity] = React.useState({ label: 0, value: 0 });

  //Array Functions

  // pNameOptions
  const pNameOptions = INVOICES.map((pName) => ({ label: pName.name, value: pName.id }));

  console.log(pName.value);

  //sizeOptions
  const sizeOptions = INVOICES[pName.value]?.measurements.map((m) => ({ label: m.size, value: m.id }));

  // typeOptions
  const typeOptions = INVOICES[pName.value ]?.measurements[size.value ]?.category.map((c) => ({ label: c.type, value: c.id }));

  //quantityOptions
  const quantityOptions = INVOICES[pName.value]?.measurements[size.value]?.category[type.value]?.amount.map((a) => ({
    label: a.quantity,
    value: a.id,
  }));
  

  let showPrice = INVOICES[pName.value].measurements[size.value].category[type.value].amount[quantity.value]?.price;
  

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Invoices</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="pb-5">
        
          <Col md={12}>
            <h2 className="pt-2 pb-2">Invoices</h2> <hr />
          </Col>
          <Row className = "PricingColor">
            <Col md={6} className="p-3 ">
              <InvoiceCarousel/>
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

                <Form.Row>
                  <Col>
                    <Form.Group controlId="productSize">
                      <Form.Label>Size:</Form.Label>
                      <Select
                        value={size}
                        onChange={setSize}
                        options={sizeOptions}
                        placeholder="Select Size"
                        isSearchable={false}
                      />
                    </Form.Group>
                  </Col>

                  <Col>
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
                  </Col>
                </Form.Row>

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


export default Invoices;