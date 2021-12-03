import React, {useRef, useState} from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './coapplicantinfo.css' 


export default function Coapp(params) {

    const colastNameRef = useRef()
    const cofirstNameRef = useRef()
    const coenglishNameRef = useRef()

    const cogenderFemaleRef = useRef()
    const cogenderMaleRef=useRef();
    const cobirthdayRef = useRef()
    const cosinRef = useRef()

    const coemailRef = useRef();
    const cocellNumRef=useRef();
    const cohomeNumRef=useRef();
    const coworkNumRef=useRef();

    const colivingStatusRef = useRef();
    const comaritalStatusRef = useRef();
    const cocitizenshipRef = useRef();
    const cotaxStatusRef = useRef();

    const codischargeDateRef = useRef();
    const copreviousDeclaredRef =useRef();
  

    const [showDischarge, setShowDischarge]=useState(false);
    
    function toggleShowDischarge(){
        if(params.coAppInfo.codeclared==='No'){
            setShowDischarge(true)   
        } else{
            params.coAppInfo.setcoDischargeDate('')
            setShowDischarge(false)
        }
    }


    return (

            <Card className='cofirstPartCard'>

                <Form.Group className='firstPartFormGroup'>
                    <FloatingLabel label='First Name'>
                        <Form.Control placeholder='First Name' ref= {colastNameRef} onChange ={()=>params.coAppInfo.setCoLastName(colastNameRef.current.value)}></Form.Control>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className='firstPartFormGroup'>
                    <FloatingLabel label='Last Name'>
                        <Form.Control placeholder='Last Name' ref={cofirstNameRef} onChange={()=>params.coAppInfo.setCoFirstName(cofirstNameRef.current.value)} ></Form.Control>
                    </FloatingLabel>
                </Form.Group>

                 <Form.Group className='firstPartFormGroup'>
                    <FloatingLabel label='English Name'>
                        <Form.Control placeholder='English Name' ref={coenglishNameRef} onChange={()=>params.coAppInfo.setCoEnglishName(coenglishNameRef.current.value)} ></Form.Control>
                    </FloatingLabel>
                </Form.Group>
         
                <FloatingLabel  className='firstPartFormGroup' label='Date of Birth' >
                    <Form.Control type='date' className='' ref={cobirthdayRef} onChange={()=>params.coAppInfo.setCoBirthday(cobirthdayRef.current.value)} ></Form.Control>
                </FloatingLabel>

                <Form.Group className='firstPartFormGroup'>
                    <FloatingLabel label='SIN#'>
                        <Form.Control placeholder='SIN#' ref={cosinRef} onChange={()=>params.coAppInfo.setCoSinNum(cosinRef.current.value)}></Form.Control>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className='firstPartFormGroup'>
                    <Form.Label className ='firstPartGenderLabel'>Gender:</Form.Label>
                    <div className='firstPartGenderBox' >

                        <Form.Check  name='genderselector' label='Male' type='radio' 
                            ref={cogenderMaleRef} 
                            value="Male"  
                            onChange={() => params.coAppInfo.setCoGender(cogenderMaleRef.current.value)}
                        >
                        </Form.Check>

                        <Form.Check inline name='genderselector' label='Female' type='radio' 
                            ref={cogenderFemaleRef} 
                            value="Female" 
                            checked={params.coAppInfo.cogender === "Female"} 
                            onChange={()=>params.coAppInfo.setCoGender(cogenderFemaleRef.current.value)}
                        >
                        </Form.Check>

                    </div>
                </Form.Group>


                <FloatingLabel className='firstPartFormGroupE' label='Email'>
                    <Form.Control type='email' ref={coemailRef} placeholder='Email' onChange={()=>params.coAppInfo.setCoEmail(coemailRef.current.value)}/>
                </FloatingLabel>

                <FloatingLabel className='firstPartFormGroup' label='Cell Phone'>
                    <Form.Control placeholder='cellphone'ref={cocellNumRef} onChange={()=>params.coAppInfo.setCoCellNum(cocellNumRef.current.value)}/>
                </FloatingLabel>

                <FloatingLabel className='firstPartFormGroup' label='Home Phone'>
                    <Form.Control placeholder='homephone' ref={cohomeNumRef} onChange={()=>params.coAppInfo.setCoHomeNum(cohomeNumRef.current.value)} />
                </FloatingLabel>

                <FloatingLabel className = 'firstPartFormGroup' label='Work Phone'>
                    <Form.Control placeholder='workphone' ref={coworkNumRef} onChange={()=>params.coAppInfo.setCoWorkNum(coworkNumRef.current.value)} />
                </FloatingLabel>
      

                <Form.Group className='firstPartFormStatusOne' >
                    <FloatingLabel className='coformStatusItems' label='Living Status' >
                        <Form.Select  ref={colivingStatusRef} onChange={()=>params.coAppInfo.setCoLivingStatus(colivingStatusRef.current.value)}>
                            <option placeholder='select' >Select</option>
                            <option value='owner'>Owner</option>
                            <option value='rent'>Rent</option>
                            <option value='with parent'>With Parent</option>
                            <option value='with other'>With Other</option>
                            <option value='other'>Other</option>
                        </Form.Select>
                    </FloatingLabel>
     
                    <FloatingLabel className='coformStatusItems' label='Marital Status' >
                        <Form.Select ref={comaritalStatusRef} onChange={()=>params.coAppInfo.setCoMaritalStatus(comaritalStatusRef.current.value)}>
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
             
                    <FloatingLabel className='coformStatusItems' label='Citizenship' >
                        <Form.Select ref={cocitizenshipRef} onChange={()=>params.coAppInfo.setCoCitizenship(cocitizenshipRef.current.value)} >
                            <option placeholder='select' >Select</option>
                            <option value='canadian'>Canadian</option>
                            <option value='chinese'>Chinese</option>
                            <option value='pr'>PR</option>
                            <option value='other'>Other</option>
                        </Form.Select>            
                    </FloatingLabel>

                    <FloatingLabel className='coformStatusItems' label='Tax Status'>
                        <Form.Select ref={cotaxStatusRef} onChange={()=>params.coAppInfo.setCoTaxStatus(cotaxStatusRef.current.value)}>
                            <option placeholder='select' >Select</option>
                            <option value='canada'>Canada</option>
                            <option value='usa'>USA</option>
                            <option value='both'>Both</option>
                            <option value='other'>Other</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>




                <FloatingLabel className='previouslyDeclared' label='Have you previously Declared Bankruptcy?'>
                    <Form.Select ref={copreviousDeclaredRef} 
                    onChange={()=>{
                        params.coAppInfo.setcoDeclared(copreviousDeclaredRef.current.value)
                        toggleShowDischarge()
                    }}>
                        <option value='No'>No</option>
                        <option value='Yes'>Yes</option>
                    </Form.Select>  
                </FloatingLabel>

                {showDischarge===true?(
                        <FloatingLabel className='dischargeDate' label='Discharge Date'>
                            <Form.Control type='date' placeholder='dateOfDischarge' ref={codischargeDateRef} onChange={()=>params.coAppInfo.setcoDischargeDate(codischargeDateRef.current.value)} />
                        </FloatingLabel>
                ): null} 

            </Card>  
    )
}