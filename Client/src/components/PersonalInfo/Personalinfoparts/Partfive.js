import React from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './partfive.css'

export default function Partfive() {
    return (
        <Card className='partFiveCard'>

            <Form.Group className='formGroupEmail'>
                <FloatingLabel className='partFiveEmail' label='Email'>
                    <Form.Control type='email' placeholder='Email'/>
                </FloatingLabel>

                <FloatingLabel className='partFiveCell' label='Cell Phone'>
                    <Form.Control placeholder='cellphone'/>
                </FloatingLabel>

                <FloatingLabel className='partFiveHome' label='Home Phone'>
                    <Form.Control placeholder='homephone' />
                </FloatingLabel>

                <FloatingLabel className = 'partFiveWork' label='Work Phone'>
                    <Form.Control placeholder='workphone' />
                </FloatingLabel>
            </Form.Group> 

            <Form.Group className='formGroupID'>
                <FloatingLabel label='ID Type'>
                    <Form.Select className='partFiveIDType'>
                        <option value='provincialDriversLicense'>Provincial Driver's License</option>
                        <option value="provincialPhotoID">Provincial Photo ID</option>
                        <option value="passport">Passport</option>
                        <option value="prCard">PR Card</option>
                        <option value="other">Other</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel className='partFiveIDNum' label='ID Number' >
                    <Form.Control placeholder='idNumber' />
                </FloatingLabel>

                 <FloatingLabel label="Issue Date">
                    <Form.Control placeholder='issueDate' type='date' />
                 </FloatingLabel>

                 <FloatingLabel label="Expiry Date">
                    <Form.Control placeholder='expiryDate' type='date' />
                 </FloatingLabel>

                 <FloatingLabel label="Verification Date">
                    <Form.Control placeholder='verificationDate' type='date' />
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
