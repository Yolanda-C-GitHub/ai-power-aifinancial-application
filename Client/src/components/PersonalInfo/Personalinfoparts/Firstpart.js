import React, {useRef} from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './firstpart.css' 

export default function Firstpart(params) {

    const lastNameRef = useRef()
    const firstNameRef = useRef()
    const englishNameRef = useRef()

    const genderFemaleRef = useRef()
    const genderMaleRef=useRef();
    const birthdayRef = useRef()
    const sinRef = useRef()

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
         
                <FloatingLabel  className='firstPartFormGroup' label='Date of Birth' >
                    <Form.Control type='date' className='' ref={birthdayRef} onChange={()=>params.personalInfoNames.setBirthday(birthdayRef.current.value)} ></Form.Control>
                </FloatingLabel>

                <Form.Group className='firstPartFormGroup'>
                    <FloatingLabel label='SIN#'>
                        <Form.Control placeholder='SIN#' ref={sinRef} onChange={()=>params.personalInfoNames.setSinNum(sinRef.current.value)}></Form.Control>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className='firstPartFormGroup'>
                    <Form.Label className ='firstPartGenderLabel'>Gender:</Form.Label>
                    <div className='firstPartGenderBox' >
                        <Form.Check className ='' name='genderselector' label='Male' type='radio' 
                            ref={genderMaleRef} 
                            value="Male"  
                            onChange={() => params.personalInfoNames.setGender(genderMaleRef.current.value)}
                        >
                        </Form.Check>

                        <Form.Check inline className = '' name='genderselector' label='Female' type='radio' 
                            ref={genderFemaleRef} 
                            value="Female" 
                            checked={params.personalInfoNames.gender === "Female"} 
                            onChange={()=>params.personalInfoNames.setGender(genderFemaleRef.current.value)}
                        >
                        </Form.Check>
                    </div>

                </Form.Group>






            </Card>
            
    )
}
