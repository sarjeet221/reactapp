import React, { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Payment from './Payment';


function AddToCart() {

    const nav = useNavigate()
    const [productDetails, setProductdetails] = useState('')
    const [qty, setQty] = useState(1)
    const [rate, setRate] = useState('')
    const [totalrate, setTotyalrate] = useState()


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
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    // function Totalrate() {
    //     setTotyalrate(qty * rate)
    // }



    function PaymentGet() {
        if (localStorage.getItem("user") !== null) {
            nav('/Payment')
        }
        else {
            nav('/Login')
        }
    }



    return (
        <>
            <Container>

                <div className='d-flex align-items-center my-2'>
                    <strong style={{ backgroundColor: "black", height: "1px", width: "-webkit-fill-available" }}></strong>
                    <h1 className="m-4  chakra-petch-semibold-italic maincolor" style={{ width: "-webkit-fill-available" }}>Shopping&nbsp;Cart</h1>
                    <strong style={{ backgroundColor: "black", height: "1px", width: "-webkit-fill-available" }}></strong>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                </div>
                <Row>
                    <Col lg={8} sm={12} style={{backgroundColor:"#fbfbfbcc"}} className='me-5 py-2 rounded'>
                        <Row xs={2} >
                            <Col sm={4} >
                                <Image src={productDetails.image} width="100%" className='rounded'/>
                            </Col>
                            <Col sm={4}>
                                <Row><h4>{productDetails.name}</h4>
                                    <div><strong>₹ {productDetails.rate}</strong></div>


                                    <div className='d-flex align-center my-2'>

                                        <Button variant="outline-success" onClick={QtySub}>-</Button>{' '}
                                        <strong style={{ fontSize: 'x-large' }}> &nbsp; {qty} &nbsp;</strong>
                                        <Button variant="outline-success" onClick={QtyAdd}>+</Button>{' '}
                                    </div>
                                    <h6>Color:<strong>red</strong> </h6>


                                </Row>

                            </Col >
                            <Col sm={4} xs={12}style={{ textAlign: "right" }}>
                                <span style={{ backgroundColor: "red", borderRadius: "5px", width: "auto", color: "white" }}>&nbsp; 50% off &nbsp;</span>
                                <div><strong>₹ {totalrate}</strong></div>
                                <div>MRP. <s>{totalrate}</s></div>


                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3} sm style={{ textAlign: "right", backgroundColor:"#fbfbfbcc", float:'right',borderRadius:'5px' }}>
                        <p>Shipping Charges :<strong className='chargesp'>{ 0} &nbsp; /-</strong></p>
                        <p>GST :<strong className='chargesp'>{0 } &nbsp; /-</strong></p>
                        <p>Discount :<strong className='chargesp'>{0 } &nbsp; /-</strong></p>
                        <p>SubTotal Rs :<strong className='chargesp'> {productDetails.rate * qty} &nbsp; /-</strong></p>
                        <Button className='my-1' variant="success" onClick={PaymentGet}>BUY NOW</Button>{' '}


                    </Col>
                </Row>



            </Container>
        </>

    )
}

export default AddToCart
