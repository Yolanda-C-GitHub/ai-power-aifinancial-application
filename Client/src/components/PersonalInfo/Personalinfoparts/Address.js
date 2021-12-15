import React, {useRef, useState} from 'react'
import {Card, FloatingLabel,Form} from 'react-bootstrap'
import './addressinfo.css'
import moment from 'moment'

export default function Address(params) {
    
    const houseNumRef=useRef();
    const currentRezRef=useRef();
    const aptNumRef=useRef();
    const provinceRef=useRef();
    const postalCodeRef=useRef();
    const rezSinceRef=useRef();
    const houseNumRef2=useRef();
    const currentRezRef2=useRef();
    const aptNumRef2=useRef();
    const provinceRef2=useRef();
    const postalCodeRef2=useRef();
    const rezSinceRef2=useRef();


    function numberDaysBetween(){
        const sinceDate = moment(rezSinceRef.current.value,"YYYY/MM/DD")
        const todaysDate = moment(moment().startOf('day'),'YYYY/MM/DD')
        const daysBetween = moment.duration(todaysDate.diff(sinceDate)).asDays()
        console.log(daysBetween)
        
        if(daysBetween < 730){
            params.personalInfoRez.setShowRez2(true)
        }else{
            params.personalInfoRez2.setHouseNum2('')
            params.personalInfoRez2.setCurrentRez2('')
            params.personalInfoRez2.setAptNum2('')
            params.personalInfoRez2.setProvince2('')
            params.personalInfoRez2.setPostalCode2('')
            params.personalInfoRez2.setRezSince2('')
            params.personalInfoRez.setShowRez2(false)
        }

    }

    return (
        <Card className='fourthPartCard'> 

            <Form.Group className='fourthPartFormGroup'>
                <FloatingLabel className='fourthPartHouseNumber' label='House #'>
                    <Form.Control required
                        placeholder='house#'
                        ref={houseNumRef}
                        onChange={(e)=>{
                            params.personalInfoRez.setHouseNum(e.target.value)
                        }}
                    />
                    <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel className='fourthPartAddress' label='Current Residence'>
                    <Form.Control required
                        placeholder='Address'
                        ref={currentRezRef}
                        onChange={(e)=>{
                            params.personalInfoRez.setCurrentRez(e.target.value)
                        }}
                    />
                    <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel className='fourthPartAptNum' label='APT#'>
                    <Form.Control required
                        placeholder='apt#' 
                        ref={aptNumRef} 
                        onChange={(e)=>{
                            params.personalInfoRez.setAptNum(e.target.value)
                        }}
                    />
                    <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel label='Province'>
                    <Form.Select required
                        className='fourthPartSelector' 
                        ref={provinceRef}
                        onChange={(e)=>{
                            params.personalInfoRez.setProvince(e.target.value)
                        }}
                    >
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
                    <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                </FloatingLabel>           

                <FloatingLabel className='fourthPartPostalCode' label='Postal Code'>
                    <Form.Control  required
                        placeholder='postal'
                        pattern='[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]'
                        ref={postalCodeRef}
                        onChange={(e)=>{
                            params.personalInfoRez.setPostalCode(e.target.value)
                        }} 
                    />
                    <Form.Control.Feedback type='invalid'>Required Field, Format Must Be "A1A 1A1"</Form.Control.Feedback>
                </FloatingLabel>
                
                <FloatingLabel label='Since'>
                    <Form.Control required
                        type='date'
                        placeholder='date' 
                        ref={rezSinceRef} 
                        onChange={(e)=> {
                            params.personalInfoRez.setRezSince(e.target.value)
                            numberDaysBetween()
                        }}  
                    />
                    <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>


            {params.personalInfoRez.showRez2===true? 
                (
                    <Form.Group className='fourthPartFormGroup'>
                        <FloatingLabel className='fourthPartHouseNumber' label='House #'>
                            <Form.Control required
                                placeholder='house#'
                                ref={houseNumRef2} 
                                onChange={(e)=>{
                                    params.personalInfoRez2.setHouseNum2(e.target.value)
                                }}
                            />
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel className='fourthPartAddress' label='Previous Resident'>
                            <Form.Control required 
                                placeholder='Address'
                                ref={currentRezRef2}
                                onChange={(e)=>{
                                    params.personalInfoRez2.setCurrentRez2(e.target.value)
                                }} 
                            />
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel className='fourthPartAptNum' label='APT#'>
                            <Form.Control required
                                placeholder='apt#'
                                ref={aptNumRef2}
                                onChange={(e)=>{
                                    params.personalInfoRez2.setAptNum2(e.target.value)
                                }}
                            />
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel label='Province'>
                            <Form.Select required
                                className='fourthPartSelector'
                                ref={provinceRef2}
                                onChange={(e)=>{
                                    params.personalInfoRez2.setProvince2(e.target.value)
                                }}
                            >
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
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>           
                        </FloatingLabel>
                        
                        <FloatingLabel className='fourthPartPostalCode' label='Postal Code'>
                            <Form.Control required
                                pattern='[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]'
                                placeholder='postal' 
                                ref={postalCodeRef2} 
                                onChange={(e)=>{
                                    params.personalInfoRez2.setPostalCode2(e.target.value)
                                }}
                            />
                            <Form.Control.Feedback type='invalid'>Required Field, Format Must Be "A1A 1A1"</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel label='Since'>
                            <Form.Control required 
                                type='date' 
                                placeholder='date'
                                ref={rezSinceRef2}
                                onChange={(e)=>{
                                    params.personalInfoRez2.setRezSince2(e.target.value)
                                }}
                            />
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                ):null
            }


        </Card>
    )
}