import React, {useRef, useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import './login.css' 
import Axios  from  'axios'

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const [loading, setLoading]=useState(false)
    



    function handleSubmit(e){
        e.preventDefault()
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)

        Axios.post('http://localhost:3001/',{
        userName: emailRef.current.value,
        passWord: passwordRef.current.value, 
        }).then((response) =>  {
            console.log(response)
        }).catch((err)=> {
            console.log(err)
        })



    }




    return (
        <div className='d-flex justify-content-center'>
            <Card className='loginContainer w-50'>
                <Card.Body> 
                    <h2 className='text-center mb-5'>Login In</h2>

                    <Form className='loginFormContainer' onSubmit = {handleSubmit}>

                        <Form.Group>
                            <Form.Label>E-Mail Address</Form.Label>
                            <Form.Control  placeholder='Enter email' ref={emailRef} required></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter password' ref={passwordRef} required></Form.Control>
                        </Form.Group> 

                        <Button type='submit' disable={loading}> Sign in! </Button>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
