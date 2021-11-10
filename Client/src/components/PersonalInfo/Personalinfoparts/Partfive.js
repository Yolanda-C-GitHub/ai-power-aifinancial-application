import React, {useRef} from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './partfive.css'

export default function Partfive(params) {

    const emailRef = useRef();
    const cellNumRef=useRef();
    const homeNumRef=useRef();
    const workNumRef=useRef();

    const idTypeRef=useRef();
    const idNumRef=useRef();
    const issueDateRef=useRef();
    const expiryDateRef=useRef();
    const verificationDateRef=useRef();




    return (
        <Card className='partFiveCard'>

            <Form.Group className='formGroupEmail'>
                <FloatingLabel className='partFiveEmail' label='Email'>
                    <Form.Control type='email' ref={emailRef} placeholder='Email'/>
                </FloatingLabel>

                <FloatingLabel className='partFiveCell' label='Cell Phone'>
                    <Form.Control placeholder='cellphone'ref={cellNumRef} />
                </FloatingLabel>

                <FloatingLabel className='partFiveHome' label='Home Phone'>
                    <Form.Control placeholder='homephone' ref={homeNumRef} />
                </FloatingLabel>

                <FloatingLabel className = 'partFiveWork' label='Work Phone'>
                    <Form.Control placeholder='workphone' ref={workNumRef} />
                </FloatingLabel>
            </Form.Group> 

            <Form.Group className='formGroupID'>
                <FloatingLabel label='ID Type'>
                    <Form.Select className='partFiveIDType' ref={idTypeRef} >
                        <option value='provincialDriversLicense'>Provincial Driver's License</option>
                        <option value="provincialPhotoID">Provincial Photo ID</option>
                        <option value="passport">Passport</option>
                        <option value="prCard">PR Card</option>
                        <option value="other">Other</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel className='partFiveIDNum' label='ID Number' >
                    <Form.Control placeholder='idNumber' ref={idNumRef} />
                </FloatingLabel>

                 <FloatingLabel label="Issue Date">
                    <Form.Control placeholder='issueDate' type='date' ref={issueDateRef} />
                 </FloatingLabel>

                 <FloatingLabel label="Expiry Date">
                    <Form.Control placeholder='expiryDate' type='date' ref={expiryDateRef} />
                 </FloatingLabel>

                 <FloatingLabel label="Verification Date">
                    <Form.Control placeholder='verificationDate' type='date' ref={verificationDateRef} />
                 </FloatingLabel>
            </Form.Group>


            <Form.Group className='IdInfo'>
                <FloatingLabel label='Issuing Province'>
                    <Form.Select  className='issuingProvince' >
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
                    <Form.Control type='textarea' placeholder='comment' />
               </FloatingLabel>
    
               <FloatingLabel label='Have you previously Declared Bankruptcy?'>
                    <Form.Select className='previouslyDeclared'>
                        <option value='No'>No</option>
                        <option value='Yes'>Yes</option>
                    </Form.Select>  
               </FloatingLabel>

               <FloatingLabel label='Discharge Date'>
                    <Form.Control type='date' placeholder='dateOfDischarge' />
               </FloatingLabel>
            </Form.Group>

        </Card>
    )
}
