import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { bestseller, shop, products } from '../data/Data';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';



function Detail() {

    const loc = useLocation();
    const [productDetails, setproductDetails] = useState('');
    useEffect(() => {
        console.log(loc.state);
        setproductDetails(loc.state)
    }
    )


    return (

        <>
            <Container>
                <Row>
                    <Col lg={0} sm={6}>
                        <Image src={productDetails.image} width='100%' />
                        <Row>
                            <Col className='d-flex justify-content-between mt-2'>
                            {
                                productDetails && productDetails.sideimage.map(img =>(

                                    <Image src={img} width='10%'/>

                                ))
                            }
                            </Col>
                        </Row>

                    </Col>
                    <Col lg={0}>
                        <Row>
                            <Col>
                                <strong className='my-2'>{productDetails.name}</strong><br />
                                <strong className='my-2'>{productDetails.rate}</strong></Col>
                        </Row>
                        <Row>
                            <Col>


                                <span>{productDetails.ratinguser} zreviews</span>


                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>size</p>
                                <Row>

                                    <Col>
                                        {
                                            productDetails && productDetails.size.map(d => (
                                                <> <Button variant="outline-success">{d}</Button>{' '}</>

                                            ))
                                        }
                                    </Col>


                                </Row>
                                <Row className='mt-3'>
                                    <Col>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Size chart</Accordion.Header>
                                                <Accordion.Body>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Size</th>
                                                                <th>US</th>
                                                                <th>UK</th>
                                                                <th>EU</th>
                                                                <th>AU</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Small</td>
                                                                <td>4</td>
                                                                <td>8</td>
                                                                <td>36</td>
                                                                <td>8</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Medium</td>
                                                                <td>6</td>
                                                                <td>10</td>
                                                                <td>38</td>
                                                                <td>10</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Large</td>
                                                                <td>8</td>
                                                                <td>12</td>
                                                                <td>40</td>
                                                                <td>12</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Extra Large</td>
                                                                <td>10</td>
                                                                <td>14</td>
                                                                <td>42</td>
                                                                <td>14</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </Accordion.Body>
                                            </Accordion.Item>

                                        </Accordion>
                                    </Col>
                                </Row>

                                <p className='my-2'>color</p>

                                <Row className='my-2'>
                                    <Col>
                                        {
                                            productDetails && productDetails.color.map(c => (
                                                // <p style={{height:"30px",width:"30px",backgroundColor:`${c}`,display:"inline-block",margin:"5px",border:"1px solid",borderRadius:"5px"}}></p>    
                                                <button style={{ backgroundColor: `${c}`, height: "30px", width: "30px", margin: "5px", border: "1px solid", borderRadius: "5px" }}></button>

                                            ))

                                        }
                                    </Col>
                                </Row>
                                <Row className='my-2'>
                                    <Button className='my-1' variant="success">ADD TO CART</Button>{' '}
                                    <Button className='my-1' variant="success">BUY NOW</Button>{' '}
                                </Row>

                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row className='my-2'>
                    <Col>
                        <h1 className="my-4 chakra-petch-semibold-italic maincolor">BEST SELLER</h1>
                        <Row  >
                            {bestseller.map(value => (
                                <Col className='card-box'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={value.image} />
                                        <Card.Body>
                                            <Card.Title>{value.name}</Card.Title>
                                            <Card.Text>
                                                {/* {d.info} */}
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
                <Row className='mt-4'>
                    <Col>
                        <Image src={require('../image/Black and Neon Green Bold Sporty Outfit Banner.jpg')} fluid />
                    </Col>

                </Row>
            </Container>


        </>
    )
}

export default Detail
