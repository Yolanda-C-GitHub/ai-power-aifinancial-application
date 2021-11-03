import React, {useRef} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import './login.css' 

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()

    function handleSubmit(e){
        e.preventDefault()
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }


    return (
        <div className='d-flex justify-content-center'>
            <Card className='loginContainer w-50'>
                <Card.Body> 
                    <h2 className='text-center mb-5'>Login In</h2>

                    <Form className='loginFormContainer' onSubmit = {handleSubmit}>

                        <Form.Group>
                            <Form.Label>E-Mail Address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' ref={emailRef} required></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter password' ref={passwordRef} required></Form.Control>
                        </Form.Group> 

                        <Button type='submit'> Sign in! </Button>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
