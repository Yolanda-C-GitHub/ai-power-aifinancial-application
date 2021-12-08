import React, {useRef} from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './cheque.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

export default function Cheque(params) {

    function handleOnchangeInput(index, e){
        const values = [...params.personalInfoChequeArray.chequeArray]    
        values[index][e.target.name] = e.target.value;
        params.personalInfoChequeArray.setChequeArray(values)
    }

    function handleOnchangeCheck(index, e){
        const values = [...params.personalInfoChequeArray.chequeArray]    
        values[index][e.target.name] = e.target.checked;
        params.personalInfoChequeArray.setChequeArray(values)
    }

    function handleAdd(){
        params.personalInfoChequeArray.setChequeArray([
            ...params.personalInfoChequeArray.chequeArray,
            {
                chequeID:'',
                transitNum:'',
                institution:'',
                accountNum:'',
                bankName:'',
                address:'',
                verified:false,
                verifiedDate:'',
            }

        ])
    }
 
    function handleDelete(index){
        const values = [...params.personalInfoChequeArray.chequeArray]
        values.splice(index, 1);
        params.personalInfoChequeArray.setChequeArray(values)
    }


    // require value for chequeID
    function createChequeID(){
        
    }



    return (
        <Card className='chequeInfoCard'>

            {params.personalInfoChequeArray.chequeArray.map((item, index) => 
                <Form.Group className='formGroupCheque' key={index} > 
            
                
                    <FloatingLabel className='chequeArrayBankName' label='Bank Name' >
                        <Form.Control placeholder='Bank Name' onChange={(e)=>handleOnchangeInput(index,e)} name='bankName'  value={params.personalInfoChequeArray.chequeArray[index].bankName} />
                    </FloatingLabel>

                    <FloatingLabel className='chequeArrayInstitution' label='Institution' >
                        <Form.Control placeholder='Institution' onChange={(e)=>handleOnchangeInput(index,e)} name='institution'  value={params.personalInfoChequeArray.chequeArray[index].institution} />
                    </FloatingLabel>

                    <FloatingLabel className='chequeArrayAccountNum' label='Account #' >
                        <Form.Control placeholder='Account Number' onChange={(e)=>handleOnchangeInput(index,e)} name='accountNum'  value={params.personalInfoChequeArray.chequeArray[index].accountNum} />
                    </FloatingLabel>

                    <FloatingLabel className='chequeArrayTransitNum' label='Transit #' >
                        <Form.Control placeholder='Transit Number' onChange={(e)=>handleOnchangeInput(index,e)} name='transitNum'  value={params.personalInfoChequeArray.chequeArray[index].transitNum} />
                    </FloatingLabel>

                    <FloatingLabel className='chequeArrayAddress' label='Address' >
                        <Form.Control placeholder='Address' onChange={(e)=>handleOnchangeInput(index,e)} name='address'  value={params.personalInfoChequeArray.chequeArray[index].address} />
                    </FloatingLabel>


                    <Form.Check className='chequeArrayVerified' name='verified' type='checkbox' checked={params.personalInfoChequeArray.chequeArray[index].verified} label='Verified' 
                    onChange={(e)=>{
                        handleOnchangeCheck(index,e)
                    }}
                    />
                    
                    {index===0? (
                        <></>
                    ):(
                        <DeleteOutlineIcon className='chequeArrayAdd' onClick={(e)=> handleDelete(index,e)} />
                    )}

                    {index>0? (
                        <></>
                    ):(
                        <AddBoxOutlinedIcon className='chequeArrayDelete' onClick={()=> handleAdd()} />
                    )}  
                       
                
                </ Form.Group>
            )}
















        </Card>
    )
}
