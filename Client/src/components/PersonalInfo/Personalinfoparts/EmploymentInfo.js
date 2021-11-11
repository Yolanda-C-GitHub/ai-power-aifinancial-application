import React from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './employmentinfo.css'

export default function EmploymentInfo() {
    return (
        <Card className='employmentInfoCard' >
            <h3 className='employmentInfoLabel'> Employment Info </h3>

            <Form.Group className='employerSection'>
                <FloatingLabel label='Employment Status'>
                    <Form.Select className='employmentStatus' >
                        <option>Select</option>
                        <option value='employed' >Employed</option>
                        <option value="selfEmployed">Self Employed</option>
                        <option value="retired">Retuired</option>
                        <option value="student">Student</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="other">Other</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel label='Annual Income'>
                    <Form.Control className='annualIncome' placeholder='Annual Income' />
                </FloatingLabel>

                <FloatingLabel label='Employer Name'>
                    <Form.Control placeholder='Employer Name' /> 
                </FloatingLabel>

                <FloatingLabel label='Industry'>
                    <Form.Control className='industry' placeholder='Industry' /> 
                </FloatingLabel>

                <FloatingLabel label='Occupation'>
                    <Form.Control className='occupation' placeholder='Occupation' /> 
                </FloatingLabel>
            </Form.Group>

            <Form.Group>
                
            </Form.Group>




        </Card>
    )
}
