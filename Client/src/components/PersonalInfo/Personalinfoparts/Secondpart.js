import React, {useRef} from 'react'
import {Card, Form} from 'react-bootstrap'
import './secondpart.css' 

export default function Secondpart(params) {

    const genderFemaleRef = useRef()
    const genderMaleRef=useRef();
    const birthdayRef = useRef()
    const sinRef = useRef()



    return (
        <Card className='secondPartCard d-flex border' >

            <Form.Group className='secondPartFormGroupGender'>
                <Form.Label className ='secondPartFormGroupGenderLabel'>Gender:</Form.Label>
                <Form.Check className = 'secondPartFormGroupGenderCheck' name='genderselector' label='Male' type='radio' 
                    ref={genderMaleRef} 
                    value="Male"  
                    onChange={() => params.personalInfoOther.setGender(genderMaleRef.current.value)}
                    ></Form.Check>

                <Form.Check inline className = 'secondPartFormGroupGenderCheck' name='genderselector' label='Female' type='radio' 
                    ref={genderFemaleRef} 
                    value="Female" 
                    checked={params.personalInfoOther.gender === "Female"} 
                    onChange={()=>params.personalInfoOther.setGender(genderFemaleRef.current.value)}
                    ></Form.Check>
            </Form.Group>

            <Form.Group className='secondPartFormGroupBirth'>
                <Form.Label  className='secondPartFormGroupBirthLabel' >Date of Birth:</Form.Label>
                <Form.Control type='date' className='' ref={birthdayRef} onChange={()=>params.personalInfoOther.setBirthday(birthdayRef.current.value)} ></Form.Control>
            </Form.Group>

            <Form.Group className='secondPartFormGroupSin'>
                <Form.Label  className='secondPartFormGroupSinLabel' >SIN#:</Form.Label>
                <Form.Control className='' ref={sinRef} onChange={()=>params.personalInfoOther.setSinNum(sinRef.current.value)}></Form.Control>
            </Form.Group>

        

        </Card>
    )
}
