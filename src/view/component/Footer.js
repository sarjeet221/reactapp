import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Footer() {
  return (
    <>
      <Container className='my-5'>
        <Row>
          <Col lg={3} md={6}>
            <h3 className="chakra-petch-semibold-italic maincolor">ABOUT</h3>
            <div className="footer-div w-75" >
            "Welcome to our clothing e-commerce website, where style meets convenience. Discover a curated collection of trendy apparel for all occasions."           </div>
          </Col>

          <Col lg={3} md={6}>
          <h3 className="chakra-petch-semibold-italic maincolor">OUR POLICIES</h3>
          <div className="footer-div" >
            <a href='#' className='footer-links'>Shipping Details</a>
            <a href='#' className='footer-links'>Return & Exchange Policy</a>
            <a href='#' className='footer-links'>Discount craiteria</a>
            <a href='#' className='footer-links'>Offers</a>
            <a href='#' className='footer-links'></a>
            <a href='#' className='footer-links'></a>
            <a href='#' className='footer-links'></a>
            
          </div>
         </Col>
          <Col lg={3} md={6}>
            <h3 className="chakra-petch-semibold-italic maincolor">EXPLORE US</h3>
            <div className="footer-div" >
            <a href='#' className='footer-links'>HOME</a>
            <a href='#' className='footer-links'>ABOUT</a>
            <a href='#' className='footer-links'>PRODUCTS</a>
            <a href='#' className='footer-links'>LOGIN</a>
            </div>
                    
          </Col>

          <Col lg={3} md={6}>
            <h3 className="chakra-petch-semibold-italic maincolor">MORE UPDATES</h3>
            <div className="footer-div" >
              <lable>NAME:</lable>
            <Form.Control  type="text" placeholder=" Name" />
              <lable>EMAIL:</lable>

            <Form.Control type="text" placeholder=" Email" />
            <Button className='my-3' variant="outline-warning">SUBSCRIBE</Button>{' '}
            </div>
          
          
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
