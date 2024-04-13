import React from 'react'
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Register() {
  return (
    <>
    <Container>
      <Row>
        <Col>
        <h3 className='my-3'>SIGNUP</h3>

        <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button className='my-1' variant="outline-warning">SIGN UP</Button>{' '}

    </Form>
        
        </Col>
      </Row>



    </Container>
    
    
    
    </>
  )
}

export default Register
