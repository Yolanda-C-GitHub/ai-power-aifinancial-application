import React, {useRef} from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './thridpart.css'

export default function Thirdpart(params) {


    const livingStatusRef = useRef();
    const maritalStatusRef = useRef();
    const citizenshipRef = useRef();
    const taxStatusRef = useRef();


    return (
        <Card className='thridPartCard'>

            <FloatingLabel label='Living Status'>
                <Form.Select className='thirdPartSelector' ref={livingStatusRef} onChange={()=>params.personalInfoStatus.setLivingStatus(livingStatusRef.current.value)}>
                    <option placeholder='select' >Select</option>
                    <option value='owner'>Owner</option>
                    <option value='rent'>Rent</option>
                    <option value='with parent'>With Parent</option>
                    <option value='with other'>With Other</option>
                    <option value='other'>Other</option>
                </Form.Select>
            </FloatingLabel>


            <FloatingLabel label='Marital Status' >
                <Form.Select className='thirdPartSelector' ref={maritalStatusRef} onChange={()=>params.personalInfoStatus.setMaritalStatus(maritalStatusRef.current.value)}>
                    <option placeholder='select' >Select</option>
                    <option value='married'>Married</option>
                    <option value='single'>Single</option>
                    <option value='divorced'>Divorced</option>
                    <option value='separated'>Separated</option>
                    <option value='widowed'>Widowed</option>
                    <option value='common law'>Common Law</option>
                    <option value='other'>Other</option>
                </Form.Select>
            </FloatingLabel>

            <FloatingLabel label='Citizenship' >
                <Form.Select className='thirdPartSelector' ref={citizenshipRef} onChange={()=>params.personalInfoStatus.setCitizenship(citizenshipRef.current.value)} >
                    <option placeholder='select' >Select</option>
                    <option value='canadian'>Canadian</option>
                    <option value='chinese'>Chinese</option>
                    <option value='pr'>PR</option>
                    <option value='other'>Other</option>
                </Form.Select>            
            </FloatingLabel>

            <FloatingLabel label='Tax Status'>
                <Form.Select className='thirdPartSelector' ref={taxStatusRef} onChange={()=>params.personalInfoStatus.setTaxStatus(taxStatusRef.current.value)}>
                    <option placeholder='select' >Select</option>
                    <option value='canada'>Canada</option>
                    <option value='usa'>USA</option>
                    <option value='both'>Both</option>
                    <option value='other'>Other</option>
                </Form.Select>
            </FloatingLabel>

        </Card>
    )
}
