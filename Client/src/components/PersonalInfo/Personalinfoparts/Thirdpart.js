import React, {useRef} from 'react'
import {Card, Form} from 'react-bootstrap'
import './thridpart.css'

export default function Thirdpart(params) {


    const livingStatusRef = useRef();
    const maritalStatusRef = useRef();
    const citizenshipRef = useRef();
    const taxStatusRef = useRef();


    return (
        <Card className='thridPartCard'>
             <Form.Select className='thirdPartSelector' ref={livingStatusRef} onChange={()=>params.personalInfoStatus.setLivingStatus(livingStatusRef.current.value)}>
                <option>Living Status</option>
                <option value='owner'>Owner</option>
                <option value='rent'>Rent</option>
                <option value='with parent'>With Parent</option>
                <option value='with other'>With Other</option>
                <option value='other'>Other</option>
            </Form.Select>

            
            <Form.Select className='thirdPartSelector' ref={maritalStatusRef} onChange={()=>params.personalInfoStatus.setMaritalStatus(maritalStatusRef.current.value)}>
                <option>Marital Status</option>
                <option value='married'>Married</option>
                <option value='single'>Single</option>
                <option value='divorced'>Divorced</option>
                <option value='separated'>Separated</option>
                <option value='widowed'>Widowed</option>
                <option value='common law'>Common Law</option>
                <option value='other'>Other</option>
            </Form.Select>

            <Form.Select className='thirdPartSelector' ref={citizenshipRef} onChange={()=>params.personalInfoStatus.setCitizenship(citizenshipRef.current.value)} >
                <option>Citizenship</option>
                <option value='canadian'>Canadian</option>
                <option value='chinese'>Chinese</option>
                <option value='pr'>PR</option>
                <option value='other'>Other</option>
            </Form.Select>            


            <Form.Select className='thirdPartSelector' ref={taxStatusRef} onChange={()=>params.personalInfoStatus.setTaxStatus(taxStatusRef.current.value)}>
                <option>Tax Status</option>
                <option value='canada'>Canada</option>
                <option value='usa'>USA</option>
                <option value='both'>Both</option>
                <option value='other'>Other</option>
            </Form.Select>

        </Card>
    )
}
