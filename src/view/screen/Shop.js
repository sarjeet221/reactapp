import React, { useEffect, useState } from 'react'
// import { Container } from 'react-bootstrap'
// import { shop } from '../data/Data'
import { products, shop } from '../data/Data'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function Shop() {
  const [product, setProduct] = useState('');
  useEffect(()=>{
    setProduct(shop);
  })

const nav=useNavigate()

  return (
    <>
    <Container>
    <div className='d-flex align-items-center'>
              <strong style={{ backgroundColor: "black", height: "1px", width:"-webkit-fill-available" }}></strong>
              <h1 className="m-4  chakra-petch-semibold-italic maincolor" style={{width:"-webkit-fill-available"}}>OUR&nbsp;PRODUCTS</h1>
              <strong style={{ backgroundColor: "black", height: "1px",width:"-webkit-fill-available"  }}></strong>
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <p style={{backgroundColor:"black",height:"1px",width:"50px",textAlign:"center",display:"block"}}></p>

            </div>
    <Row className='my-2'>
          <Col>
            <Row  >
              {products.map(d =>(
                <Col className='card-box' onClick={()=>nav('/Detail', {state : d})}>
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
    </Container>
    
    </>
  )
}

export default Shop
