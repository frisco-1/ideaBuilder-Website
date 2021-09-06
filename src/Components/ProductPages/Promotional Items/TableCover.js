import React from "react";
import { Container, Row, Col, Form, Breadcrumb } from "react-bootstrap";
import Select from "react-select";
import NumericInput from 'react-numeric-input';
//PRICES
import { TABLECOVERS } from "../../Products/Prices";

//TableCover
function TableCover() {
  //State
  const [size, setSize] = React.useState(
    { value: TABLECOVERS[0].id, label: TABLECOVERS[0].size }
  );
  const [option, setOption] = React.useState(
    { value: TABLECOVERS[0].options[0].id, label: TABLECOVERS[0].options[0].name }
  );
  const [quantity, setQuantity] = React.useState(1);

  //Options
  const sizeOptions = TABLECOVERS.map(size => ({ value: size.id, label: size.size }));
  const tableOptions = TABLECOVERS[size.value].options.map(option =>
    ({ value: option.id, label: option.name })
  );
  let price = TABLECOVERS[size.value]?.options[option.value]?.price * quantity;
  const img = TABLECOVERS[size.value]?.options[option.value]?.img;
  const description = TABLECOVERS[size.value]?.options[option.value]?.description;

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Table Covers</Breadcrumb.Item>
      </Breadcrumb>

      <Container className="pb-5">
        <Col md={12}>
          <h2 className="pt-2 pb-2">Table Covers</h2> <hr />
        </Col>
        <Row className = "PricingColor">
          <Col md={6} className="p-3 CalCol">
            <img src={img} alt="TableCover" width="100%" />
          </Col>

          <Col md={6} className="p-3 CalCol position-relative">
            <h3>Configure & Price</h3>
            <hr />
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
                      isSearchable={false} 
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="productOption">
                    <Form.Label>Option:</Form.Label>
                    <Select value={option} onChange={setOption} options={tableOptions} placeholder="Options" isSearchable={false} />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="productQuantity">
                    <Form.Label>Quantity:</Form.Label>
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

            <p className='pb-5'><span id='bold'>Description: </span>{description}</p>

            <h3 className="position-absolute pricingDiv">Sign Cost: ${(price).toLocaleString(undefined, { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableCover;