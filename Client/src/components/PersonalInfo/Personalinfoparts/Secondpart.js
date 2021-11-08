import React, {useRef} from 'react'
import {Card, Form} from 'react-bootstrap'
import './secondpart.css' 

export default function Secondpart(params) {

    const genderRef = useRef()
    const birthdayRef = useRef()
    const sinRef = useRef()



    return (
        <Card className='secondPartCard d-flex border' >

            <Form.Group className='secondPartFormGroupGender'>
                <Form.Label className ='secondPartFormGroupGenderLabel'>Gender:</Form.Label>
                <Form.Check className = 'secondPartFormGroupGenderCheck' name='genderselector' label='Male' type='radio' ref={genderRef} ></Form.Check>
                <Form.Check className = 'secondPartFormGroupGenderCheck' name='genderselector' label='Female' type='radio' ref={genderRef} ></Form.Check>
            </Form.Group>

            <Form.Group className='secondPartFormGroupBirth'>
                <Form.Label  className='secondPartFormGroupBirthLabel' >Date of Birth:</Form.Label>
                <Form.Control type='date' className='' ref={birthdayRef}></Form.Control>
            </Form.Group>

            <Form.Group className='secondPartFormGroupSin'>
                <Form.Label  className='secondPartFormGroupSinLabel' >SIN#:</Form.Label>
                <Form.Control className='' ref={sinRef} onClick={()=>params.personalInfoOther.setSinNum(sinRef.current.value)}></Form.Control>
            </Form.Group>

        

        </Card>
    )
}
