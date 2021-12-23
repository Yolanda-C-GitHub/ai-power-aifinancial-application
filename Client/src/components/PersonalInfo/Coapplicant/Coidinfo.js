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
                    </FloatingLabel>

                    {/* <FloatingLabel className='coidItems' label='ID Type'>
                        <Form.Control required>
                            placeholde='id'
                        </Form.Control>
                    </FloatingLabel>
 */}


                </Form.Group>
            )}
            
        </div>

    )
}
