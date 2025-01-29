import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Home from './Home';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function Login() {
// data come from any data source come heare or 
const [email,setEmail] = useState('');
const [password,setpassword] = useState('');
const [submission,setsubmission] =useState(false)

  const nav = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{ console.log(data);

     const logincred =   JSON.parse(localStorage.getItem("authdata"));
     console.log("this is dala check ", data, logincred)
     if(data.email == logincred.email && data.password == logincred.password){
      localStorage.setItem("user", data)
      setTimeout(() => {      
      nav("/Home");
    }, 2000);
     }
     else{
      localStorage.getItem("authdata") !== null ?
      setsubmission("invalid credentioal") : setsubmission("User not found")
     }
    
  }

useEffect(()=>{
setTimeout(() => {
  setsubmission(false);
}, 3500);
},[submission])

// const onPressLogin = () =>{
//   const param ={
//     email : email,
//     password : password
//   }
//   localStorage.setItem("user", param)
//   nav("/Home");
// }


  return (
    <>
    <Container>
      <Row>
        <Col>
        <h3 className='my-3'>LOGIN</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control placeholder="Enter email" 
                {...register("email", { required: true, pattern: {value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,message: 'Invalid email format' }},)} />
 
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder="Password" 
                {...register("password", { required:"password is required", minLength:{value : 8, message:"password length must be 8 characters"}, maxLength: 16 })}/>

      </Form.Group>
      <Button className='my-1'type='submit' variant="outline-warning">LOG IN</Button>
      &nbsp; {submission &&  <strong style={{fontSize:"16px", color:"green"}}>{submission}</strong>} 


    </form>
        
        </Col>
      </Row>

    </Container>
    
    </>
  )
}

export default Login
