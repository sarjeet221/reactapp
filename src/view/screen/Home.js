import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { products } from '../data/Data'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';

function Home() {
  return (
    <>
      <Container>
        <Row >

          <Col>
            <Carousel>
              <Carousel.Item>
                <Image src={require('../image/Grey Brown Minimalist Summer season collections Banner Landscape.jpg')} width='100%' />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <Image src={require('../image/Black and Neon Green Bold Sporty Outfit Banner.jpg')} width='100%' />

                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <Image src={require('../image/Black White Bold Fashion Product Promotion Landscape Banner.jpg')} width='100%' />

                {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>

          </Col>

        </Row>


        <Row className='my-2'>
          <Col>

            <div className='d-flex align-items-center'>
              <strong style={{ backgroundColor: "black", height: "1px", width:"-webkit-fill-available" }}></strong>
              <h1 className="m-4  chakra-petch-semibold-italic maincolor" style={{width:"-webkit-fill-available"}}>OUR&nbsp;PRODUCTS</h1>
              <strong style={{ backgroundColor: "black", height: "1px",width:"-webkit-fill-available"  }}></strong>
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <p style={{backgroundColor:"black",height:"1px",width:"50px",textAlign:"center",display:"block"}}></p>
            <p className='my-1'>Must Have Item</p>

            </div>

            <Row className='mt-4' >
              {products.map(d => (
                <Col className='card-box'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={d.image} />
                    <Card.Body>
                      <Card.Title>{d.name}</Card.Title>
                      <Card.Text>
                        {d.info}
                      </Card.Text>
                      <div className='d-flex justify-content-between'>
                        <Button variant="outline-dark">ADD TO CART</Button>   <Button variant="outline-dark">BUY NOW</Button>

                      </div>

                    </Card.Body>
                  </Card>
                </Col>

              ))
              }
            </Row>
          </Col>

        </Row>
        <Row>
          <Col>
            <Image src={require('../image/Brown Beige Simple Aesthetic Fashion Banner.jpg')} fluid />
          </Col>

        </Row>

        <Row className='mt-4'>
          <Col xs={6} md={4}>
            <Image src={require('../image/Black and White Modern Clothing Store Logo.jpg')} rounded width='100%' />
          </Col>
          <Col xs={6} md={4}>
            <Image src={require('../image/1rt.jpg')} roundedCircle width='100%' />
          </Col>
          <Col xs={6} md={4}>
            <Image src={require('../image/2.jpg')} roundedCircle width='100%' />
          </Col>
        </Row>




      </Container>





    </>
  )
}

export default Home
