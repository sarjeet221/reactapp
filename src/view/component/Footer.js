import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../component/newcom/heading.css";
import logo from '../image/clothc.svg'



function Heading({ children }) {
  return <h3 className="footer-heading">{children}</h3>;
}

function Footer() {
  return (
    <>
      <div className="mt-5 footer-style">
        <Container>        
        <Row>
          <Col lg={3} md={6}>
            <Heading>ABOUT</Heading>

            <div className="footer-div w-75 pt-2">
            <img src={logo} height={75} width={150} style={{backgroundColor:"white", borderRadius:"3px"}} />
              Discover a curated collection of trendy apparel for
              all occasions.
            </div>
          </Col>

          <Col lg={3} md={6}>
            <Heading>our services</Heading>
            <div className="footer-div">
              <a href="#" className="footer-links">
                Shipping Details
              </a>
              <a href="#" className="footer-links">
                Return & Exchange Policy
              </a>
              <a href="#" className="footer-links">
                Discount craiteria
              </a>
              <a href="#" className="footer-links">
                Offers
              </a>
              <a href="#" className="footer-links"></a>
              <a href="#" className="footer-links"></a>
              <a href="#" className="footer-links"></a>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <Heading>EXPLORE US</Heading>

            <div className="footer-div">
              <a href="#" className="footer-links">
                HOME
              </a>
              <a href="#" className="footer-links">
                ABOUT
              </a>
              <a href="#" className="footer-links">
                PRODUCTS
              </a>
              <a href="#" className="footer-links">
                LOGIN
              </a>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <Heading>MORE UPDATES</Heading>

            <div className="footer-div">
              {/* <lable>NAME:</lable>
              <Form.Control className="footer-input" type="text" placeholder=" Name" /> */}

              <lable>EMAIL:</lable>
              <Form.Control className="footer-input" type="text" placeholder=" Email" />

              <Button className="my-3" variant="outline-warning">
                SUBSCRIBE
              </Button>
            </div>
          </Col>
        </Row></Container>
      </div>
      <div style={{padding:"20px 0px", textAlign:"center", background:"#000000ff", color:"white"}}>
        ©2025 All Rights reserved @ ClothCompiler
      </div>
    </>
  );
}

export default Footer;
