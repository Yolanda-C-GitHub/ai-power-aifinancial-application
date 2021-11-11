import React,{useRef} from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './familymember.css'

export default function FamilyMember(params) {




    return (
        <Card className='familyMemberCard'>
            <h3 className='familyInfoLabel' >Family Info</h3>

            <Form.Group className='formGroupSpouseInfo'>
                <FloatingLabel label='Spouse First Name'>
                    <Form.Control placeholder ='First Name' />
                </FloatingLabel>

                <FloatingLabel label='Spouse Last Name'>
                    <Form.Control placeholder ='Last Name' />
                </FloatingLabel>

                <FloatingLabel label='Date of Birth'>
                    <Form.Control type='date' placeholder ='Date if Birth' />
                </FloatingLabel>
            </Form.Group>


            <Form.Group>
                
            </Form.Group>
        </Card>
    )
}
