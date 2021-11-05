import React from 'react'
import {Card, FloatingLabel,Form} from 'react-bootstrap'
import './fourthpart.css'

export default function Fourthpart() {
    return (
        <Card className='fourthPartCard'> 

            <FloatingLabel label='House Number'>
                <Form.Control placeholder='house#' />
            </FloatingLabel>

            <FloatingLabel label='Current Residence'>
                <Form.Control placeholder='Address' />
            </FloatingLabel>

            <FloatingLabel label='APT#'>
                <Form.Control />
            </FloatingLabel>

            <Form.Select className=''>
                <option>Province</option>
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

            <FloatingLabel label='Postal Code'>
                <Form.Control  placeholder='postal'/>
            </FloatingLabel>

            <FloatingLabel label='Since'>
                <Form.Control type='date'  placeholder='date'/>
            </FloatingLabel>

        </Card>
    )
}