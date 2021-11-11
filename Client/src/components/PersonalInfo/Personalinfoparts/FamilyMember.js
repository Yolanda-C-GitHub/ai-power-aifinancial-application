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
                    <Form.Control type='date' placeholder ='Date of Birth' />
                </FloatingLabel>
            </Form.Group>

<<<<<<< Updated upstream
 
            <Form.Group>


            </Form.Group>
 
=======

            <Form.Group  className='formGroupChildInfo'>
                <FloatingLabel label='Child 1'>
                    <Form.Control placeholder ='Child 1'/>
                </FloatingLabel>

                <FloatingLabel label='Date of Birth'>
                    <Form.Control type='date' placeholder ='Date of Birth'  />
                </FloatingLabel>

                <FloatingLabel label='Child 2'>
                    <Form.Control placeholder ='Child 2' className = "name"/>
                </FloatingLabel>

                <FloatingLabel label='Date of Birth'>
                    <Form.Control type='date' placeholder ='Date of Birth' />
                </FloatingLabel>

                <FloatingLabel label='Child 3'>
                    <Form.Control placeholder ='Child 3' className = "name"/>
                </FloatingLabel>

                <FloatingLabel label='Date of Birth'>
                    <Form.Control type='date' placeholder ='Date of Birth' />
                </FloatingLabel>

                <FloatingLabel label='Child 4'>
                    <Form.Control placeholder ='Child 4' className = "name"/>
                </FloatingLabel>

                <FloatingLabel label='Date of Birth'>
                    <Form.Control type='date' placeholder ='Date of Birth' />
                </FloatingLabel>
            </Form.Group>
            



>>>>>>> Stashed changes

        </Card>
    )
}

