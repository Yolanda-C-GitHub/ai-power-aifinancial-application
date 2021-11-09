import React, {useRef, useState} from 'react'
import {Card, FloatingLabel,Form} from 'react-bootstrap'
import './fourthpart.css'

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

    function addShowRez2(){
        const today = new Date


        numberDaysBetween()


        setShowRez2(!showRez2)
    }





    function numberDaysBetween(start, end){
        const dateStart = new Date(start)
        const dateEnd = new Date(end)
        const oneDay = 1000*60*60*24;
        const daysBetween = Math.round(
            (dateEnd.getTime()-dateStart.getTime())/oneDay
        )
        return daysBetween
    }

    return (
        <Card className='fourthPartCard'> 
            
             
            <Form.Group className='fourthPartFormGroup'>
                <FloatingLabel className='fourthPartHouseNumber' label='House Number'>
                    <Form.Control placeholder='house#' ref={houseNumRef} onChange={()=>params.personalInfoRez.setHouseNum(houseNumRef.current.value)} />
                </FloatingLabel>

                <FloatingLabel label='Current Residence'>
                    <Form.Control placeholder='Address' ref={currentRezRef} onChange={()=>params.personalInfoRez.setCurrentRez(currentRezRef.current.value)} />
                </FloatingLabel>

                <FloatingLabel className='fourthPartAptNum' label='APT#'>
                    <Form.Control placeholder='apt#' ref={aptNumRef} onChange={()=> params.personalInfoRez.setAptNum(aptNumRef.current.value)} />
                </FloatingLabel>

                <Form.Select className='fourthPartSelector' ref={provinceRef} onChange={()=>params.personalInfoRez.setProvince(provinceRef.current.value)} >
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
                    <Form.Control  placeholder='postal'  ref={postalCodeRef} onChange={()=>params.personalInfoRez.setPostalCode(postalCodeRef.current.value)} />
                </FloatingLabel>

                <FloatingLabel label='Since'>
                    <Form.Control type='date'  placeholder='date' ref={rezSinceRef} onChange={()=>params.personalInfoRez.setRezSince(rezSinceRef.current.value)}  />
                </FloatingLabel>
            </Form.Group>


            {showRez2===true? 
                (
                    <Form.Group className='fourthPartFormGroup'>
                        <FloatingLabel className='fourthPartHouseNumber' label='House Number'>
                            <Form.Control placeholder='house#' ref={houseNumRef2} onChange={()=>params.personalInfoRez2.setHouseNum2(houseNumRef2.current.value)} />
                        </FloatingLabel>

                        <FloatingLabel label='Current Residence'>
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