import React from "react";
import { Container, Row, Col, Form, Breadcrumb } from "react-bootstrap";
import Select from "react-select";
//PRICES
import {TRAILERS_WRAP} from "../../Products/Prices";

function TrailerWrap() {
  //State
  const [style, setStyle] = React.useState({value: TRAILERS_WRAP[0].id, label: TRAILERS_WRAP[0].style});
  const [size, setSize] = React.useState({value: TRAILERS_WRAP[0].size[0].id, label: TRAILERS_WRAP[0].size[0].size});

  //Array Functions
    // typeOptions
  const styleOptions = TRAILERS_WRAP.map((style) => ({ value: style.id, label: style.style }));
  const sizeOptions = TRAILERS_WRAP[style.value].size.map((size) => ({ value: size.id, label: size.size }));
  
    //Other Variables
  const productCode = TRAILERS_WRAP[style.value].code;
  const price = TRAILERS_WRAP[style.value].size[size.value]?.price;
  const img = TRAILERS_WRAP[style.value].img;

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Wraps (Trailers)</Breadcrumb.Item>
      </Breadcrumb>

      <Container className="pb-5">
        
        <Col md={12}>
          <h2 className="pt-2 pb-2 d-inline">Wraps (Trailers) </h2><hr />
        </Col>
        
        <Row className = "PricingColor">
          <Col md={6} className="p-3">
            <img src={img} alt="Flyers" width="100%" />
          </Col>

          <Col md={6} className="p-3 position-relative">
            <h3>Configure & Price</h3>
            <hr />
            <p>{productCode}</p>

            <Form>
              <Form.Row>
                <Col md={6}>
                  <Form.Group controlId="productName">
                    <Form.Label>Product:</Form.Label>
                    <Select value={style} onChange={setStyle} options={styleOptions} placeholder="Select Product" isSearchable={false} />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="productType">
                    <Form.Label>Type:</Form.Label>
                    <Select value={size} onChange={setSize} options={sizeOptions} placeholder="Type" isSearchable={false} />
                  </Form.Group>
                </Col>
              </Form.Row>
            </Form>

            <p  className="pb-5"><span id='bold'>Description: </span>Price Includes Installation. Price per one job.</p>

            <h3 className="position-absolute pricingDiv">Item Cost: ${(price)?.toLocaleString(undefined, { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TrailerWrap;
