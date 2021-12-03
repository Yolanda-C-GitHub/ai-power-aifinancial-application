import React, {useRef, useState} from 'react'
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

    const [showDischarge, setShowDischarge]=useState(false);
    
    function toggleShowDischarge(){
        if(params.personalInfoNames.declared==='No'){
            setShowDischarge(true)   
        } else{
            params.personalInfoNames.setDischargeDate('')
            setShowDischarge(false)
        }
    }

    return (

            <Card className='firstPartCard'>

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


                <FloatingLabel className='firstPartFormGroupE' label='Email'>
                    <Form.Control type='email' ref={emailRef} placeholder='Email' onChange={()=>params.personalInfoNames.setEmail(emailRef.current.value)}/>
                </FloatingLabel>

                <FloatingLabel className='firstPartFormGroup' label='Cell Phone'>
                    <Form.Control placeholder='cellphone'ref={cellNumRef} onChange={()=>params.personalInfoNames.setCellNum(cellNumRef.current.value)}/>
                </FloatingLabel>

                <FloatingLabel className='firstPartFormGroup' label='Home Phone'>
                    <Form.Control placeholder='homephone' ref={homeNumRef} onChange={()=>params.personalInfoNames.setHomeNum(homeNumRef.current.value)} />
                </FloatingLabel>

                <FloatingLabel className = 'firstPartFormGroup' label='Work Phone'>
                    <Form.Control placeholder='workphone' ref={workNumRef} onChange={()=>params.personalInfoNames.setWorkNum(workNumRef.current.value)} />
                </FloatingLabel>
      

                
                <Form.Group className='firstPartFormStatusContainer'>
                    <div className='firstPartFormStatusOne' >
                        <FloatingLabel label='Living Status' >
                            <Form.Select className='formStatusItems' ref={livingStatusRef} onChange={()=>params.personalInfoNames.setLivingStatus(livingStatusRef.current.value)}>
                                <option placeholder='select' >Select</option>
                                <option value='owner'>Owner</option>
                                <option value='rent'>Rent</option>
                                <option value='with parent'>With Parent</option>
                                <option value='with other'>With Other</option>
                                <option value='other'>Other</option>
                            </Form.Select>
                        </FloatingLabel>
        
                        <FloatingLabel label='Marital Status' >
                            <Form.Select className='formStatusItems' ref={maritalStatusRef} onChange={()=>params.personalInfoNames.setMaritalStatus(maritalStatusRef.current.value)}>
                                <option placeholder='select' >Select</option>
                                <option value='married'>Married</option>
                                <option value='single'>Single</option>
                                <option value='divorced'>Divorced</option>
                                <option value='separated'>Separated</option>
                                <option value='widowed'>Widowed</option>
                                <option value='common law'>Common Law</option>
                                <option value='other'>Other</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>

                    <div className='firstPartFormStatusTwo' >
                        <FloatingLabel label='Citizenship' >
                            <Form.Select className='formStatusItems' ref={citizenshipRef} onChange={()=>params.personalInfoNames.setCitizenship(citizenshipRef.current.value)} >
                                <option placeholder='select' >Select</option>
                                <option value='canadian'>Canadian</option>
                                <option value='chinese'>Chinese</option>
                                <option value='pr'>PR</option>
                                <option value='other'>Other</option>
                            </Form.Select>            
                        </FloatingLabel>

                        <FloatingLabel label='Tax Status'>
                            <Form.Select className='formStatusItems' ref={taxStatusRef} onChange={()=>params.personalInfoNames.setTaxStatus(taxStatusRef.current.value)}>
                                <option placeholder='select' >Select</option>
                                <option value='canada'>Canada</option>
                                <option value='usa'>USA</option>
                                <option value='both'>Both</option>
                                <option value='other'>Other</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>

                </Form.Group>

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
                                <Form.Control type='date' placeholder='dateOfDischarge' ref={dischargeDateRef} onChange={()=>params.personalInfoNames.setDischargeDate(dischargeDateRef.current.value)} />
                            </FloatingLabel>
                    ): null} 


            </Card>
    )
}
