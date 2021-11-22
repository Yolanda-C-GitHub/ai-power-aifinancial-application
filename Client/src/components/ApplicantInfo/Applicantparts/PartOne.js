import React, {useRef} from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './partone.css' 

export default function Firstpart(params) {

    const lastNameRef = useRef()
    const firstNameRef = useRef()
    const englishNameRef = useRef()
    
    return (

            <Card className='firstPartCard border'>

                <Form.Group className='firstPartFormGroup'>
                    <FloatingLabel label='First Name'>
                        <Form.Control placeholder='First Name' ref= {lastNameRef} onChange ={()=>params.personalInfoNames.setLastName(lastNameRef.current.value)}></Form.Control>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className='firstPartFormGroup'>
                    <FloatingLabel label='Last Name'>
                        <Form.Control placeholder='Last Name' ref={firstNameRef} onChange={()=>params.personalInfoNames.setFirstName(firstNameRef.current.value)} ></Form.Control>
                    </FloatingLabel>
                </Form.Group>

                 <Form.Group className='firstPartFormGroup'>
                    <FloatingLabel label='English Name'>
                        <Form.Control placeholder='English Name' ref={englishNameRef} onChange={()=>params.personalInfoNames.setEnglishName(englishNameRef.current.value)} ></Form.Control>
                    </FloatingLabel>
                </Form.Group>

            </Card>
            
    )
}