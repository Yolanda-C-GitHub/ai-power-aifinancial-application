import React, {useState, useRef} from 'react'
import {Card, Form} from 'react-bootstrap'
import './secondpart.css' 

export default function Secondpart() {



    return (
        <Card className='secondPartCard d-flex border' >
            <Form.Group className='secondPartFormGroupGender'>
                <Form.Label className ='secondPartFormGroupGenderLabel'>Gender:</Form.Label>
                <Form.Check className = 'secondPartFormGroupGenderCheck' name='genderselector' label='Male' type='radio'></Form.Check>
                <Form.Check className = 'secondPartFormGroupGenderCheck' name='genderselector' label='Female' type='radio'></Form.Check>
            </Form.Group>

            <Form.Group className='secondPartFormGroupBirth'>
                <Form.Label  className='secondPartFormGroupBirthLabel' >Date of Birth:</Form.Label>
                <Form.Control type='date' className=''></Form.Control>
            </Form.Group>


            <Form.Group className='secondPartFormGroupSin'>
                <Form.Label  className='secondPartFormGroupSinLabel' >SIN#:</Form.Label>
                <Form.Control className=''></Form.Control>
            </Form.Group>

            


        </Card>
    )
}
