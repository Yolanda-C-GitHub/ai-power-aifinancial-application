import React, {useRef, useState} from 'react';
import {Card, Form, FloatingLabel, Button} from 'react-bootstrap';
import './firstpart.css';







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
    const dischargeDateRef=useRef();

    
    // toggle discharge dates base on discharge input
    const [showDischarge, setShowDischarge]=useState(false);
    function toggleShowDischarge(){
        if(params.personalInfoNames.declared==='No'){
            setShowDischarge(true)   
        } else{
            params.personalInfoNames.setDischargeDate('')
            setShowDischarge(false)
        }
    }

    const [validated, setValidated] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        const form = e.currentTarget;
        const checkStatus = form.checkValidity()
        console.log(checkStatus)
        if (form.checkValidity() === false) {
            setValidated(true);
            e.stopPropagation();
            console.log('no check the form')
        } else{
            // once validation is passed, store all values in state
            setValidated(true);
            params.personalInfoNames.setFirstName(firstNameRef.current.value)
            params.personalInfoNames.setLastName(lastNameRef.current.value)
            params.personalInfoNames.setEnglishName(englishNameRef.current.value)
            console.log('run a bunch of setstates') 
            console.log(
                params.personalInfoNames.firstName,
                params.personalInfoNames.lastName,
            )
        }
       
    }

    return (
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='personalInfoForm'>

                <Card className='firstPartCard'>

                    <Form.Group className='firstPartFormGroup' controlId="validationCustom01">
                        <FloatingLabel label='First Name'>
                            <Form.Control required
                                type='text' 
                                pattern='[A-Za-z]+' 
                                autocomplete='off' 
                                name='firstName' 
                                placeholder='First Name' 
                                ref= {firstNameRef} 
                                />
                            <Form.Control.Feedback type='invalid'>Required Field Letters Only</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className='firstPartFormGroup'>
                        <FloatingLabel label='Last Name'>
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
                            <Form.Control required
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
            
                    <FloatingLabel  className='firstPartFormGroup' label='Date of Birth' >
                        <Form.Control required 
                            type='date' 
                            ref={birthdayRef} 
                            onChange={()=>params.personalInfoNames.setBirthday(birthdayRef.current.value)} ></Form.Control>
                        <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                    </FloatingLabel>

                    <Form.Group className='firstPartFormGroup'>
                        <FloatingLabel label='SIN#'>
                            <Form.Control required 
                                minlength='9' 
                                maxlength='9'
                                pattern='[0-9]+'
                                placeholder='SIN#' 
                                ref={sinRef} 
                                onChange={()=>params.personalInfoNames.setSinNum(sinRef.current.value)}></Form.Control>
                            <Form.Control.Feedback type='invalid'>9 DIGIT SIN CARD NUM</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group required className='firstPartFormGroupGender'    
                                feedback="Must Select a Gender"
                                feedbackType="invalid">
                        <Form.Label className ='firstPartGenderLabel'>Gender:</Form.Label>
                        <div className='firstPartGenderBox' >
                            <Form.Check required 
                                name='genderselector' 
                                label='Male'
                                type='radio' 
                                ref={genderMaleRef} 
                                value="Male"
                                onChange={() => params.personalInfoNames.setGender(genderMaleRef.current.value)}
                            >
                            </Form.Check>

                            <Form.Check required 
                                inline name='genderselector' 
                                label='Female' 
                                type='radio' 
                                ref={genderFemaleRef} 
                                value="Female" 
                                checked={params.personalInfoNames.gender === "Female"} 
                                onChange={()=>params.personalInfoNames.setGender(genderFemaleRef.current.value)}
                            >
                            </Form.Check>
                        </div>
                    </Form.Group>
                        


                    <FloatingLabel className='firstPartFormGroupE' label='Email'>
                        <Form.Control required
                        type='email' 
                        ref={emailRef} 
                        placeholder='Email' 
                        onChange={()=>params.personalInfoNames.setEmail(emailRef.current.value)}/>
                        <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel className='firstPartFormGroup' label='Cell Phone'>
                        <Form.Control required 
                        maxlength='10'
                        minlenght='10'
                        pattern='\d{3}\d{3}\d{4}'
                        placeholder='cellphone'
                        ref={cellNumRef}
                        onChange={()=>params.personalInfoNames.setCellNum(cellNumRef.current.value)}/>
                        <Form.Control.Feedback type='invalid'>Required Field, Must Contain 10 Digit Number</Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel className='firstPartFormGroup' label='Home Phone'>
                        <Form.Control 
                        maxlength='10'
                        pattern='\d{3}\d{3}\d{4}'
                        placeholder='homephone' 
                        ref={homeNumRef}
                        onChange={()=>params.personalInfoNames.setHomeNum(homeNumRef.current.value)} />
                        <Form.Control.Feedback type='invalid'>Required Field, Must Contain 10 Digit Number</Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel className = 'firstPartFormGroup' label='Work Phone'>
                        <Form.Control
                        maxlength='10'
                        pattern='\d{3}\d{3}\d{4}'
                        placeholder='workphone'
                        ref={workNumRef} 
                        onChange={()=>params.personalInfoNames.setWorkNum(workNumRef.current.value)} />
                        <Form.Control.Feedback type='invalid'>Optional Field, But Format Must Be 10 Digit Number</Form.Control.Feedback>
                    </FloatingLabel>
        

                    
            
                    <div className='firstPartFormStatusOne' >
                        <FloatingLabel label='Living Status' >
                            <Form.Control required as='select' className='formStatusItems' ref={livingStatusRef} onChange={()=>params.personalInfoNames.setLivingStatus(livingStatusRef.current.value)}>
                                <option value=''>Select</option>
                                <option value='owner'>Owner</option>
                                <option value='rent'>Rent</option>
                                <option value='with parent'>With Parent</option>
                                <option value='with other'>With Other</option>
                                <option value='other'>Other</option>
                            </Form.Control>
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel label='Marital Status' >
                            <Form.Control required as='select' className='formStatusItems' ref={maritalStatusRef} onChange={()=>params.personalInfoNames.setMaritalStatus(maritalStatusRef.current.value)}>
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
                        
                        <FloatingLabel label='Citizenship' >
                            <Form.Control required as='select' className='formStatusItems' ref={citizenshipRef} onChange={()=>params.personalInfoNames.setCitizenship(citizenshipRef.current.value)} >
                                <option value='' >Select</option>
                                <option value='canadian'>Canadian</option>
                                <option value='chinese'>Chinese</option>
                                <option value='pr'>PR</option>
                                <option value='other'>Other</option>
                            </Form.Control>    
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>        
                        </FloatingLabel>

                        <FloatingLabel label='Tax Status'>
                            <Form.Control required as='select' className='formStatusItems' ref={taxStatusRef} onChange={()=>params.personalInfoNames.setTaxStatus(taxStatusRef.current.value)}>
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
                        <Form.Select ref={previousDeclaredRef} 
                        onChange={()=>{
                            params.personalInfoNames.setDeclared(previousDeclaredRef.current.value)
                            toggleShowDischarge()
                        }}>
                            <option value='No'>No</option>
                            <option value='Yes'>Yes</option>
                        </Form.Select>  
                    </FloatingLabel>

                    {showDischarge===true?(
                            <FloatingLabel className='dischargeDate' label='Discharge Date'>
                                <Form.Control required type='date' placeholder='dateOfDischarge' ref={dischargeDateRef} onChange={()=>params.personalInfoNames.setDischargeDate(dischargeDateRef.current.value)} />
                                <Form.Control.Feedback type='invalid'>Required Field if You Have Previously Declared Bankruptcy</Form.Control.Feedback>
                            </FloatingLabel>
                    ): null} 
                </Card>

                <Button type='submit' className='personalInfoButton'>Save to State</Button>

            </Form>
    )
}
