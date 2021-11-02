import React from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import './login.css' 

export default function Login() {
    return (
        <div className='d-flex justify-content-center'>
            <Card className='loginContainer w-50'>
                <Card.Body> 
                    <h2 className='text-center mb-5'>Login In</h2>

                    <Form className='loginFormContainer'>

                        <Form.Group>
                            <Form.Label>E-Mail Address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' required></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter password' required></Form.Control>
                        </Form.Group> 

                        <Button type='submit'> Sign in! </Button>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
