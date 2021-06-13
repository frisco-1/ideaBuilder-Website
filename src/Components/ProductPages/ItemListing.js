import React from 'react';
import { Container, Row, Col, Form, Breadcrumb } from 'react-bootstrap';
import  Select from 'react-select';
import { Link } from 'react-router-dom';
//PRICES
import { BCPRICES, FLYERS, INVOICES, ENVELOPES  } from '../Products/Prices';

// BusinessCard
export function BusinessCard() {
  //State
  const [type, setType] = React.useState();
  const [quantity, setQuantity] = React.useState();

  //Array Functions
  const typeOptions = BCPRICES
    .map(product => product.type)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((type) => ({ label: type, value: type }));

  const quantityOptions = BCPRICES
    .filter((product) => type && product.type === type.value)
    .map(product => product.quantity)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((quantity) => ({ label: quantity, value: quantity }));

  const priceOptions = BCPRICES
    .filter(product => type && product.type === type.value && quantity && product.quantity === quantity.value)
    .map(product => product.price)
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item active>Business Card</Breadcrumb.Item>
      </Breadcrumb>

      <Container>
        <Row>
          <Col md={12}><h2 className='pt-2 pb-2'>Business Cards</h2> <hr/></Col>

          <Col md={6} className='p-3 CalCol'>
            <img src='./img/p-business-card.jpg' alt='business-card' width='100%'/>
          </Col>

          <Col md={6} className='p-3 CalCol position-relative'>
            <h3>Configure & Price</h3>
            <hr/>
            <Form>
              <Form.Group controlId='productType'>
                <Form.Label>Type:</Form.Label>
                <Select
                value={type}
                onChange={setType}
                options={typeOptions}
                placeholder='Select Type'
                isSearchable={false}
                />
              </Form.Group>
                
              <Form.Group controlId='productQuantity' className='pb-5'>
                <Form.Label>Quantity:</Form.Label>
                <Select
                  value={quantity}
                  onChange={setQuantity}
                  options={quantityOptions}
                  placeholder='Quantity'
                  isSearchable={false}
                />
              </Form.Group>

            </Form>
            
            <h3 className='position-absolute pricingDiv'>Printing Cost: ${priceOptions}</h3> 
            
          
          </Col>
        </Row>
      </Container>
    </>
  )
}

//Flyers
export function Flyers() {
  //State
  const [type, setType] = React.useState();
  const [quantity, setQuantity] = React.useState();

  //Array Functions

  // typeOptions
  const typeOptions = FLYERS
    .map(product => product.type)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((type) => ({ label: type, value: type }));

  //quantityOptions
  const quantityOptions = FLYERS
    .filter((product) => type && product.type === type.value)
    .map(product => product.quantity)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((quantity) => ({ label: quantity, value: quantity }));

  // PriceOptions
  const priceOptions = FLYERS
    .filter(product => type && product.type === type.value && quantity && product.quantity === quantity.value)
    .map(product => product.price.toLocaleString('en-US'))
  
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item active>Flyers</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Row>
          <Col md={12}><h2 className='pt-2 pb-2'>Flyers</h2> <hr/></Col>

          <Col md={6} className='p-3 CalCol'>
            <img src='./img/p-business-card.jpg' alt='business-card' width='100%'/>
          </Col>

          <Col md={6} className='p-3 CalCol position-relative'>
            <h3>Configure & Price</h3>
            <hr/>
            <Form>
              <Form.Group controlId='productType'>
                <Form.Label>Type:</Form.Label>
                <Select
                value={type}
                onChange={setType}
                options={typeOptions}
                placeholder='Select Type'
                isSearchable={false}
                />
              </Form.Group>
                
              <Form.Group controlId='productQuantity' className='pb-5'>
                <Form.Label>Quantity:</Form.Label>
                <Select
                  value={quantity}
                  onChange={setQuantity}
                  options={quantityOptions}
                  placeholder='Quantity'
                  isSearchable={false}
                />
              </Form.Group>

            </Form>
            
            <h3 className='position-absolute pricingDiv'>Printing Cost: ${priceOptions}</h3> 
            
          
          </Col>
        </Row>
      </Container>
    </>
  )
}

//Invoices
export function Invoices() {
  //State
  const [pName, setPName] = React.useState();
  const [size, setSize] = React.useState();
  const [type, setType] = React.useState();
  const [quantity, setQuantity] = React.useState();

  //Array Functions

  // pNameOptions
  const pNameOptions = INVOICES
    .map(product => product.pName)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((pName) => ({ label: pName, value: pName }));

  //sizeOptions
  const sizeOptions = INVOICES
    .filter((product) => pName && product.pName === pName.value)
    .map(product => product.size)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((size) => ({ label: size, value: size }));

  // typeOptions
  const typeOptions = INVOICES
    .filter(product => pName && product.pName === pName.value && size && product.size === size.value)
    .map(product => product.type)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((type) => ({ label: type, value: type }));

  //quantityOptions
  const quantityOptions = INVOICES
    .filter(p => pName && p.pName === pName.value && size && p.size === size.value && type && p.type === type.value)
    .map(p => p.quantity)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((quantity) => ({ label: quantity, value: quantity }))
  
  //priceOptions
  const priceOptions = INVOICES
    .filter(p=> pName && p.pName === pName.value && size && p.size === size.value && type && p.type === type.value && quantity && p.quantity === quantity.value)
    .map(p => p.price)
  
  
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item active>Invoices</Breadcrumb.Item>
      </Breadcrumb>
      <Container className='pb-5'>
        <Row>
          <Col md={12}><h2 className='pt-2 pb-2'>Invoices</h2> <hr/></Col>

          <Col md={6} className='p-3 CalCol'>
            <img src='./img/p-business-card.jpg' alt='business-card' width='100%'/>
          </Col>

          <Col md={6} className='p-3 CalCol position-relative'>
            <h3>Configure & Price</h3>
            <hr/>
            <Form>

              <Form.Group controlId='productInvoice'>
                <Form.Label>Select Invoice Type:</Form.Label>
                <Select
                value={pName}
                onChange={setPName}
                options={pNameOptions}
                placeholder='Select Invoice Type'
                isSearchable={false}
                />
              </Form.Group>

              <Form.Row>
                <Col>
                  <Form.Group controlId='productSize'>
                    <Form.Label>Size:</Form.Label>
                    <Select
                    value={size}
                    onChange={setSize}
                    options={sizeOptions}
                    placeholder='Select Size'
                    isSearchable={false}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group controlId='productType'>
                    <Form.Label>Type:</Form.Label>
                    <Select
                    value={type}
                    onChange={setType}
                    options={typeOptions}
                    placeholder='Select Type'  
                    isSearchable={false}
                    />
                  </Form.Group>
                </Col>

              </Form.Row>

              <Form.Group controlId='productQuantity'>
                <Form.Label>Quantity:</Form.Label>
                <Select
                value={quantity}
                onChange={setQuantity}
                options={quantityOptions}
                placeholder='Select Quantity'
                className='mb-5'
                isSearchable={false}
                />
              </Form.Group>
                
            </Form>
            
            <h3 className='position-absolute pricingDiv'>Printing Cost: ${priceOptions}</h3> 
            
          
          </Col>
        </Row>
      </Container>
    </>
  )
}


//Envelopes
export function Envelopes() {
  //State
  const [type, setType] = React.useState();
  const [quantity, setQuantity] = React.useState();
  
  //Array Functions

  // typeOptions
  const typeOptions = ENVELOPES
    .map(product => product.type)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((type) => ({ label: type, value: type }));

  //quantityOptions
  const quantityOptions = ENVELOPES
    .filter((product) => type && product.type === type.value)
    .map(product => product.quantity)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((quantity) => ({ label: quantity, value: quantity }));

  // PriceOptions
  const priceOptions = ENVELOPES
    .filter(product => type && product.type === type.value && quantity && product.quantity === quantity.value)
    .map(product => product.price.toLocaleString('en-US'));
  
  
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item active>Flyers</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Row>
          <Col md={12}><h2 className='pt-2 pb-2'>Flyers</h2> <hr/></Col>

          <Col md={6} className='p-3 CalCol'>
            <img src='./img/p-business-card.jpg' alt='business-card' width='100%'/>
          </Col>

          <Col md={6} className='p-3 CalCol position-relative'>
            <h3>Configure & Price</h3>
            <hr/>
            <Form>
              <Form.Group controlId='productType'>
                <Form.Label>Type:</Form.Label>
                <Select
                value={type}
                onChange={setType}
                options={typeOptions}
                placeholder='Select Type'
                isSearchable={false}
                />
              </Form.Group>
                
              <Form.Group controlId='productQuantity' className='pb-5'>
                <Form.Label>Quantity:</Form.Label>
                <Select
                  value={quantity}
                  onChange={setQuantity}
                  options={quantityOptions}
                  placeholder='Quantity'
                  isSearchable={false}
                />
              </Form.Group>

            </Form>
            
            <h3 className='position-absolute pricingDiv'>Printing Cost: ${priceOptions}</h3> 
            
          
          </Col>
        </Row>
      </Container>
    </>
  )
}
