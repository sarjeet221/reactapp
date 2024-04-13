import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Home from './Home';


function Login() {
// data come from any data source come heare or 
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const isEmail = (event) =>{
  setEmail(event.target.value)
}
const isPassword = (event) =>{
  setPassword(event.target.value)
}

const onPressLogin = () =>{
  const param ={
    email : email,
    password : password
  }

  console.log(param)
  setEmail('')
  setPassword('')
  localStorage.setItem("user", param)
  window.location = '/Home'
}






  return (
    <>
    <Container>
      <Row>
        <Col>
        <h3 className='my-3'>LOGIN</h3>

        <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={isEmail} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={isPassword} placeholder="Password" />
      </Form.Group>
      <Button className='my-1'type='button' variant="outline-warning" onClick={onPressLogin}>LOG IN</Button>{' '}

    </Form>
        
        </Col>
      </Row>

    </Container>
    
    </>
  )
}

export default Login
