import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { bestseller, shop, products } from '../data/Data';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
import { addtocart } from '../data/Data';
import { useNavigate } from 'react-router-dom';


function Detail() {
    const nav = useNavigate()
    const [img, setImg] = useState("");
    const loc = useLocation();
    const [productDetails, setproductDetails] = useState('');


    useEffect(() => {
        console.log(loc.state);
        setproductDetails(loc.state)
    }
    )

    function ImageChange(img) {
        setImg(img)
    }

    function OnAddtocart() {
        console.log('buttion clil');
        addtocart.push(productDetails)
        nav("/Addtocart", { state: productDetails })
    }


    return (

        <>
            <Container>
                <Row xs={1} md={2} className='mt-4'>
                    <Col md={6} xs={12}>

                        <Row sm={2}>

                            <Col xs={2} sm={2} className='d-grid'>
                                {
                                    productDetails && productDetails.sideimage.map(img => (

                                        <Image src={img} onClick={() => ImageChange(img)} width='100%' style={{ cursor: "pointer", marginRight: "5px", }} />

                                    ))
                                }
                            </Col>

                            <Col xs={10} sm={10}>
                                <Image src={img ? img : productDetails.image} width='100%' className='rounded' />

                            </Col>
                        </Row>

                    </Col>
                    <Col lg={0}>
                        <Row>
                            <Col>
                                <h5 className='my-2'>{productDetails.name}</h5>
                                <strong className='my-2'>₹ &nbsp; {productDetails.rate} /-</strong>
                            </Col>
                        </Row>
                        <Row className='my-2'>
                            <Col>


                                <span >
                                    <span class="material-symbols-outlined">star_rate</span>
                                    <span class="material-symbols-outlined">star_rate</span>
                                    <span class="material-symbols-outlined">star_rate</span>
                                    <span class="material-symbols-outlined">star_rate</span>
                                    <span class="material-symbols-outlined">star_rate</span>
                                </span>
                                <p className='mb-1'> <strong>{productDetails.ratinguser}</strong>&nbsp;reviews</p>



                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>size :</p>
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

                                <p className='my-2'>color :</p>

                                <Row className='my-2'>
                                    <Col className='d-flex'>
                                        {
                                            productDetails && productDetails.color.map(c => (
                                                <div className='me-2'>
                                                {/* <p style={{ height: "30px", width: "30px", backgroundColor: `${c}`, display: "inline-block", margin: "5px", border: "1px solid", borderRadius: "5px" }}></p> */}
                                                    <button style={{ backgroundColor: `${c}`, height: "30px", width: "30px", margin: "5px", border: "1px solid", borderRadius: "5px" }}></button>
                                                    <p style={{textAlign:"center"}}>{c}</p>
                                                </div>
                                            ))

                                        }
                                    </Col>
                                </Row>
                                <Row className='my-2'>
                                    <Button className='my-1' variant="success" onClick={() => OnAddtocart()}>ADD TO CART</Button>{' '}
                                    <Button className='my-1' variant="success">BUY NOW</Button>{' '}
                                </Row>

                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row className='my-2'>
                    <Col>
                        <div className='d-flex align-items-center'>
                            <strong style={{ backgroundColor: "black", height: "1px", width: "-webkit-fill-available" }}></strong>
                            <h1 className="m-4  chakra-petch-semibold-italic maincolor" style={{ width: "-webkit-fill-available" }}>BEST&nbsp;SELLER</h1>
                            <strong style={{ backgroundColor: "black", height: "1px", width: "-webkit-fill-available" }}></strong>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <p style={{ backgroundColor: "black", height: "1px", width: "50px", textAlign: "center", display: "block" }}></p>

                        </div>                        <Row  >
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
                                                <Button variant="outline-dark"  >ADD TO CART</Button>
                                                <Button variant="outline-dark">BUY NOW</Button>

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
            </Container >


        </>
    )
}

export default Detail
