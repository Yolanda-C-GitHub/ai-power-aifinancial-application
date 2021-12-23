import React from 'react'
import {Form, FloatingLabel, Button} from 'react-bootstrap'
import './coidinfo.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import DoneIcon from '@mui/icons-material/Done'
import { ariaHidden } from '@mui/base'

export default function Coidinfo(params) {

    const handleOnChangeInput=(index,e)=>{
        console.log(index, e.target.name)
        const value = [...params.copersonalInfoID.coidArray]
        value[index][e.target.name]=e.target.value
        params.copersonalInfoID.setcoIdArray(value)
    }

    const handleAdd = () =>{
        params.copersonalInfoID.setcoIdArray(
            [...params.copersonalInfoID.coidArray,
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

    const handleDelete = (index)=>{
        const values = [...params.copersonalInfoID.coidArray]
        values.splice(index,1)
        params.copersonalInfoID.setcoIdArray(values)
    }


    return (
        <div className='coAppIDContainer'>
            {params.copersonalInfoID.coidArray.map((item, index) => 
                <Form.Group className='coformGroupID' key={index} >
                    <FloatingLabel className='coidItems' label='ID Type' >
                        <Form.Select required
                            onChange={(e)=>handleOnChangeInput(index,e)}
                            name='idType'
                            value={params.copersonalInfoID.coidArray[index].idType}
                        >
                            <option value="">Select</option>
                            <option value='provincialDriversLicense'>Provincial Driver's License</option>
                            <option value="provincialPhotoID">Provincial Photo ID</option>
                            <option value="passport">Passport</option>
                            <option value="prCard">PR Card</option>
                            <option value="other">Other</option>
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel className='coidItems' label='ID Number'>
                        <Form.Control required
                            placeholder='idNumber'
                            onChange={(e)=>handleOnChangeInput(index,e)}
                            name='idNum'
                            value={params.copersonalInfoID.coidArray[index].idNum}
                        >
                        </Form.Control>
                        <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel className='coidItems' label='Issue Date' >
                        <Form.Control required
                            placeholder='issueDate'
                            type='date'
                            onChange={(e)=>handleOnChangeInput(index,e)}
                            name='issueDate'
                            value={params.copersonalInfoID.coidArray[index].issueDate}
                        />
                        <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                    </FloatingLabel>
                    
                    <FloatingLabel className='coidItems' label='Expiry Date' >
                        <Form.Control required
                            placeholder='expiryDate'
                            type='date'
                            onChange={(e)=>handleOnChangeInput(index,e)}
                            name='expiryDate'
                            value={params.copersonalInfoID.coidArray[index].expiryDate}
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
                            value={params.copersonalInfoID.coidArray[index].verificationDate} 
                        />
                        <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                    </FloatingLabel>
                
                    <FloatingLabel className='issuingProvince' label='Issuing Province'>
                        <Form.Select required
                            name='issuingProvince' 
                            onChange={(e) => handleOnChangeInput(index,e)} 
                            value={params.copersonalInfoID.coidArray[index].issuingProvince} >
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
                            value={params.copersonalInfoID.coidArray[index].comments}
                        />
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
            
        </div>

    )
}
