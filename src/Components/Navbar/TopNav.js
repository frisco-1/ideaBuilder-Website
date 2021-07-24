import React from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';

function TopNav() {
  return (
    <div>
      {/* NavbarHeader */}
        <Navbar  >
          <Container fluid='md' className='topNav'> 
            <Navbar.Brand href="/" className='d-flex justify-content-center align-items-center'>
              <img
                alt=""
                src="./img/logo.png"
                width='150px'
                height='85px'
                className="pr-3"
              />{' '}
              <div className='d-flex flex-column'>
                <span className='logo' id='main'>Idea Builder</span>
              <br/>
              <span className='logo' id='small'>Printing & Design</span>
              </div>
            </Navbar.Brand>

            <Nav>
              <Form className="d-flex align-items-center ">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className=""
                  id="roundSearch1"
                  aria-label="Search"
                />
                <Button
                  variant="outline-success"
                  id='roundSearch2'
                  className='d-flex align-items-center justify-content-center'
                >
                    <AiOutlineSearch />
                    
                </Button>
              </Form>
                
              <a href='tel:561-721-1473' className='d-flex pl-4' id='support'>
                <img src='./img/support.png' alt='support' height='50px' className='pr-2'/>
                    
                CALL US NOW
                <br/>
                561-721-1473
              </a>
            </Nav>
          
          </Container>
        </Navbar>
    </div>
  )
}

export default TopNav
