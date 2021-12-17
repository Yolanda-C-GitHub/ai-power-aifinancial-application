import React, {useRef,useEffect} from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './coapplicantinfo.css' 
import moment from 'moment'


export default function Coapp(params) {

    const coFirstName = useRef()

    const firstNameFeedback=useRef('')
    const birthdayFeedback=useRef('')

    // toggle discharge dates base on discharge input
    function toggleShowDischarge(){
        if(params.coAppInfo.declared==='No'){
            params.coAppInfo.setShowDischarge(true)
            params.coAppInfo.setDeclared('Yes')
          
        } else if(params.coAppInfo.declared==='Yes'){
            params.coAppInfo.setShowDischarge(false)
            params.coAppInfo.setDischargeDate('')
            params.coAppInfo.setDeclared('No')
        }
    }

    useEffect(()=>{
        params.coAppInfo.setCoFirstName(coFirstName.current.value)
        if (coFirstName.current.value ==='yes') {
        coFirstName.current.setCustomValidity("you selected yes, yes is not allowed!"); //this works for default feedbacks, if want to use custom feedback = need to set condition in custom feedback
        firstNameFeedback.current.textContent = 'Yes is not allowed'
        } else {
        coFirstName.current.setCustomValidity("");
        firstNameFeedback.current.textContent = 'Required Field Letters Only'
        }
    })




    return (
        <div className='coPersonalInfoForm'>
                <Card className='firstPartCard'>

                    <Form.Group className='firstPartFormGroup' controlId="validationCustom01">
                        <FloatingLabel label='First Name*'>
                            <Form.Control required
                                type='text' 
                                pattern='[A-Za-z]+' 
                                autocomplete='off' 
                                name='cofirstName' 
                                ref={coFirstName}
                                placeholder='First Name' 
                                onChange={(e)=>{
                                    params.coAppInfo.setCoFirstName(e.target.value)
                                    if (e.target.value ==='yes') {
                                    e.target.setCustomValidity("you selected yes, yes is not allowed!"); //this works for default feedbacks, if want to use custom feedback = need to set condition in custom feedback
                                    firstNameFeedback.current.textContent = 'Yes is not allowed'
                                    } else {
                                    e.target.setCustomValidity("");
                                    firstNameFeedback.current.textContent = 'Required Field Letters Only'
                                    }
                                }}
                                value={params.coAppInfo.cofirstName}
                            />
                            <Form.Control.Feedback ref={firstNameFeedback} type='invalid'>Required Field Letters Only</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className='firstPartFormGroup'>
                        <FloatingLabel label='Last Name*'>
                            <Form.Control required 
                                name='colastName' 
                                type='text' 
                                pattern='[A-Za-z]+' 
                                autocomplete='off' 
                                placeholder='Last Name' 
                                onChange={(e)=>{
                                    params.coAppInfo.setCoLastName(e.target.value)
                                }}
                                value={params.coAppInfo.colastName}
                            />
                            <Form.Control.Feedback type='invalid'>Required Field Letters Only</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className='firstPartFormGroup'>
                        <FloatingLabel label='English Name'>
                            <Form.Control
                                type='text' 
                                pattern='[A-Za-z]+' 
                                autocomplete='off' 
                                name='englishName' 
                                placeholder='English Name'
                                onChange={(e)=>{
                                    params.coAppInfo.setCoEnglishName(e.target.value)
                                }}
                                value={params.coAppInfo.coenglishName}
                            />
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
            
                    <FloatingLabel  className='firstPartFormGroup' label='Date of Birth*' >
                        <Form.Control required 
                            type='date' 
                            max={moment().format("YYYY-MM-DD")}
                            onChange = {(e)=>{
                                params.coAppInfo.setCoBirthday(e.target.value)
                            }}
                            value={params.coAppInfo.cobirthDay}
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
                                onChange = {(e)=>{
                                    params.coAppInfo.setCoSinNum(e.target.value)
                                }}
                                value={params.coAppInfo.cosinNum}
                            />
                            <Form.Control.Feedback type='invalid'>9 DIGIT SIN CARD NUM</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group required className='firstPartFormGroupGender'>
                        <Form.Label className ='firstPartGenderLabel'>Gender* :</Form.Label>
                        <div className='firstPartGenderBox' >
                            <Form.Check required 
                                name='genderselector' 
                                label='Male'
                                type='radio'
                                value='Male'
                                checked={params.coAppInfo.cogender === "Male"} 
                                onChange={(e)=>{
                                    params.coAppInfo.setCoGender(e.target.value)
                                }}
                            >
                            </Form.Check>

                            <Form.Check required 
                                inline name='genderselector' 
                                label='Female' 
                                type='radio'
                                value="Female" 
                                checked={params.coAppInfo.cogender === "Female"} 
                                onChange={(e)=>{
                                    params.coAppInfo.setCoGender(e.target.value)
                                }}
                            >
                            </Form.Check>
                        </div>
                    </Form.Group>


                    <FloatingLabel className='firstPartFormGroupE' label='E-Mail*'>
                        <Form.Control required
                            type='email' 
                            placeholder='Email' 
                            value={params.coAppInfo.coemail}
                            onChange={(e)=>{
                                params.coAppInfo.setCoEmail(e.target.value)
                            }}
                        />
                        <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel className='firstPartFormGroup' label='Cell Phone*'>
                        <Form.Control required 
                            maxlength='10'
                            minlenght='10'
                            pattern='\d{3}\d{3}\d{4}'
                            placeholder='cellphone'
                            value={params.coAppInfo.cocellNum}
                            onChange={(e)=>{
                                params.coAppInfo.setCoCellNum(e.target.value)
                            }}    
                        />
                        <Form.Control.Feedback type='invalid'>Required Field, Must Contain 10 Digit Number</Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel className='firstPartFormGroup' label='Home Phone'>
                        <Form.Control 
                            maxlength='10'
                            pattern='\d{3}\d{3}\d{4}'
                            placeholder='homephone' 
                            value={params.coAppInfo.cohomeNum}
                            onChange={(e)=>{
                                params.coAppInfo.setCoHomeNum(e.target.value)
                            }}
                        />
                        <Form.Control.Feedback type='invalid'>Required Field, Must Contain 10 Digit Number</Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel className = 'firstPartFormGroup' label='Work Phone'>
                        <Form.Control
                            maxlength='10'
                            pattern='\d{3}\d{3}\d{4}'
                            placeholder='workphone'
                            value={params.coAppInfo.coworkNum}
                            onChange={(e)=>{
                                params.coAppInfo.setCoWorkNum(e.target.value)               
                            }}
                        />
                        <Form.Control.Feedback type='invalid'>Optional Field, But Format Must Be 10 Digit Number</Form.Control.Feedback>
                    </FloatingLabel>
        


            
                    <div className='firstPartFormStatusOne' >
                        <FloatingLabel label='Living Status*' >
                            <Form.Select required 
                                className='formStatusItems' 
                                value={params.coAppInfo.colivingStatus}
                                onChange={(e)=>{
                                    params.coAppInfo.setCoLivingStatus(e.target.value)
                                }}
                            >
                                <option value=''>Select</option>
                                <option value='owner'>Owner</option>
                                <option value='rent'>Rent</option>
                                <option value='with parent'>With Parent</option>
                                <option value='with other'>With Other</option>
                                <option value='other'>Other</option>
                            </Form.Select>
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel label='Marital Status*' >
                            <Form.Select required 
                                as='select'
                                className='formStatusItems'
                                value={params.coAppInfo.comaritalStatus}
                                onChange={(e)=>{
                                    params.coAppInfo.setCoMaritalStatus(e.target.value)
                                }}
                            >
                                <option value='' >Select</option>
                                <option value='married'>Married</option>
                                <option value='single'>Single</option>
                                <option value='divorced'>Divorced</option>
                                <option value='separated'>Separated</option>
                                <option value='widowed'>Widowed</option>
                                <option value='common law'>Common Law</option>
                                <option value='other'>Other</option>
                            </Form.Select>
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel label='Citizenship*' >
                            <Form.Select required 
                                as='select' 
                                className='formStatusItems' 
                                value={params.coAppInfo.cocitizenship}
                                onChange={(e)=>{
                                    params.coAppInfo.setCoCitizenship(e.target.value)
                                }}
                            >
                                <option value='' >Select</option>
                                <option value='canadian'>Canadian</option>
                                <option value='chinese'>Chinese</option>
                                <option value='pr'>PR</option>
                                <option value='other'>Other</option>
                            </Form.Select>    
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>        
                        </FloatingLabel>

                        <FloatingLabel label='Tax Status*'>
                            <Form.Select required 
                                as='select' 
                                className='formStatusItems' 
                                value={params.coAppInfo.cotaxStatus}
                                onChange={(e)=>{
                                    params.coAppInfo.setCoTaxStatus(e.target.value)
                                }}
                            >
                                <option value='' >Select</option>
                                <option value='canada'>Canada</option>
                                <option value='usa'>USA</option>
                                <option value='both'>Both</option>
                                <option value='other'>Other</option>
                            </Form.Select>
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>
                    </div>

            

                    <FloatingLabel className='previouslyDeclared' label='Have you previously Declared Bankruptcy?'>
                        <Form.Select
                            value={params.coAppInfo.codeclared}
                            onChange={(e)=>{
                                params.coAppInfo.setcoDeclared(e.target.value)
                                toggleShowDischarge()
                        }}>
                            <option value='No'>No</option>
                            <option value='Yes'>Yes</option>
                        </Form.Select>  
                    </FloatingLabel>

                    {params.coAppInfo.showCoDischarge===true?(
                            <FloatingLabel className='dischargeDate' label='Discharge Date'>
                                <Form.Control required
                                    type='date' 
                                    placeholder='dateOfDischarge' 
                                    max={moment().format("YYYY-MM-DD")}
                                    value={params.coAppInfo.codischargeDate}
                                    onChange={(e)=>{
                                        params.coAppInfo.setcoDischargeDate(e.target.value)
                                    }}
                                />
                                <Form.Control.Feedback type='invalid'>Required Field if You Have Previously Declared Bankruptcy</Form.Control.Feedback>
                            </FloatingLabel>
                    ): null} 
                    
                </Card>

            </div>
    )
}
















//     const colastNameRef = useRef()
//     const cofirstNameRef = useRef()
//     const coenglishNameRef = useRef()

//     const cogenderFemaleRef = useRef()
//     const cogenderMaleRef=useRef();
//     const cobirthdayRef = useRef()
//     const cosinRef = useRef()

//     const coemailRef = useRef();
//     const cocellNumRef=useRef();
//     const cohomeNumRef=useRef();
//     const coworkNumRef=useRef();

//     const colivingStatusRef = useRef();
//     const comaritalStatusRef = useRef();
//     const cocitizenshipRef = useRef();
//     const cotaxStatusRef = useRef();

//     const codischargeDateRef = useRef();
//     const copreviousDeclaredRef =useRef();
  

//     const [showDischarge, setShowDischarge]=useState(false);
    
//     function toggleShowDischarge(){
//         if(params.coAppInfo.codeclared==='No'){
//             setShowDischarge(true)   
//         } else{
//             params.coAppInfo.setcoDischargeDate('')
//             setShowDischarge(false)
//         }
//     }


//     return (

//             <Card className='cofirstPartCard'>

//                 <Form.Group className='firstPartFormGroup'>
//                     <FloatingLabel label='First Name'>
//                         <Form.Control placeholder='First Name' ref= {colastNameRef} onChange ={()=>params.coAppInfo.setCoLastName(colastNameRef.current.value)}></Form.Control>
//                     </FloatingLabel>
//                 </Form.Group>

//                 <Form.Group className='firstPartFormGroup'>
//                     <FloatingLabel label='Last Name'>
//                         <Form.Control placeholder='Last Name' ref={cofirstNameRef} onChange={()=>params.coAppInfo.setCoFirstName(cofirstNameRef.current.value)} ></Form.Control>
//                     </FloatingLabel>
//                 </Form.Group>

//                  <Form.Group className='firstPartFormGroup'>
//                     <FloatingLabel label='English Name'>
//                         <Form.Control placeholder='English Name' ref={coenglishNameRef} onChange={()=>params.coAppInfo.setCoEnglishName(coenglishNameRef.current.value)} ></Form.Control>
//                     </FloatingLabel>
//                 </Form.Group>
         
//                 <FloatingLabel  className='firstPartFormGroup' label='Date of Birth' >
//                     <Form.Control type='date' className='' ref={cobirthdayRef} onChange={()=>params.coAppInfo.setCoBirthday(cobirthdayRef.current.value)} ></Form.Control>
//                 </FloatingLabel>

//                 <Form.Group className='firstPartFormGroup'>
//                     <FloatingLabel label='SIN#'>
//                         <Form.Control placeholder='SIN#' ref={cosinRef} onChange={()=>params.coAppInfo.setCoSinNum(cosinRef.current.value)}></Form.Control>
//                     </FloatingLabel>
//                 </Form.Group>

//                 <Form.Group className='firstPartFormGroup'>
//                     <Form.Label className ='firstPartGenderLabel'>Gender:</Form.Label>
//                     <div className='firstPartGenderBox' >

//                         <Form.Check  name='genderselector' label='Male' type='radio' 
//                             ref={cogenderMaleRef} 
//                             value="Male"  
//                             onChange={() => params.coAppInfo.setCoGender(cogenderMaleRef.current.value)}
//                         >
//                         </Form.Check>

//                         <Form.Check inline name='genderselector' label='Female' type='radio' 
//                             ref={cogenderFemaleRef} 
//                             value="Female" 
//                             checked={params.coAppInfo.cogender === "Female"} 
//                             onChange={()=>params.coAppInfo.setCoGender(cogenderFemaleRef.current.value)}
//                         >
//                         </Form.Check>

//                     </div>
//                 </Form.Group>


//                 <FloatingLabel className='firstPartFormGroupE' label='Email'>
//                     <Form.Control type='email' ref={coemailRef} placeholder='Email' onChange={()=>params.coAppInfo.setCoEmail(coemailRef.current.value)}/>
//                 </FloatingLabel>

//                 <FloatingLabel className='firstPartFormGroup' label='Cell Phone'>
//                     <Form.Control placeholder='cellphone'ref={cocellNumRef} onChange={()=>params.coAppInfo.setCoCellNum(cocellNumRef.current.value)}/>
//                 </FloatingLabel>

//                 <FloatingLabel className='firstPartFormGroup' label='Home Phone'>
//                     <Form.Control placeholder='homephone' ref={cohomeNumRef} onChange={()=>params.coAppInfo.setCoHomeNum(cohomeNumRef.current.value)} />
//                 </FloatingLabel>

//                 <FloatingLabel className = 'firstPartFormGroup' label='Work Phone'>
//                     <Form.Control placeholder='workphone' ref={coworkNumRef} onChange={()=>params.coAppInfo.setCoWorkNum(coworkNumRef.current.value)} />
//                 </FloatingLabel>
      

//                 <Form.Group className='firstPartFormStatusOne' >
//                     <FloatingLabel className='coformStatusItems' label='Living Status' >
//                         <Form.Select  ref={colivingStatusRef} onChange={()=>params.coAppInfo.setCoLivingStatus(colivingStatusRef.current.value)}>
//                             <option placeholder='select' >Select</option>
//                             <option value='owner'>Owner</option>
//                             <option value='rent'>Rent</option>
//                             <option value='with parent'>With Parent</option>
//                             <option value='with other'>With Other</option>
//                             <option value='other'>Other</option>
//                         </Form.Select>
//                     </FloatingLabel>
     
//                     <FloatingLabel className='coformStatusItems' label='Marital Status' >
//                         <Form.Select ref={comaritalStatusRef} onChange={()=>params.coAppInfo.setCoMaritalStatus(comaritalStatusRef.current.value)}>
//                             <option placeholder='select' >Select</option>
//                             <option value='married'>Married</option>
//                             <option value='single'>Single</option>
//                             <option value='divorced'>Divorced</option>
//                             <option value='separated'>Separated</option>
//                             <option value='widowed'>Widowed</option>
//                             <option value='common law'>Common Law</option>
//                             <option value='other'>Other</option>
//                         </Form.Select>
//                     </FloatingLabel>
             
//                     <FloatingLabel className='coformStatusItems' label='Citizenship' >
//                         <Form.Select ref={cocitizenshipRef} onChange={()=>params.coAppInfo.setCoCitizenship(cocitizenshipRef.current.value)} >
//                             <option placeholder='select' >Select</option>
//                             <option value='canadian'>Canadian</option>
//                             <option value='chinese'>Chinese</option>
//                             <option value='pr'>PR</option>
//                             <option value='other'>Other</option>
//                         </Form.Select>            
//                     </FloatingLabel>

//                     <FloatingLabel className='coformStatusItems' label='Tax Status'>
//                         <Form.Select ref={cotaxStatusRef} onChange={()=>params.coAppInfo.setCoTaxStatus(cotaxStatusRef.current.value)}>
//                             <option placeholder='select' >Select</option>
//                             <option value='canada'>Canada</option>
//                             <option value='usa'>USA</option>
//                             <option value='both'>Both</option>
//                             <option value='other'>Other</option>
//                         </Form.Select>
//                     </FloatingLabel>
//                 </Form.Group>




//                 <FloatingLabel className='previouslyDeclared' label='Have you previously Declared Bankruptcy?'>
//                     <Form.Select ref={copreviousDeclaredRef} 
//                     onChange={()=>{
//                         params.coAppInfo.setcoDeclared(copreviousDeclaredRef.current.value)
//                         toggleShowDischarge()
//                     }}>
//                         <option value='No'>No</option>
//                         <option value='Yes'>Yes</option>
//                     </Form.Select>  
//                 </FloatingLabel>

//                 {showDischarge===true?(
//                         <FloatingLabel className='dischargeDate' label='Discharge Date'>
//                             <Form.Control type='date' placeholder='dateOfDischarge' ref={codischargeDateRef} onChange={()=>params.coAppInfo.setcoDischargeDate(codischargeDateRef.current.value)} />
//                         </FloatingLabel>
//                 ): null} 

//             </Card>  
//     )
// }