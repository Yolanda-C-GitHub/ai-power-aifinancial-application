import React, {useRef, useState} from 'react';
import {Card, Form, FloatingLabel, Button} from 'react-bootstrap';
import './firstpart.css';
import moment from 'moment'







export default function Firstpart(params) {  

    // ref for inputs
    const lastNameRef = useRef()
    const firstNameRef = useRef()
    const englishNameRef = useRef()
    const genderFemaleRef = useRef()
    const genderMaleRef=useRef();
    const birthdayRef = useRef()
    const sinRef = useRef()
    const emailRef = useRef();
    const cellNumRef=useRef();
    const homeNumRef=useRef();
    const workNumRef=useRef();
    const livingStatusRef = useRef();
    const maritalStatusRef = useRef();
    const citizenshipRef = useRef();
    const taxStatusRef = useRef();
    const previousDeclaredRef = useRef();
    const dischargeDateRef=useRef('');


    const firstNameFeedback=useRef('')
    const birthdayFeedback=useRef('')

    const [gender, setGender]=useState()
    

    // toggle discharge dates base on discharge input
    const [showDischarge, setShowDischarge]=useState(false);
    function toggleShowDischarge(){
        if(params.personalInfoNames.declared==='No'){
            setShowDischarge(true)
            params.personalInfoNames.setDeclared('Yes')
          
        } else if(params.personalInfoNames.declared==='Yes'){
            setShowDischarge(false)
            params.personalInfoNames.setDischargeDate('')
            params.personalInfoNames.setDeclared('No')
        }
    }






    return (
        <div className='personalInfoForm'>
                <Card className='firstPartCard'>

                    <Form.Group className='firstPartFormGroup' controlId="validationCustom01">
                        <FloatingLabel label='First Name*'>
                            <Form.Control required
                                type='text' 
                                pattern='[A-Za-z]+' 
                                autocomplete='off' 
                                name='firstName' 
                                placeholder='First Name' 
                                ref= {firstNameRef} 
                                onChange={(e)=>{
                        
                                    params.personalInfoNames.setFirstName(e.target.value)

                                    if (e.target.value ==='yes') {
                                    e.target.setCustomValidity("you selected yes, yes is not allowed!"); //this works for default feedbacks, if want to use custom feedback = need to set condition in custom feedback
                                    firstNameFeedback.current.textContent = 'Yes is not allowed'
                                    } else {
                                    e.target.setCustomValidity("");
                                    firstNameFeedback.current.textContent = 'Required Field Letters Only'
                                    }
                                }}
                                value={params.personalInfoNames.firstName}
                            />
                            <Form.Control.Feedback ref={firstNameFeedback} type='invalid'>Required Field Letters Only</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className='firstPartFormGroup'>
                        <FloatingLabel label='Last Name*'>
                            <Form.Control required 
                                name='lastName' 
                                type='text' 
                                pattern='[A-Za-z]+' 
                                autocomplete='off' 
                                placeholder='Last Name' 
                                ref={lastNameRef}
                            />
                            <Form.Control.Feedback type='invalid'>Required Field Letters Only</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className='firstPartFormGroup'>
                        <FloatingLabel label='English Name'>
                            <Form.Control
                                name='lastName'
                                type='text' 
                                pattern='[A-Za-z]+' 
                                autocomplete='off' 
                                name='englishName' 
                                placeholder='English Name' 
                                ref={englishNameRef} 
                            />
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
            
                    <FloatingLabel  className='firstPartFormGroup' label='Date of Birth*' >
                        <Form.Control required 
                            type='date' 
                            ref={birthdayRef}
                            max={moment().format("YYYY-MM-DD")}
                        />
                        <Form.Control.Feedback ref={birthdayFeedback} type='invalid'>Required Field</Form.Control.Feedback>
                    </FloatingLabel>

                    <Form.Group className='firstPartFormGroup'>
                        <FloatingLabel label='SIN#*'>
                            <Form.Control required 
                                minlength='9' 
                                maxlength='9'
                                pattern='[0-9]+'
                                placeholder='SIN#' 
                                ref={sinRef} 
                            />
                            <Form.Control.Feedback type='invalid'>9 DIGIT SIN CARD NUM</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group required className='firstPartFormGroupGender'    
                                feedback="Must Select a Gender"
                                feedbackType="invalid">
                        <Form.Label className ='firstPartGenderLabel'>Gender*:</Form.Label>
                        <div className='firstPartGenderBox' >
                            <Form.Check required 
                                name='genderselector' 
                                label='Male'
                                type='radio'
                                ref={genderMaleRef} 
                                value="Male"
                                onChange={() => setGender(genderMaleRef.current.value)}
                            >
                            </Form.Check>

                            <Form.Check required 
                                inline name='genderselector' 
                                label='Female' 
                                type='radio'
                                ref={genderFemaleRef} 
                                value="Female" 
                                checked={gender === "Female"} 
                                onChange={()=>setGender(genderFemaleRef.current.value)}
                            >
                            </Form.Check>
                        </div>
                    </Form.Group>
                        


                    <FloatingLabel className='firstPartFormGroupE' label='E-Mail*'>
                        <Form.Control required
                        type='email' 
                        ref={emailRef} 
                        placeholder='Email' 
                        />
                        <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel className='firstPartFormGroup' label='Cell Phone*'>
                        <Form.Control required 
                        maxlength='10'
                        minlenght='10'
                        pattern='\d{3}\d{3}\d{4}'
                        placeholder='cellphone'
                        ref={cellNumRef}
                        />
                        <Form.Control.Feedback type='invalid'>Required Field, Must Contain 10 Digit Number</Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel className='firstPartFormGroup' label='Home Phone'>
                        <Form.Control 
                        maxlength='10'
                        pattern='\d{3}\d{3}\d{4}'
                        placeholder='homephone' 
                        ref={homeNumRef}
                        />
                        <Form.Control.Feedback type='invalid'>Required Field, Must Contain 10 Digit Number</Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel className = 'firstPartFormGroup' label='Work Phone'>
                        <Form.Control
                        maxlength='10'
                        pattern='\d{3}\d{3}\d{4}'
                        placeholder='workphone'
                        ref={workNumRef} 
                        />
                        <Form.Control.Feedback type='invalid'>Optional Field, But Format Must Be 10 Digit Number</Form.Control.Feedback>
                    </FloatingLabel>
        

                    
            
                    <div className='firstPartFormStatusOne' >
                        <FloatingLabel label='Living Status*' >
                            <Form.Control required 
                                as='select' 
                                className='formStatusItems' 
                                ref={livingStatusRef}
                            >
                                <option value=''>Select</option>
                                <option value='owner'>Owner</option>
                                <option value='rent'>Rent</option>
                                <option value='with parent'>With Parent</option>
                                <option value='with other'>With Other</option>
                                <option value='other'>Other</option>
                            </Form.Control>
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel label='Marital Status*' >
                            <Form.Control required 
                                as='select'
                                className='formStatusItems'
                                ref={maritalStatusRef}
                            >
                                <option value='' >Select</option>
                                <option value='married'>Married</option>
                                <option value='single'>Single</option>
                                <option value='divorced'>Divorced</option>
                                <option value='separated'>Separated</option>
                                <option value='widowed'>Widowed</option>
                                <option value='common law'>Common Law</option>
                                <option value='other'>Other</option>
                            </Form.Control>
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel label='Citizenship*' >
                            <Form.Control required 
                                as='select' 
                                className='formStatusItems' 
                                ref={citizenshipRef} 
                            >
                                <option value='' >Select</option>
                                <option value='canadian'>Canadian</option>
                                <option value='chinese'>Chinese</option>
                                <option value='pr'>PR</option>
                                <option value='other'>Other</option>
                            </Form.Control>    
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>        
                        </FloatingLabel>

                        <FloatingLabel label='Tax Status*'>
                            <Form.Control required 
                                as='select' 
                                className='formStatusItems' 
                                ref={taxStatusRef} 
                            >
                                <option value='' >Select</option>
                                <option value='canada'>Canada</option>
                                <option value='usa'>USA</option>
                                <option value='both'>Both</option>
                                <option value='other'>Other</option>
                            </Form.Control>
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>
                    </div>

            

                    <FloatingLabel className='previouslyDeclared' label='Have you previously Declared Bankruptcy?'>
                        <Form.Select
                            ref={previousDeclaredRef} 
                            onChange={()=>{
                                toggleShowDischarge()
                        }}>
                            <option value='No'>No</option>
                            <option value='Yes'>Yes</option>
                        </Form.Select>  
                    </FloatingLabel>

                    {showDischarge===true?(
                            <FloatingLabel className='dischargeDate' label='Discharge Date'>
                                <Form.Control required 
                                    type='date' 
                                    placeholder='dateOfDischarge' 
                                    ref={dischargeDateRef} 
                                />
                                <Form.Control.Feedback type='invalid'>Required Field if You Have Previously Declared Bankruptcy</Form.Control.Feedback>
                            </FloatingLabel>
                    ): null} 
                    
                </Card>

                <Button className='personalInfoButton'>Check Validation</Button>

            </div>
    )
}
