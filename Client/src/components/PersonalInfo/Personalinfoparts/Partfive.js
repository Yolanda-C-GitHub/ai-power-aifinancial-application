import React, {useRef, useState} from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './partfive.css'

export default function Partfive(params) {

    const idTypeRef=useRef();
    const idNumRef=useRef();
    const issueDateRef=useRef();
    const expiryDateRef=useRef();
    const verificationDateRef=useRef();

    const issuingProvinceRef=useRef();
    const commentRef=useRef();
    const previousDeclaredRef = useRef();
    const dischargeDateRef=useRef();

    const [showDischarge, setShowDischarge]=useState(false);
    
    function toggleShowDischarge(){
        if(params.personalInfoPartFive.declared==='No'){
            setShowDischarge(true)   
        } else{
            params.personalInfoPartFive.setDischargeDate('')
            setShowDischarge(false)
        }
    }

    return (
        <Card className='cardPartFive'>

            <Form.Group className='formGroupID'> 
                <FloatingLabel label='ID Type'>
                    <Form.Select className='partFiveIDType' ref={idTypeRef} onChange={()=>params.personalInfoPartFive.setIdType(idTypeRef.current.value)}>
                        <option value='provincialDriversLicense'>Provincial Driver's License</option>
                        <option value="provincialPhotoID">Provincial Photo ID</option>
                        <option value="passport">Passport</option>
                        <option value="prCard">PR Card</option>
                        <option value="other">Other</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel className='partFiveIDNum' label='ID Number' >
                    <Form.Control placeholder='idNumber' ref={idNumRef} onChange={()=>params.personalInfoPartFive.setIdNum(idNumRef.current.value)}/>
                </FloatingLabel>

                 <FloatingLabel label="Issue Date">
                    <Form.Control placeholder='issueDate' type='date' ref={issueDateRef} onChange={()=>params.personalInfoPartFive.setIssueDate(issueDateRef.current.value)} />
                 </FloatingLabel>

                 <FloatingLabel label="Expiry Date">
                    <Form.Control placeholder='expiryDate' type='date' ref={expiryDateRef} onChange={()=>params.personalInfoPartFive.setExpiryDate(expiryDateRef.current.value)} />
                 </FloatingLabel>

                 <FloatingLabel label="Verification Date">
                    <Form.Control className='verificationDate' placeholder='verificationDate' type='date' ref={verificationDateRef} onChange={()=>params.personalInfoPartFive.setVerificationDate(verificationDateRef.current.value)} />
                 </FloatingLabel>
            </Form.Group>

            <Form.Group className='IdInfo'>
                <FloatingLabel label='Issuing Province'>
                    <Form.Select  className='issuingProvince' ref={issuingProvinceRef} onChange={()=>params.personalInfoPartFive.setIssuingProvince(issuingProvinceRef.current.value)} >
                        <option value='ON'>ON</option>
                        <option value='AB'>AB</option>
                        <option value='BC'>BC</option>
                        <option value='MB'>MB</option>
                        <option value='NB'>NB</option>
                        <option value='NL'>NL</option>
                        <option value="NT">NT</option>
                        <option value='NS'>NS</option>
                        <option value='NU'>NU</option>
                        <option value='PE'>PE</option>
                        <option value='QC'>QC</option>
                        <option value='SK'>SK</option>
                        <option value='YT'>YT</option>
                    </Form.Select>  
                </FloatingLabel>

               <FloatingLabel label='Comments'>
                    <Form.Control type='textarea' placeholder='comment' ref={commentRef} onChange={()=>params.personalInfoPartFive.setComments(commentRef.current.value)} />
               </FloatingLabel>
    
               <FloatingLabel label='Have you previously Declared Bankruptcy?'>
                    <Form.Select className='previouslyDeclared' ref={previousDeclaredRef} 
                    onChange={()=>{
                        params.personalInfoPartFive.setDeclared(previousDeclaredRef.current.value)
                        toggleShowDischarge()
                    }}>
                        <option value='No'>No</option>
                        <option value='Yes'>Yes</option>
                    </Form.Select>  
               </FloatingLabel>

               {showDischarge===true?(
                    <FloatingLabel label='Discharge Date'>
                        <Form.Control type='date' placeholder='dateOfDischarge' ref={dischargeDateRef} onChange={()=>params.personalInfoPartFive.setDischargeDate(dischargeDateRef.current.value)} />
                    </FloatingLabel>
               ): null} 
            </Form.Group>

        </Card>
    )
}
