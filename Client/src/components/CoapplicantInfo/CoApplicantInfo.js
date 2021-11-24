import React, {useRef, useState} from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './coapplicantinfo.css' 
import moment from 'moment'

export default function Coapp(params) {

    const colastNameRef = useRef()
    const cofirstNameRef = useRef()
    const coenglishNameRef = useRef()

    const cogenderFemaleRef = useRef()
    const cogenderMaleRef=useRef();
    const cobirthdayRef = useRef()
    const cosinRef = useRef()

    const coemailRef = useRef();
    const cocellNumRef=useRef();
    const cohomeNumRef=useRef();
    const coworkNumRef=useRef();

    const colivingStatusRef = useRef();
    const comaritalStatusRef = useRef();
    const cocitizenshipRef = useRef();
    const cotaxStatusRef = useRef();

    //rez info
    const cohouseNumRef=useRef();
    const cocurrentRezRef=useRef();
    const coaptNumRef=useRef();
    const coprovinceRef=useRef();
    const copostalCodeRef=useRef();
    const corezSinceRef=useRef();

    const cohouseNumRef2=useRef();
    const cocurrentRezRef2=useRef();
    const coaptNumRef2=useRef();
    const coprovinceRef2=useRef();
    const copostalCodeRef2=useRef();
    const corezSinceRef2=useRef();

    const[coshowRez2, setCoShowRez2]=useState(false);


    function numberDaysBetween(){
        const cosinceDate = moment(corezSinceRef.current.value,"YYYY/MM/DD")
        const cotodaysDate = moment(moment().startOf('day'),'YYYY/MM/DD')
        const codaysBetween = moment.duration(cotodaysDate.diff(cosinceDate)).asDays()
        console.log(codaysBetween)
        
        if(codaysBetween < 730){
            setCoShowRez2(true)
        }else{
            params.coAppInfo.setCoHouseNum2('')
            params.coAppInfo.setCoCurrentRez2('')
            params.coAppInfo.setCoAptNum2('')
            params.coAppInfo.setCoProvince2('')
            params.coAppInfo.setCoPostalCode2('')
            params.coAppInfo.setCoRezSince2('')
            setCoShowRez2(false)
        }

    }

    return (

            <Card className='firstPartCard border'>

                <Form.Group className='firstPartFormGroup'>
                    <FloatingLabel label='First Name'>
                        <Form.Control placeholder='First Name' ref= {colastNameRef} onChange ={()=>params.coAppInfo.setCoLastName(colastNameRef.current.value)}></Form.Control>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className='firstPartFormGroup'>
                    <FloatingLabel label='Last Name'>
                        <Form.Control placeholder='Last Name' ref={cofirstNameRef} onChange={()=>params.coAppInfo.setCoFirstName(cofirstNameRef.current.value)} ></Form.Control>
                    </FloatingLabel>
                </Form.Group>

                 <Form.Group className='firstPartFormGroup'>
                    <FloatingLabel label='English Name'>
                        <Form.Control placeholder='English Name' ref={coenglishNameRef} onChange={()=>params.coAppInfo.setCoEnglishName(coenglishNameRef.current.value)} ></Form.Control>
                    </FloatingLabel>
                </Form.Group>
         
                <FloatingLabel  className='firstPartFormGroup' label='Date of Birth' >
                    <Form.Control type='date' className='' ref={cobirthdayRef} onChange={()=>params.coAppInfo.setCoBirthday(cobirthdayRef.current.value)} ></Form.Control>
                </FloatingLabel>

                <Form.Group className='firstPartFormGroup'>
                    <FloatingLabel label='SIN#'>
                        <Form.Control placeholder='SIN#' ref={cosinRef} onChange={()=>params.coAppInfo.setCoSinNum(cosinRef.current.value)}></Form.Control>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className='firstPartFormGroup'>
                    <Form.Label className ='firstPartGenderLabel'>Gender:</Form.Label>
                    <div className='firstPartGenderBox' >
                        <Form.Check className ='' name='genderselector' label='Male' type='radio' 
                            ref={cogenderMaleRef} 
                            value="Male"  
                            onChange={() => params.coAppInfo.setCoGender(cogenderMaleRef.current.value)}
                        >
                        </Form.Check>

                        <Form.Check inline className = '' name='genderselector' label='Female' type='radio' 
                            ref={cogenderFemaleRef} 
                            value="Female" 
                            checked={params.coAppInfo.gender === "Female"} 
                            onChange={()=>params.coAppInfo.setCoGender(cogenderFemaleRef.current.value)}
                        >
                        </Form.Check>
                    </div>
                </Form.Group>


                <FloatingLabel className='firstPartFormGroupE' label='Email'>
                    <Form.Control type='email' ref={coemailRef} placeholder='Email' onChange={()=>params.coAppInfo.setCoEmail(coemailRef.current.value)}/>
                </FloatingLabel>

                <FloatingLabel className='firstPartFormGroup' label='Cell Phone'>
                    <Form.Control placeholder='cellphone'ref={cocellNumRef} onChange={()=>params.coAppInfo.setCoCellNum(cocellNumRef.current.value)}/>
                </FloatingLabel>

                <FloatingLabel className='firstPartFormGroup' label='Home Phone'>
                    <Form.Control placeholder='homephone' ref={cohomeNumRef} onChange={()=>params.coAppInfo.setCoHomeNum(cohomeNumRef.current.value)} />
                </FloatingLabel>

                <FloatingLabel className = 'firstPartFormGroup' label='Work Phone'>
                    <Form.Control placeholder='workphone' ref={coworkNumRef} onChange={()=>params.coAppInfo.setCoWorkNum(coworkNumRef.current.value)} />
                </FloatingLabel>
      

                <Form.Group className='firstPartFormStatusOne' >
                    <FloatingLabel label='Living Status' >
                        <Form.Select className='statusLiving' ref={colivingStatusRef} onChange={()=>params.coAppInfo.setCoLivingStatus(colivingStatusRef.current.value)}>
                            <option placeholder='select' >Select</option>
                            <option value='owner'>Owner</option>
                            <option value='rent'>Rent</option>
                            <option value='with parent'>With Parent</option>
                            <option value='with other'>With Other</option>
                            <option value='other'>Other</option>
                        </Form.Select>
                    </FloatingLabel>
     
                    <FloatingLabel label='Marital Status' >
                        <Form.Select className='statusLiving' ref={comaritalStatusRef} onChange={()=>params.coAppInfo.setCoMaritalStatus(comaritalStatusRef.current.value)}>
                            <option placeholder='select' >Select</option>
                            <option value='married'>Married</option>
                            <option value='single'>Single</option>
                            <option value='divorced'>Divorced</option>
                            <option value='separated'>Separated</option>
                            <option value='widowed'>Widowed</option>
                            <option value='common law'>Common Law</option>
                            <option value='other'>Other</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className='firstPartFormStatusTwo' >
                    <FloatingLabel label='Citizenship' >
                        <Form.Select className='thirdPartSelector' ref={cocitizenshipRef} onChange={()=>params.coAppInfo.setCoCitizenship(cocitizenshipRef.current.value)} >
                            <option placeholder='select' >Select</option>
                            <option value='canadian'>Canadian</option>
                            <option value='chinese'>Chinese</option>
                            <option value='pr'>PR</option>
                            <option value='other'>Other</option>
                        </Form.Select>            
                    </FloatingLabel>

                    <FloatingLabel label='Tax Status'>
                        <Form.Select className='thirdPartSelector' ref={cotaxStatusRef} onChange={()=>params.coAppInfo.setCoTaxStatus(cotaxStatusRef.current.value)}>
                            <option placeholder='select' >Select</option>
                            <option value='canada'>Canada</option>
                            <option value='usa'>USA</option>
                            <option value='both'>Both</option>
                            <option value='other'>Other</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>






                <Form.Group className='fourthPartFormGroup'>
                <FloatingLabel className='fourthPartHouseNumber' label='House Number'>
                    <Form.Control placeholder='house#' ref={cohouseNumRef} onChange={()=>params.coAppInfo.setCoHouseNum(cohouseNumRef.current.value)} />
                </FloatingLabel>

                <FloatingLabel label='Current Residence'>
                    <Form.Control placeholder='Address' ref={cocurrentRezRef} onChange={()=>params.coAppInfo.setCoCurrentRez(cocurrentRezRef.current.value)} />
                </FloatingLabel>

                <FloatingLabel className='fourthPartAptNum' label='APT#'>
                    <Form.Control placeholder='apt#' ref={coaptNumRef} onChange={()=> params.coAppInfo.setCoAptNum(coaptNumRef.current.value)} />
                </FloatingLabel>

                <FloatingLabel label='Province'>
                    <Form.Select className='fourthPartSelector' ref={coprovinceRef} onChange={()=>params.coAppInfo.setCoProvince(coprovinceRef.current.value)} >
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
                    <Form.Control  placeholder='postal'  ref={copostalCodeRef} onChange={()=>params.coAppInfo.setCoPostalCode(copostalCodeRef.current.value)} />
                </FloatingLabel>

                <FloatingLabel label='Since'>
                    <Form.Control type='date'  placeholder='date' ref={corezSinceRef} 
                        onChange={()=> {
                            params.coAppInfo.setCoRezSince(corezSinceRef.current.value)
                            numberDaysBetween()
                        }}  
                    />
                </FloatingLabel>
            </Form.Group>


            {coshowRez2===true? 
                (
                    <Form.Group className='fourthPartFormGroup'>
                        <FloatingLabel className='fourthPartHouseNumber' label='House Number'>
                            <Form.Control placeholder='house#' ref={cohouseNumRef2} onChange={()=>params.coAppInfo.setCoHouseNum2(cohouseNumRef2.current.value)} />
                        </FloatingLabel>

                        <FloatingLabel label='Previous Resident'>
                            <Form.Control placeholder='Address' ref={cocurrentRezRef2} onChange={()=>params.coAppInfo.setCoCurrentRez2(cocurrentRezRef2.current.value)} />
                        </FloatingLabel>

                        <FloatingLabel className='fourthPartAptNum' label='APT#'>
                            <Form.Control placeholder='apt#' ref={coaptNumRef2} onChange={()=> params.coAppInfo.setCoAptNum2(coaptNumRef2.current.value)} />
                        </FloatingLabel>

                        <Form.Select className='fourthPartSelector' ref={coprovinceRef2} onChange={()=>params.coAppInfo.setCoProvince2(coprovinceRef2.current.value)} >
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
                            <Form.Control  placeholder='postal'  ref={copostalCodeRef2} onChange={()=>params.coAppInfo.setCoPostalCode2(copostalCodeRef2.current.value)} />
                        </FloatingLabel>

                        <FloatingLabel label='Since'>
                            <Form.Control type='date'  placeholder='date' ref={corezSinceRef2} onChange={()=>params.coAppInfo.setCoRezSince2(corezSinceRef2.current.value)} />
                        </FloatingLabel>
                    </Form.Group>
                ):null
            }
            </Card>

            
    )
}