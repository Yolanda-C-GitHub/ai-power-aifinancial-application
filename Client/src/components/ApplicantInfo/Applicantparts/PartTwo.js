import React, {useRef} from 'react'
import {Card, Form, FloatingLabel, Placeholder} from 'react-bootstrap'
import './parttwo.css' 

export default function Secondpart(params) {

    const genderFemaleRef = useRef()
    const genderMaleRef=useRef();
    const birthdayRef = useRef()
    // const sinRef = useRef()
    const placeOfBirthRef =useRef()



    return (
        <Card className='secondPartCard d-flex border' >

            <Form.Group className='secondPartFormGroupGender'>
                <Form.Label className ='secondPartFormGroupGenderLabel'>Gender:</Form.Label>
                <Form.Check className = 'secondPartFormGroupGenderCheck' name='genderselector' label='Male' type='radio' 
                    ref={genderMaleRef} 
                    value="Male"  
                    onChange={() => params.personalInfoOther.setGender(genderMaleRef.current.value)}
                >
                </Form.Check>

                <Form.Check inline className = 'secondPartFormGroupGenderCheck' name='genderselector' label='Female' type='radio' 
                    ref={genderFemaleRef} 
                    value="Female" 
                    checked={params.personalInfoOther.gender === "Female"} 
                    onChange={()=>params.personalInfoOther.setGender(genderFemaleRef.current.value)}
                >
                </Form.Check>
            </Form.Group>

         
                <FloatingLabel  className='secondPartFormGroupBirthLabel' label='Date of Birth' >
                <Form.Control type='date' className='' ref={birthdayRef} onChange={()=>params.personalInfoOther.setBirthday(birthdayRef.current.value)} ></Form.Control>
                </FloatingLabel>

            <Form.Group className='secondPartFormGroupPOB'>
                <FloatingLabel label='Place Of Birth'>
                    <Form.Control placeholder='Place of birth' ref={placeOfBirthRef} onChange={()=>params.personalInfoOther.setPOB(placeOfBirthRef.current.value)}></Form.Control>
                </FloatingLabel>
            </Form.Group>

            
 

        </Card>
    )
}