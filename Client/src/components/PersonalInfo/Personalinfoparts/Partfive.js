import React from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'

export default function Partfive() {
    return (
        <Card className='partFiveCard'>

            <Form.Group>
                <FloatingLabel className='partFiveEmail' label='Email'>
                    <Form.Control placeholder='Email'/>
                </FloatingLabel>

                <FloatingLabel className='partFiveCell' label='Cell Phone'>
                    <Form.Control placeholder='cellphone'/>
                </FloatingLabel>

                <FloatingLabel className='partFiveHome' label='Home Phone'>
                    <Form.Control placeholder='homephone' />
                </FloatingLabel>

                <FloatingLabel className = 'partFiveWork' label='Work Phone'>
                    <Form.Control placeholder='workphone' />
                </FloatingLabel>
            </Form.Group>

            <Form.Group>
                <Form.Select>
                    <option value="ON">ON</option>
                </Form.Select>
            </Form.Group>

        </Card>
    )
}
