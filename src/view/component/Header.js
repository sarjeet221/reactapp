import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {

  const [user, setuser] = useState('')
  useEffect(() => {
    setuser(localStorage.getItem("user"));
  })
  return (
    <>

      <Container className='my-2'>
        <Row>
          <marquee className="marq">Shirt | t-shirt | Trousor | Jeans | Shose |Shirt | Pants            |Dress|            Skirt|            Jacket|            Coat|            Sweater|            Blouse|            T-shirt|            Jeans|             Shorts|            Suit|            Tie|            Scarf|            Hat|            Gloves|            Socks|            Shoes|           Boots|            Sneakers|            Sandals|            Cardigan|            Hoodie|            Blazer|            Vest|            Pajamas|            Robe|            Overalls|            Jumpsuit|            Kimono|            Sarong|            Poncho|            Romper|            Tank top|            Cap</marquee>
        </Row>
        <Row>
          <Col>

            <Navbar expand="lg" className="maincolor nav-style">
              <Container fluid>
                <Navbar.Brand href="#"><sapn className="pacifico-regular extra1"> Clothe</sapn><span className='pacifico-regular extra'>Compiler </span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href='/'>HOME</Nav.Link>
                    {/* <Nav.Link href='/Detail'>DETAILS</Nav.Link> */}
                    <Nav.Link href='/Shop'>SHOP</Nav.Link>


                    {user ?


                      <Nav.Link href='/Logout'>LOGOUT</Nav.Link>
                      :
                      <>
                        <Nav.Link href='/Login'>LOGIN</Nav.Link>
                        <Nav.Link href='/register'>SIGNUP</Nav.Link>
                      </>
                    }






                    {/* <NavDropdown title="CATEGORIES" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">Men</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Women
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#">
                      SIGN UP
                    </Nav.Link> */}


                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-dark">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>









        {/* previous version of nevbar  */}

        {/* <Row className='nav-b'>
          <Col className='column'>    
            <img src={require('../image/lovee compiler.png')} width="25px" className='logo-img' />
          </Col>
          <Col className='column'>
          <Link to="/" className='Link'  >Home</Link>
          <Link to="/Product" className='Link'  >Product</Link>
          <Link to="/login" className='Link'  >login</Link>
          <Link to="/register" className='Link'  >Register</Link>


          </Col>
        </Row> */}
      </Container>
    </>
  )
}

export default Header
