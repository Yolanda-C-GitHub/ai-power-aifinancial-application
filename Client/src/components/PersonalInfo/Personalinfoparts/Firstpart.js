import React, {useRef} from 'react'
import {Card, Form} from 'react-bootstrap'
import './firstpart.css' 

export default function Firstpart(params) {

    const lastNameRef = useRef()
    const firstNameRef = useRef()
    const englishNameRef = useRef()
    
    return (

            <Card className='firstPartCard border'>

                <Form.Group className='firstPartFormGroup'>
                    <Form.Label className='firstPartFormLabel' >Last Name:</Form.Label>
                    <Form.Control className='w-50' ref= {lastNameRef} onChange ={()=>params.personalInfoNames.setLastName(lastNameRef.current.value)}></Form.Control>
                </Form.Group>

                <Form.Group className='firstPartFormGroup'>
                    <Form.Label  className='firstPartFormLabel'>First Name:</Form.Label>
                    <Form.Control className='w-50'  ref={firstNameRef} onChange={()=>params.personalInfoNames.setFirstName(firstNameRef.current.value)} ></Form.Control>
                </Form.Group>

                 <Form.Group className='firstPartFormGroup'>
                    <Form.Label  className='firstPartFormLabel' >English Name:</Form.Label>
                    <Form.Control className='w-50' ref={englishNameRef} onChange={()=>params.personalInfoNames.setEnglishName(englishNameRef.current.value)} ></Form.Control>
                </Form.Group>

            </Card>
            
    )
}
