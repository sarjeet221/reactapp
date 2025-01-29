import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function Register() {
  const nav = useNavigate()
const [submission,setsubmission] =useState(false)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{ console.log(data);
    localStorage.setItem("authdata", JSON.stringify(data));
    setsubmission(true);
    setTimeout(() => {      
      nav("/login");
    }, 2000);
  }


  return (
    <>
    <Container>
      <Row>
        <Col>
        <h3 className='my-3'>SIGNUP</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label> &nbsp; {errors.email &&  <span style={{fontSize:"12px", color:"red"}}>{String(errors.email.message)}</span>} 
        <Form.Control type="email" placeholder="Enter email" 
        {...register("email", { required: true, pattern: {value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,message: 'Invalid email format' }},)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label> &nbsp; {errors.name &&  <span style={{fontSize:"12px", color:"red"}}>{String(errors.name.message)}</span>} 
        <Form.Control type="text" placeholder="Enter name" {...register("name", { required: "name is required" })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label> &nbsp; {errors.password &&  <span style={{fontSize:"12px", color:"red"}}>{String(errors.password.message)}</span>} 
        <Form.Control type="password" placeholder="Password" 
        {...register("password", { required:"password is required", minLength:{value : 8, message:"password length must be 8 characters"}, maxLength: 16 })}/>
      </Form.Group>
      <Button className='my-1' variant="outline-warning" type='submit' >SIGN UP</Button> 
      &nbsp; {submission &&  <strong style={{fontSize:"16px", color:"green"}}>Ragistration successfull</strong>} 
    </form>
        
        </Col>
      </Row>



    </Container>
    
    
    
    </>
  )
}

export default Register
