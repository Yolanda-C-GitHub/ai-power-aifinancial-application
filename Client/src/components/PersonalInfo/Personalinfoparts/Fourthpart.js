import React, {useRef, useState} from 'react'
import {Card, FloatingLabel,Form} from 'react-bootstrap'
import './fourthpart.css'
import moment from 'moment'

export default function Fourthpart(params) {
    
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

    const[showRez2, setShowRez2]=useState(false);


    function numberDaysBetween(){
        const sinceDate = moment(rezSinceRef.current.value,"YYYY/MM/DD")
        const todaysDate = moment(moment().startOf('day'),'YYYY/MM/DD')
        const daysBetween = moment.duration(todaysDate.diff(sinceDate)).asDays()
        console.log(daysBetween)
        
        if(daysBetween < 730){
            setShowRez2(true)
        }else{
            params.personalInfoRez2.setHouseNum2('')
            params.personalInfoRez2.setCurrentRez2('')
            params.personalInfoRez2.setAptNum2('')
            params.personalInfoRez2.setProvince2('')
            params.personalInfoRez2.setPostalCode2('')
            params.personalInfoRez2.setRezSince2('')
            setShowRez2(false)
        }

    }

    return (
        <Card className='fourthPartCard'> 

             
            <Form.Group className='fourthPartFormGroup'>
                <FloatingLabel className='fourthPartHouseNumber' label='House #'>
                    <Form.Control placeholder='house#' ref={houseNumRef} onChange={()=>params.personalInfoRez.setHouseNum(houseNumRef.current.value)} />
                </FloatingLabel>

                <FloatingLabel className='fourthPartAddress' label='Current Residence'>
                    <Form.Control placeholder='Address' ref={currentRezRef} onChange={()=>params.personalInfoRez.setCurrentRez(currentRezRef.current.value)} />
                </FloatingLabel>

                <FloatingLabel className='fourthPartAptNum' label='APT#'>
                    <Form.Control placeholder='apt#' ref={aptNumRef} onChange={()=> params.personalInfoRez.setAptNum(aptNumRef.current.value)} />
                </FloatingLabel>

                <FloatingLabel label='Province'>
                    <Form.Select className='fourthPartSelector' ref={provinceRef} onChange={()=>params.personalInfoRez.setProvince(provinceRef.current.value)} >
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
                </FloatingLabel>           

                <FloatingLabel className='fourthPartPostalCode' label='Postal Code'>
                    <Form.Control  placeholder='postal'  ref={postalCodeRef} onChange={()=>params.personalInfoRez.setPostalCode(postalCodeRef.current.value)} />
                </FloatingLabel>

                <FloatingLabel label='Since'>
                    <Form.Control type='date'  placeholder='date' ref={rezSinceRef} 
                        onChange={()=> {
                            params.personalInfoRez.setRezSince(rezSinceRef.current.value)
                            numberDaysBetween()
                        }}  
                    />
                </FloatingLabel>
            </Form.Group>


            {showRez2===true? 
                (
                    <Form.Group className='fourthPartFormGroup'>
                        <FloatingLabel className='fourthPartHouseNumber' label='House #'>
                            <Form.Control placeholder='house#' ref={houseNumRef2} onChange={()=>params.personalInfoRez2.setHouseNum2(houseNumRef2.current.value)} />
                        </FloatingLabel>

                        <FloatingLabel className='fourthPartAddress' label='Previous Resident'>
                            <Form.Control placeholder='Address' ref={currentRezRef2} onChange={()=>params.personalInfoRez2.setCurrentRez2(currentRezRef2.current.value)} />
                        </FloatingLabel>

                        <FloatingLabel className='fourthPartAptNum' label='APT#'>
                            <Form.Control placeholder='apt#' ref={aptNumRef2} onChange={()=> params.personalInfoRez2.setAptNum2(aptNumRef2.current.value)} />
                        </FloatingLabel>

                        <Form.Select className='fourthPartSelector' ref={provinceRef2} onChange={()=>params.personalInfoRez2.setProvince2(provinceRef2.current.value)} >
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

                        <FloatingLabel className='fourthPartPostalCode' label='Postal Code'>
                            <Form.Control  placeholder='postal'  ref={postalCodeRef2} onChange={()=>params.personalInfoRez2.setPostalCode2(postalCodeRef2.current.value)} />
                        </FloatingLabel>

                        <FloatingLabel label='Since'>
                            <Form.Control type='date'  placeholder='date' ref={rezSinceRef2} onChange={()=>params.personalInfoRez2.setRezSince2(rezSinceRef2.current.value)} />
                        </FloatingLabel>
                    </Form.Group>
                ):null
            }


        </Card>
    )
}