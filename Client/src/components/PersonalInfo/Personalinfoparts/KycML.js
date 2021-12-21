import React from 'react'
import './kycML.css'
import {Card, Form, FloatingLabel} from 'react-bootstrap'

export default function KycML() {
    return (
        <div>
             <h3>Manual Life</h3>
                <FloatingLabel className='kycquestions' label='1. What is your investment horizon - when will you want to use your invested money?'>
                    <Form.Control 
                        placeholder='1. What is your investment horizon - when will you want to use your invested money?'
                        value=''
                        onChange={(e) => {
                            
                        }}
                        
                    />
                </FloatingLabel>

                <FloatingLabel className='kycquestions' label='2. What is your most important investment goal?'>
                    <Form.Control 
                        placeholder='2. What is your most important investment goal?'
                        value=''
                        onChange={(e) => {
                            
                        }}

                    />
                </FloatingLabel>

                <FloatingLabel className='kycquestions' label='3. Which of the following would best describe your level of investment knowledge?'>
                    <Form.Control 
                        placeholder='3. Which of the following would best describe your level of investment knowledge?'
                        value=''
                        onChange={(e) => {
                            
                        }}

                    />
                </FloatingLabel>

                <FloatingLabel className='kycquestions' label='4. Please indicate which statement reflects your overall view on managing risk?'>
                    <Form.Control 
                        placeholder='4. Please indicate which statement reflects your overall view on managing risk?'
                        value=''
                        onChange={(e) => {
                            
                        }}

                    />
                </FloatingLabel>

                <FloatingLabel className='kycquestions' label='5. If you owned an investmentthat fell by 20% over a period of 6 or 9 months, what would you do?'>
                    <Form.Control 
                        placeholder='5. If you owned an investmentthat fell by 20% over a period of 6 or 9 months, what would you do?'
                        value=''
                        onChange={(e) => {
                            
                        }}

                    />
                </FloatingLabel>

                <FloatingLabel className='kycquestions' label='6. The following portfollos show a best and worst range of return possible in any given year. Which protfolio would you be most likely to hold?'>
                    <Form.Control 
                        placeholder='6. The following portfollos show a best and worst range of return possible in any given year. Which protfolio would you be most likely to hold?'
                        value=''
                        onChange={(e) => {
                            
                        }}

                    />
                </FloatingLabel>

                <FloatingLabel className='kycquestions' label='7. If you could increase your chances of improving your investment returns by taking more risk, would you be:'>
                    <Form.Control 
                        placeholder='7. If you could increase your chances of improving your investment returns by taking more risk, would you be:'
                        value=''
                        onChange={(e) => {
                            
                        }}

                    />
                </FloatingLabel>

                <FloatingLabel className='kycquestions' label='8. What type of investor are you?'>
                    <Form.Control 
                        placeholder='8. What type of investor are you?'
                        value=''
                        onChange={(e) => {
                            
                        }}

                    />
                </FloatingLabel>
        </div>
    )
}
