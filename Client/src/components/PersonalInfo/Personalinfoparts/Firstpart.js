import React from 'react'
import {Card, Form} from 'react-bootstrap'
import './firstpart.css' 

export default function Firstpart() {
    return (
            <Card className='firstPartCard border'>

                <Form.Group className='firstPartFormGroup'>
                    <Form.Label className='firstPartFormLabel' >Last Name:</Form.Label>
                    <Form.Control className='w-50'></Form.Control>
                </Form.Group>

                <Form.Group className='firstPartFormGroup'>
                    <Form.Label  className='firstPartFormLabel' >First Name:</Form.Label>
                    <Form.Control className='w-50'></Form.Control>
                </Form.Group>

                 <Form.Group className='firstPartFormGroup'>
                    <Form.Label  className='firstPartFormLabel' >English Name:</Form.Label>
                    <Form.Control className='w-50'></Form.Control>
                </Form.Group>

            </Card>
    )
}
