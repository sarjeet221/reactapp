import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';




const data = [
  { name: 'Delivery', color: 'yellow' },
  { name: 'Conformation', color: 'blue' },
  { name: 'Payment', color: 'blue' },
  { name: 'Finish', color: 'blue' }]


  
 
  



function Payment() {

  const [color, setColor] = useState('')
  const [next1, setNext1] = useState('')

  const [key, setKey] = useState(1)
  const [colordata, setColordata] = useState('')


  useEffect(() => {
    setColordata(data)

  }, [data])

  function onclickNext() {
    console.log("next")
    setColor('yellow')
    if (key <= 3) {
      data[key].color = "yellow"
      setKey(key + 1)
    }
  }
  function onclickBack() {
    console.log("back")
    setColor('blue')
    if(key !==0 && key <= 4){
      data[key-1].color = "blue"
      setKey(key - 1)
  }
  }
















  function page1() {

    return (
      <>
       <Form>
      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          
        />
      </Form.Group>
      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          name="address"
         
        />
      </Form.Group>
      <Form.Group controlId="formCity">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter city"
          name="city"
         
        />
      </Form.Group>
      <Form.Group controlId="formPostalCode">
        <Form.Label>Postal Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter postal code"
          name="postalCode"
          
        />
      </Form.Group>
      <Button className='my-2' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
    )
  }
  function page2() {

    return (
      <Form>
      <Form.Group controlId="formConformation">
        <Form.Label>Conform Pin</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          name="address"
         
        />
      </Form.Group>
      <Button className='my-2' variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    )
  }
  function page3() {

    return (
      <Form>
      <Form.Group controlId="formCardNumber">
        <Form.Label>Card Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter card number"
          name="cardNumber"
        
        />
      </Form.Group>
      <Form.Group controlId="formExpiryDate">
        <Form.Label>Expiry Date</Form.Label>
        <Form.Control
          type="text"
          placeholder="MM/YY"
          name="expiryDate"
         
        />
      </Form.Group>
      <Form.Group controlId="formCvv">
        <Form.Label>CVV</Form.Label>
        <Form.Control
          type="text"
          placeholder="CVV"
          name="cvv"
          
        />
      </Form.Group>
      <Form.Group controlId="formName">
        <Form.Label>Name on Card</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name on card"
          name="name"
         
        />
      </Form.Group>
      <Button className='my-2' variant="primary" type="submit">
        Submit Payment
      </Button>
    </Form>
    )
  }
  function page4() {

    return (
      <Form>
      <Form.Group controlId="formFinish">
        <Form.Label>Final Finish</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          name="address"
         
        />
      </Form.Group>
      <Button className='my-2' variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    )
  }





  return (
    <>
      <Container>
        <Row>


          {
            colordata && colordata.map(d => (

              <Col>

                <div style={{ width: '100%', backgroundColor: d.color, height: 10 }} ></div>
                <h3 style={{ color: d.color }}>{d.name}</h3>

              </Col>

            ))
          }






        </Row>


        <Row>

          <Col>
            {key == 1 ? page1() : key == 2 ? page2() : key == 3 ? page3() : key == 4 ? page4():"" } 

          </Col>

          <Button variant="success" onClick={onclickBack} >BACK</Button>
          <Button className='my-2' variant="success" onClick={onclickNext} > {key ==4 ?"FINISH": "NEXT"}</Button>
        </Row>





      </Container>
    </>

  )
}


export default Payment