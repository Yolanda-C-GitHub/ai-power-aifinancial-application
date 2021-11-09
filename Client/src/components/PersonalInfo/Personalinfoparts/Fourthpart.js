import React, {useRef} from 'react'
import {Card, FloatingLabel,Form} from 'react-bootstrap'
import './fourthpart.css'

export default function Fourthpart(params) {
    
    const houseNumRef=useRef();
    const currentRezRef=useRef();
    const aptNumRef=useRef();
    const provinceRef=useRef();
    const postalCodeRef=useRef();
    const rezSinceRef=useRef();

    return (
        <Card className='fourthPartCard'> 

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

        </Card>
    )
}