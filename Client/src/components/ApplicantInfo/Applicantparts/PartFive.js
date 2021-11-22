import React, {useRef, useState} from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './partfive.css'

export default function Fifthpart(params) {


    const previousDeclaredRef = useRef();
    const dischargeDateRef=useRef();
    const LivinginCanadaSince=useRef();

    const [showDischarge, setShowDischarge]=useState(false);
    
    function toggleShowDischarge(){
        if(params.personalInfoPartFive.declared==='No'){
            setShowDischarge(true)   
        } else{
            setShowDischarge(false)
            params.personalInfoPartFive.setDischargeDate('')
        }
    }

    return (
        <Card className='partFiveCard'>

            <Form.Group className='applicationPartFiveFormGroup'>
               <FloatingLabel label='Have you previously Declared Bankruptcy?'>
                    <Form.Select className='previouslyDeclared' ref={previousDeclaredRef} 
                    onChange={()=>{
                        params.personalInfoPartFive.setDeclared(previousDeclaredRef.current.value)
                        toggleShowDischarge()
                    }}>
                        <option value='No'>No</option>
                        <option value='Yes'>Yes</option>
                    </Form.Select>  
               </FloatingLabel>

               {showDischarge===true?(
                    <FloatingLabel label='Discharge Date'>
                        <Form.Control type='date' placeholder='dateOfDischarge' ref={dischargeDateRef} onChange={()=>params.personalInfoPartFive.setDischargeDate(dischargeDateRef.current.value)} />
                    </FloatingLabel>
               ): null} 
               

                <FloatingLabel label='Living in Canada Since'>
                    <Form.Control className='applicationPartFiveInCanadaSince'    type='date' placeholder='LivinginCanadaSince' ref={LivinginCanadaSince} onChange={()=>params.personalInfoPartFive.setLivinginCanadaSince(LivinginCanadaSince.current.value)} />
                </FloatingLabel>           




            </Form.Group>

        </Card>
    )
}