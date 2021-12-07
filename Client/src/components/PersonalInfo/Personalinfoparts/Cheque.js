import React, {useRef} from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './cheque.css'

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


 



    return (
        <Card className='chequeInfoCard'>

            {params.personalInfoChequeArray.chequeArray.map((item, index) => 
                <Form.Group className='formGroupCheque' key={index} > 
            
                
                    <FloatingLabel className='bankName' label='Bank Name' >
                        <Form.Control placeholder='Bank Name' name='bankName'  value={params.personalInfoChequeArray.chequeArray[index].bankName} />
                    </FloatingLabel>

                    <FloatingLabel className='' label='Institution' >
                        <Form.Control placeholder='Institution' name='institution'  value={params.personalInfoChequeArray.chequeArray[index].institution} />
                    </FloatingLabel>

                    <FloatingLabel className='' label='Account #' >
                        <Form.Control placeholder='Account Number' name='accountNum'  value={params.personalInfoChequeArray.chequeArray[index].accountNum} />
                    </FloatingLabel>

                    <FloatingLabel className='' label='Transit #' >
                        <Form.Control placeholder='Transit Number' name='transitNum'  value={params.personalInfoChequeArray.chequeArray[index].transitNum} />
                    </FloatingLabel>

                    <Form.Check className='currentEmployerCheckBox' name='verified' type='checkbox' checked={params.personalInfoChequeArray.chequeArray[index].verified} label='Verified' 
                    onChange={(e)=>{
                        handleOnchangeCheck(index,e)
                    }}


                    />


                
                </ Form.Group>
            )}















        </Card>
    )
}
