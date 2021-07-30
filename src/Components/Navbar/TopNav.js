import React, {useState} from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';

function TopNav({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

   const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div>
      {/* NavbarHeader */}
        <Navbar  >
          <Container fluid='md' className='topNav'> 
            <Navbar.Brand href="/" className='d-flex justify-content-center align-items-center NavBarLogo'>
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
              <Form className="d-flex align-items-center search">
                <div className='searchInput'>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={wordEntered}
                  onChange={handleFilter}
                  id="roundSearch1"
                  aria-label="Search"
                />
              
                
                  {filteredData.length === 0 ? (
                    <Button variant="outline-success" id='roundSearch2' className='d-flex align-items-center justify-content-center'
                    >
                      <AiOutlineSearch />
                    </Button>
                  ) : (
                    <Button id="roundSearch2" className='d-flex align-items-center text-center justify-content-center' onClick={clearInput}>x</Button>
                  )}
                </div>
              
               {filteredData.length !== 0 && (
                  <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, key) => {
                      return (
                        <a className="dataItem" href={value.link}>
                          <p>{value.title} </p>
                        </a>
                      );
                    })}
                  </div>
                )}
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
