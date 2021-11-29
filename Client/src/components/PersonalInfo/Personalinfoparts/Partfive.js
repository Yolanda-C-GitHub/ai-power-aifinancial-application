import React, {useRef} from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './partfive.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

export default function Partfive(params) {

    const idTypeRef=useRef();
    const idNumRef=useRef();
    const issueDateRef=useRef();
    const expiryDateRef=useRef();
    const verificationDateRef=useRef();

    const issuingProvinceRef=useRef();
    const commentRef=useRef();

    const handleOnChangeInput=(index,e)=>{
        console.log (index, e.target.name)
        const values = [...params.personalInfoPartFive.idArray]
        values[index][e.target.name] = e.target.value;
        params.personalInfoPartFive.setIdArray(values)
    }


    // ()=>params.personalInfoPartFive.setIdType(idTypeRef.current.value)}
    // onChange={()=>params.personalInfoPartFive.setIdNum(idNumRef.current.value)} value={item.idNum} 
    // onChange={()=>params.personalInfoPartFive.setIssueDate(issueDateRef.current.value)
    // onChange={()=>params.personalInfoPartFive.setExpiryDate(expiryDateRef.current.value)}
    // onChange={()=>params.personalInfoPartFive.setVerificationDate(verificationDateRef.current.value)}
    // onChange={()=>params.personalInfoPartFive.setIssuingProvince(issuingProvinceRef.current.value)}
    // onChange={()=>params.personalInfoPartFive.setComments(commentRef.current.value)}

    return (
        <Card className='cardPartFive'>
            {params.personalInfoPartFive.idArray.map((item, index) => 
            
                <Form.Group className='formGroupID' key={index} > 
                    <FloatingLabel className='partFiveIDType' label='ID Type'>
                        <Form.Select  ref={idTypeRef} onChange={(e) => handleOnChangeInput(index,e)}  name='idType' >
                            <option value='provincialDriversLicense'>Provincial Driver's License</option>
                            <option value="provincialPhotoID">Provincial Photo ID</option>
                            <option value="passport">Passport</option>
                            <option value="prCard">PR Card</option>
                            <option value="other">Other</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel className='partFiveIDNum' label='ID Number' >
                        <Form.Control placeholder='idNumber' ref={idNumRef}  onChange={(e) => handleOnChangeInput(index,e)}  name='idNum' />
                    </FloatingLabel>

                    <FloatingLabel className='partFiveIssueDate' label="Issue Date">
                        <Form.Control placeholder='issueDate' type='date' ref={issueDateRef} onChange={(e) => handleOnChangeInput(index,e)}  name='issueDate' />
                    </FloatingLabel>

                    <FloatingLabel className='partFiveExpiryDate' label="Expiry Date">
                        <Form.Control placeholder='expiryDate' type='date' ref={expiryDateRef} onChange={(e) => handleOnChangeInput(index,e)} name='expiryDate'  />
                    </FloatingLabel>

                    <FloatingLabel className='partFiveVerificationDate' label="Verification Date">
                        <Form.Control className='verificationDate' placeholder='verificationDate' type='date' ref={verificationDateRef} onChange={(e) => handleOnChangeInput(index,e)} name='verificationDate' />
                    </FloatingLabel>
            
                    <FloatingLabel className='issuingProvince' label='Issuing Province'>
                        <Form.Select  ref={issuingProvinceRef} name='issuingProvince' onChange={(e) => handleOnChangeInput(index,e)} >
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

                <FloatingLabel className='partFiveComment' label='Comments'>
                        <Form.Control type='textarea' placeholder='comment' ref={commentRef}  onChange={(e) => handleOnChangeInput(index,e)} onChange={(e) => handleOnChangeInput(index,e)} name='comments' />
                </FloatingLabel>
                
                <div className='buttonBox' >
                    <DeleteOutlineIcon className='deleteButton' />
                    <AddBoxOutlinedIcon className='addButton' />
                </div>

                </Form.Group>
            
            )}

        </Card>
    )
}
