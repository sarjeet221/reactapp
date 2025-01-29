import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../component/newcom/heading.css";
import logo from '../image/logosvg.svg'
import { Link } from "react-router-dom";


function Heading({ children }) {
  return <h3 className="footer-heading">{children}</h3>;
}

function Footer() {
const [issubscribed,setissubscribed] = useState(false);

const handleSubmit = (event) => {
  event.preventDefault();
  setissubscribed(true);
  setTimeout(() => {
    setissubscribed(false)
  }, 2000);

}
  return (
    <>
      <div className="mt-5 footer-style">
        <Container>        
        <Row className="gap-3 gap-md-0">
          <Col lg={3} md={6} >
            <Heading>ABOUT</Heading>

            <div className="footer-div w-75 pt-2">
            <img src={logo} height={50} style={{backgroundColor:"white", borderRadius:"3px"}} />
              Discover a curated collection of trendy apparel for
              all occasions.
            </div>
          </Col>

          <Col lg={3} md={6}>
            <Heading>our services</Heading>
            <div className="footer-div">
              <Link to="#" className="footer-links">
                Shipping Details
              </Link>
              <Link to="#" className="footer-links">
                Return & Exchange Policy
              </Link>
              <Link to="#" className="footer-links">
                Discount craiteria
              </Link>
              <Link to="#" className="footer-links">
                Offers
              </Link>
             
            </div>
          </Col>
          <Col lg={3} md={6}>
            <Heading>EXPLORE US</Heading>

            <div className="footer-div">
              <Link to="/" className="footer-links">
                Home
              </Link>
              <Link to="/about" className="footer-links">
                Abot
              </Link>
              <Link to="/shop" className="footer-links">
                Shop
              </Link>
              
            </div>
          </Col>

          <Col lg={3} md={6}>
            <Heading>MORE UPDATES</Heading>

            <div className="footer-div">
              {/* <lable>NAME:</lable>
              <Form.Control className="footer-input" type="text" placeholder=" Name" /> */}
<form onSubmit={handleSubmit }>


              <lable>EMAIL:</lable>
              <Form.Control className="footer-input" type="email" required  placeholder=" Email" />

              <Button className="my-3" variant="outline-warning" type="submit" >
                SUBSCRIBE
              </Button></form>
              {issubscribed &&
              <div className="fs-6 text-secondary text-center">
                Subscription Added
              </div> }

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
