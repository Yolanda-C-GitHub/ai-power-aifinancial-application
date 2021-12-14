import React, {useRef, useState} from 'react'
import {Card, Form, FloatingLabel, Button} from 'react-bootstrap'
import './idinfo.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

export default function Partfive(params) {

    const handleOnChangeInput=(index,e)=>{
        console.log (index, e.target.name)
        const values = [...params.personalInfoPartFive.idArray]
        values[index][e.target.name] = e.target.value;
        params.personalInfoPartFive.setIdArray(values)
    }
    const handleAdd = () => {
        params.personalInfoPartFive.setIdArray(
            [...params.personalInfoPartFive.idArray,
                {
                    idType:'',
                    idNum:'',
                    issueDate:'',
                    expiryDate:'',
                    verificationDate:'',
                    issuingProvince:'',
                    comments:'',
                }
            ]
        )
    }
    const handleDelete =(index)=>{
        const values = [...params.personalInfoPartFive.idArray]
        values.splice(index,1) 
        params.personalInfoPartFive.setIdArray(values);
    }


    return (
            <div className='formPartFive'>    
                {params.personalInfoPartFive.idArray.map((item, index) => 
                
                    <Form.Group className='formGroupID' key={index} > 
                        <FloatingLabel className='partFiveIDType' label='ID Type'>
                            <Form.Control required
                                as='select' 
                                onChange={(e) => handleOnChangeInput(index,e)} 
                                name='idType'  
                                value={params.personalInfoPartFive.idArray[index].idType} 
                            >
                                <option value="">Select</option>
                                <option value='provincialDriversLicense'>Provincial Driver's License</option>
                                <option value="provincialPhotoID">Provincial Photo ID</option>
                                <option value="passport">Passport</option>
                                <option value="prCard">PR Card</option>
                                <option value="other">Other</option>
                            </Form.Control>
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel className='partFiveIDNum' label='ID Number' >
                            <Form.Control required
                                placeholder='idNumber' 
                                onChange={(e) => handleOnChangeInput(index,e)}  
                                name='idNum'  
                                value={params.personalInfoPartFive.idArray[index].idNum}
                            />
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel className='partFiveIssueDate' label="Issue Date">
                            <Form.Control required
                                placeholder='issueDate' 
                                type='date' 
                                onChange={(e) => handleOnChangeInput(index,e)} 
                                name='issueDate' 
                                value={params.personalInfoPartFive.idArray[index].issueDate}
                            />
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel className='partFiveExpiryDate' label="Expiry Date">
                            <Form.Control required
                                placeholder='expiryDate'
                                type='date' 
                                onChange={(e) => handleOnChangeInput(index,e)} 
                                name='expiryDate' 
                                value={params.personalInfoPartFive.idArray[index].expiryDate}
                            />
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel className='partFiveVerificationDate' label="Verification Date">
                            <Form.Control required
                                className='verificationDate' 
                                placeholder='verificationDate' 
                                type='date' 
                                name='verificationDate' 
                                onChange={(e) => handleOnChangeInput(index,e)}
                                value={params.personalInfoPartFive.idArray[index].verificationDate} 
                            />
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>
                
                        <FloatingLabel className='issuingProvince' label='Issuing Province'>
                            <Form.Select required
                                as='select'
                                name='issuingProvince' 
                                onChange={(e) => handleOnChangeInput(index,e)} 
                                value={params.personalInfoPartFive.idArray[index].issuingProvince} >
                                <option value=''>Select</option>
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
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel className='partFiveComment' label='Comments'>
                                <Form.Control
                                    type='textarea' 
                                    placeholder='comment'  
                                    onChange={(e) => handleOnChangeInput(index,e)} 
                                    name='comments' 
                                    value={params.personalInfoPartFive.idArray[index].comments} />
                        </FloatingLabel>
                        
                        <div className='buttonBox' >
                            {index === 0?(
                                <></>
                            ):(
                            <DeleteOutlineIcon className='deleteButton' onClick={() => handleDelete(index) } />
                            )}
                            
                            {index > 0?(
                                <></>
                            ):(
                            <AddBoxOutlinedIcon className='addButton' onClick={() => handleAdd()} />
                            )}
                            
                        </div>
            
                    </Form.Group>
                
                )}

                <div className='idSubmitButton'>
                    <Button type='submit' >Save to State</Button>
                </div>

            </div>

    )
}
