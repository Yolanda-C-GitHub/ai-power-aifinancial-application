import React,{useRef} from 'react'
import {Card, Form, FloatingLabel, InputGroup} from 'react-bootstrap'
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
                
                <InputGroup className='inputGroupChild1'>
                    <FloatingLabel label='Child 1'>
                        <Form.Control className='child1' placeholder ='Child 1'/>
                    </FloatingLabel>
                    <FloatingLabel label='Date of Birth'>
                        <Form.Control type='date' placeholder ='Date of Birth'  />
                    </FloatingLabel>
                </InputGroup>

            </Form.Group>

    
            <Form.Group  className='formGroupChildInfo'>

                <InputGroup className='otherChildInputGroup'>
                    <FloatingLabel label='Child 2'>
                        <Form.Control placeholder='Child 2' className = "otherChildName"/>
                    </FloatingLabel>
                    <FloatingLabel label='Date of Birth'>
                        <Form.Control type='date' placeholder ='Date of Birth' />
                    </FloatingLabel>
                </InputGroup>

                <InputGroup className='otherChildInputGroup'>
                    <FloatingLabel label='Child 3'>
                        <Form.Control placeholder ='Child 3' className ="otherChildName" />
                    </FloatingLabel>
                    <FloatingLabel label='Date of Birth'>
                        <Form.Control type='date' placeholder ='Date of Birth' />
                    </FloatingLabel>
                </InputGroup>

                <InputGroup className='otherChildInputGroup'>
                    <FloatingLabel label='Child 4'>
                        <Form.Control placeholder ='Child 4' className = "otherChildName"/>
                    </FloatingLabel>
                    <FloatingLabel label='Date of Birth'>
                        <Form.Control type='date' placeholder ='Date of Birth' />
                    </FloatingLabel>
                </InputGroup>


            </Form.Group>
            




        </Card>
    )
}

