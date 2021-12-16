import React from 'react'
import './kyc.css'
import {Card, Form, FloatingLabel} from 'react-bootstrap'

export default function Kyc() {
    return (
        <Card className='KycInfoCard'>
            <Form.Group>
                <FloatingLabel className='kycquestions' label='1. How old are you?'>
                    <Form.Control 
                        placeholder='1. How old are you?'
                        value=''
                        onChange={(e) => {
                           
                        }}

                    />
                </FloatingLabel>

                <FloatingLabel className='kycquestions' label='2. When do you plan to start withdrawing at least 25% of your savings?'>
                    <Form.Control 
                        placeholder='2. When do you plan to start withdrawing at least 25% of your savings?'
                        value=''
                        onChange={(e) => {
                           
                        }}

                    />
                </FloatingLabel>

                <FloatingLabel className='kycquestions' label='3. Over the next five years, you plan to:'>
                    <Form.Control 
                        placeholder='3. Over the next five years, you plan to:'
                        value=''
                        onChange={(e) => {
                           
                        }}

                    />
                </FloatingLabel>

                <FloatingLabel className='kycquestions' label='4. What is your gross annual income? (before taxes)'>
                    <Form.Control 
                        placeholder='4. What is your gross annual income? (before taxes)'
                        value=''
                        onChange={(e) => {
                           
                        }}

                    />
                </FloatingLabel>

                <FloatingLabel className='kycquestions' label='5. What is your net worth? (assets minus liabilities)'>
                    <Form.Control 
                        placeholder='5. What is your net worth? (assets minus liabilities)'
                        value=''
                        onChange={(e) => {
                           
                        }}

                    />
                </FloatingLabel>


                <FloatingLabel className='kycquestions' label='6. Indicate your level of tolerance toward the risks related to the investment of your money.'>
                    <Form.Control 
                        placeholder='6. Indicate your level of tolerance toward the risks related to the investment of your money.'
                        value=''
                        onChange={(e) => {
                           
                        }}

                    />
                </FloatingLabel>


                <FloatingLabel className='kycquestions' label='7. You have the possibility of investing $10,000 for one year. After one year, in what range would you accept the final potential value of your investment?'>
                    <Form.Control 
                        className='kycControlSize'
                        type='text'
                        placeholder='7. You have the possibility of investing $10,000 for one year. After one year, in what range would you accept the final potential value of your investment?'
                        value=''
                        onChange={(e) => {
                           
                        }}

                    />
                </FloatingLabel>

                <FloatingLabel className='kycquestions' label='8. What is your level of knowledge about investments?'>
                    <Form.Control 
                        placeholder='8. What is your level of knowledge about investments?'
                        value=''
                        onChange={(e) => {
                           
                        }}

                    />
                </FloatingLabel>
            </Form.Group>
        </Card>
    )
}
