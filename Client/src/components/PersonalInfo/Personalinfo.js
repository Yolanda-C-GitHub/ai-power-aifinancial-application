import React from 'react'
import {Card, Form, Button, Alert, FormGroup, Container} from 'react-bootstrap'
import Firstpart from './Personalinfoparts/Firstpart'
import Secondpart from './Personalinfoparts/Secondpart'

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
                        <div className='col border'>living status</div>
                        <div className='col border'>Martial status</div>
                        <div className='col border'>citizenship</div>
                        <div className='col border'>tax status</div>
                    </div>

                    <div className='row'>
                        <div className ='col border'>house number</div>
                        <div className ='col border'>current rez</div>
                        <div className ='col border'> apt#</div>
                        <div className ='col border'> province</div>
                        <div className ='col border'> postal code</div>
                        <div className ='col border'> since </div>
                    </div>

                    <div className='d-flex justify-content-end'>
                      <Button type='submit'>Next</Button>
                    </div>

                </Form>
            </Container>
    )
}
