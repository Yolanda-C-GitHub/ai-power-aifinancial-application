import React from 'react'
import './kyc.css'
import {Card, Form, FloatingLabel} from 'react-bootstrap'

export default function Kyc() {
    return (
        <Card className='KycInfoCard'>
            <Form.Group>
                <FloatingLabel className='' label='WeChat ID'>
                    <Form.Control 
                        placeholder='WeChat ID'
                        value=''
                        onChange={(e) => {
                           
                        }}

                    />
                </FloatingLabel>
            </Form.Group>
        </Card>
    )
}
