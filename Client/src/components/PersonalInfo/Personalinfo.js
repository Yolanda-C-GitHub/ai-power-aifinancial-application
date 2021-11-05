import React from 'react'
import {Card, Form, Button, Alert, FormGroup, Container} from 'react-bootstrap'
import Firstpart from './Personalinfoparts/Firstpart'
import Secondpart from './Personalinfoparts/Secondpart'
import Thirdpart from './Personalinfoparts/Thirdpart'
import Fourthpart from './Personalinfoparts/Fourthpart'

export default function Personalinfo() {
    return (
            <Container className=' border'>
                <h2 className='text-center'>Personal Info</h2>
                <Form>
                    <div className='row'>
                        <Firstpart/>
                    </div>

                    <div className ='row'>
                        <Secondpart />
                    </div>

                    <div className ='row'>
                        <Thirdpart />
                    </div>

                    <div className='row'>
                        <Fourthpart />
                    </div>

                    <div className='d-flex justify-content-end'>
                      <Button type='submit'>Next</Button>
                    </div>

                </Form>
            </Container>
    )
}
