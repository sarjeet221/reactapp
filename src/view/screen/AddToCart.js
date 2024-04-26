import React, { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Payment from './Payment';


function AddToCart() {

    const nav = useNavigate()
    const [qty, setQty] = useState(1)
    const [rate, setRate] = useState('')
    const [totalrate, setTotyalrate] = useState('')
    const [productDetails, setProductdetails] = useState('')


    const loc = useLocation()
    console.log(loc.state);

    useEffect(() => {
        setProductdetails(loc.state)
        setTotyalrate(qty * productDetails.rate)
    }, [qty])

    console.log(productDetails)
    function QtyAdd() {
        setQty(qty + 1)
    }

    function QtySub() {
        setQty(qty - 1)
    }

    function Totalrate() {
        setTotyalrate(qty * rate)
    }


    
  function PaymentGet(){
    if(localStorage.getItem("user") !== null){
    nav('/Payment')
    }
    else{
      nav('/Login')
    }
  }



    return (
        <>
            <Container>
                <Row>
                    <Col> <Image src={productDetails.image} height='40%' />
                    </Col>
                    <Col>
                        <Row>
                        <p>{productDetails.rate}</p>
                        <Col className='d-flex align-center'>

                            <Button variant="outline-success" onClick={QtySub}>-</Button>{' '} 
                           <strong style={{fontSize:'x-large'}}> &nbsp; {qty} &nbsp;</strong>  
                            <Button variant="outline-success" onClick={QtyAdd}>+</Button>{' '}
                        </Col>

                        <Col>
                            {totalrate}

                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <p>Estimated total Rs. {productDetails.rate*qty} /-</p>
                            <p>Taxes, discounts and shipping calculated at checkout</p>
                            <Button className='my-1' variant="success" onClick={PaymentGet}>BUY NOW</Button>{' '}


                        </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default AddToCart
