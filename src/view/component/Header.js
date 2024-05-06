import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';


function Header() {

  const [user, setuser] = useState('')
  useEffect(() => {
    setuser(localStorage.getItem("user"));
  })
  return (
    <>



      <Navbar expand="lg" className="maincolor nav-style">
        <Container>

      
          <Navbar.Brand to="/">
            <sapn className="pacifico-regular extra1" style={{ border: '2px solid' }}> Clothe</sapn>
            <span className='pacifico-regular extra'>Compiler </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />


          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 " style={{ maxHeight: '100px' }} navbarScroll>

              <NavLink className='Link' activeClassName='activeLink' to='/'>HOME</NavLink>
              <NavLink className='Link' activeClassName='activeLink' to='/Shop'>SHOP</NavLink>

              {user ?
                <Link className='Link' to='/Logout'>LOGOUT</Link>
                :
                <>
                  <Link className='Link' to='/Login'>LOGIN</Link>
                  <Link className='Link' to='/register'>SIGNUP</Link>
                </>
              }
            </Nav>


            <Form className="d-flex border-bottom border-2 border-dark" >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ border: 'none' }}
              />
              <Button variant="outline-dark" style={{ border: 'none', display: 'flex' }}  ><span class="material-symbols-outlined">
                search
              </span></Button>

            </Form>
          </Navbar.Collapse>

          {/* <span class="material-symbols-outlined">
            shopping_cart
          </span> */}

        </Container>
      </Navbar>

    
    </>
  )
}

export default Header
