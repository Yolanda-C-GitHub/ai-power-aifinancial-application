import React, {useState, useRef} from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './employmentinfo.css'
import moment from 'moment'

export default function EmploymentInfo(params) {
    
    const employerStartFrom = useRef();
    const employerTo = useRef()

    const employermentStatus2Ref = useRef();
    const annualIncome2Ref = useRef();
    const employerName2Ref = useRef();
    const industry2Ref = useRef();
    const occupation2Ref=useRef();
    const streetNum2Ref = useRef();
    const address2Ref =useRef();
    const unitNum2Ref = useRef();
    const city2Ref = useRef();
    const province2Ref =useRef();
    const postalCode2Ref = useRef();
    const startFrom2Ref = useRef();
    const to2Ref = useRef();




    const [currentEmployer, setCurrentEmployer]=useState(true)
    const [showEmployer2, setShowEmployer2]=useState(false)


    function displayPreviousEmploymentInfo(){
        const startFromDate = moment(employerStartFrom.current.value, 'YYYY/MM/DD')
        const todaysDate = moment(moment().startOf('day'), 'YYYY/MM/DD')
        const daysBetweenStartToday = moment.duration(todaysDate.diff(startFromDate)).asDays()
        console.log(daysBetweenStartToday)

        if (daysBetweenStartToday < 730){
            console.log('its within 2 years')
            setShowEmployer2(true)
        }else{
            params.personalInfoEmploymentInfo2.setEmploymentStatus2('')
            params.personalInfoEmploymentInfo2.setAnnualIncome2('');
            params.personalInfoEmploymentInfo2.setEmployername2('');
            params.personalInfoEmploymentInfo2.setEmployerStreetNum2('');
            params.personalInfoEmploymentInfo2.setEmployerAddress2('');
            params.personalInfoEmploymentInfo2.setEmployerUnitNum2('');
            params.personalInfoEmploymentInfo2.setEmployerCity2('');
            params.personalInfoEmploymentInfo2.setEmployerProvince2('');
            params.personalInfoEmploymentInfo2.setEmployerPostalCode2('');
            params.personalInfoEmploymentInfo2.setDurationStart2('');
            params.personalInfoEmploymentInfo2.setDurationEnd2('');
            params.personalInfoEmploymentInfo2.setIndustry2('');
            params.personalInfoEmploymentInfo2.setOccupation2('');
            setShowEmployer2(false)
        }
    }


    return (
        <Card className='employmentInfoCard' >
            {/* most recent employer info */}
            <h3 className='employmentInfoLabel'> Employment Info </h3>

            <Form.Group className='employerSection'>
                <FloatingLabel label='Employment Status'>
                    <Form.Select className='employmentStatus' onChange={(e)=>params.personalInfoEmploymentInfo.setEmploymentStatus(e.target.value)} >
                        <option>Select</option>
                        <option value='employed' >Employed</option>
                        <option value="selfEmployed">Self Employed</option>
                        <option value="retired">Retuired</option>
                        <option value="student">Student</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="other">Other</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel label='Annual Income' >
                    <Form.Control className='annualIncome' placeholder='Annual Income' onChange={(e)=>params.personalInfoEmploymentInfo.setAnnualIncome(e.target.value)} />
                </FloatingLabel>

                <FloatingLabel label='Employer Name'>
                    <Form.Control placeholder='Employer Name' onChange={(e)=>params.personalInfoEmploymentInfo.setEmployername(e.target.value)} /> 
                </FloatingLabel>

                <FloatingLabel label='Industry'>
                    <Form.Select className='industry' onChange={(e)=>params.personalInfoEmploymentInfo.setIndustry(e.target.value)} > 
                        <option>Select</option>
                        <option value="agricultureFishingForestryMining">Agriculture Fishing Forestry Mining</option>
                        <option value="foodFoodserviceHospitality">Food Foodservice Hospitality</option>
                        <option value="artsEntertainmentRecreationSports">Arts Entertainment Recreation Sports</option>
                        <option value="insuranceAccountingBanking">Insurance Accounting Banking</option>
                        <option value="designCreative">Design Creative</option>
                        <option value="constructionSkilledTrades">Construction SkilledTrades</option>
                        <option value="educationTraining">Education Training</option>
                        <option value="governmentPublicAdministration">Government blicAdministration</option>
                        <option value="engineeringArchitecture">Engineering Architecture</option>
                        <option value="manufacturingProductionOperation">Manufacturing Production Operation</option>
                        <option value="medicalHealthcare">Medical Healthcare</option>
                        <option value="mediaTelecommunicationCommunication">Media Telecommunication Communication</option>
                        <option value="religion">Religion</option>
                        <option value="legal\Services">Legal\Services</option>
                        <option value="emergencyProtection">Emergency Protection</option>
                        <option value="realEstate">RealEstate</option>
                        <option value="professionalScientificTechnicalServices">Professional Scientific Technical Services</option>
                        <option value='informationTechnology'>Information Technology</option>
                        <option value="transportationUtilities">Transportation Utilities</option>
                        <option value="salesMarketingRetail">Sales Marketing Retail</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel label='Occupation'>
                    <Form.Control className='occupation' placeholder='Occupation' onChange={(e)=>params.personalInfoEmploymentInfo.setOccupation(e.target.value) }  /> 
                </FloatingLabel>
            </Form.Group>


            <Form.Group className='employerAddress'>
                <FloatingLabel label='Street Number'>
                    <Form.Control placeholder='Street Number' onChange={(e)=>params.personalInfoEmploymentInfo.setEmployerStreetNum(e.target.value)} /> 
                </FloatingLabel>

                <FloatingLabel label='Address'>
                    <Form.Control placeholder='Address' onChange={(e)=>params.personalInfoEmploymentInfo.setEmployerAddress(e.target.value)} /> 
                </FloatingLabel>

                <FloatingLabel label='Unit #'>
                    <Form.Control placeholder='Unit Number' onChange={(e)=> params.personalInfoEmploymentInfo.setEmployerUnitNum(e.target.value)} /> 
                </FloatingLabel>

                <FloatingLabel label='City'>
                    <Form.Control placeholder='City' onChange={(e)=>params.personalInfoEmploymentInfo.setEmployerCity(e.target.value) } /> 
                </FloatingLabel>
            </Form.Group>


            <Form.Group className='employerAddressProvince' >
                <FloatingLabel label='Province' >
                    <Form.Select  className='province' onChange={(e)=>params.personalInfoEmploymentInfo.setEmployerProvince(e.target.value)}  >
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

                <FloatingLabel label='Postal Code'>
                    <Form.Control placeholder='Postal Code' onChange={(e)=> params.personalInfoEmploymentInfo.setEmployerPostalCode(e.target.value)} /> 
                </FloatingLabel>
                
                <FloatingLabel label='Start From'>
                    <Form.Control type='date' placeholder='Start From' ref={employerStartFrom} 
                    onChange={(e)=>{
                        params.personalInfoEmploymentInfo.setDurationStart(e.target.value);
                        displayPreviousEmploymentInfo()
                        
                        }} 
                    /> 
                </FloatingLabel> 


                <Form.Check className='currentEmployerCheckBox' type='checkbox' checked={currentEmployer} label='Current Employer' onChange={(e)=>{
                    setCurrentEmployer(e.target.checked)
                    }}/>
                
      
                {currentEmployer===false? (
                    <FloatingLabel label='To'>
                        <Form.Control type='date' placeholder='To' ref={employerTo} onChange={(e)=>params.personalInfoEmploymentInfo.setDurationEnd(e.target.value)} /> 
                    </FloatingLabel> 
                    ): null
                }
               
                
            </Form.Group>
    
            
            {/*previous employer info if he/she is employed at the most recent employer for less than 2 years */}
            {showEmployer2===true? (
                <Form.Group>
                    <h3 className='employmentInfoLabel2' >Previous Employment Info</h3>
                    <Form.Group className='employerSection'>
                        <FloatingLabel label='Employment Status'>
                            <Form.Select className='employmentStatus' ref={employermentStatus2Ref} onChange={(e)=>params.personalInfoEmploymentInfo.setEmploymentStatus(e.target.value)} >
                                <option>Select</option>
                                <option value='employed' >Employed</option>
                                <option value="selfEmployed">Self Employed</option>
                                <option value="retired">Retuired</option>
                                <option value="student">Student</option>
                                <option value="unemployed">Unemployed</option>
                                <option value="other">Other</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel label='Annual Income' >
                            <Form.Control className='annualIncome' ref={annualIncome2Ref} placeholder='Annual Income' onChange={(e)=>params.personalInfoEmploymentInfo.setAnnualIncome(e.target.value)} />
                        </FloatingLabel>

                        <FloatingLabel label='Employer Name'>
                            <Form.Control placeholder='Employer Name' ref={employerName2Ref} onChange={(e)=>params.personalInfoEmploymentInfo.setEmployername(e.target.value)} /> 
                        </FloatingLabel>

                        <FloatingLabel label='Industry'>
                            <Form.Select className='industry' ref={industry2Ref} onChange={(e)=>params.personalInfoEmploymentInfo.setIndustry(e.target.value)} > 
                                <option>Select</option>
                                <option value="agricultureFishingForestryMining">Agriculture Fishing Forestry Mining</option>
                                <option value="foodFoodserviceHospitality">Food Foodservice Hospitality</option>
                                <option value="artsEntertainmentRecreationSports">Arts Entertainment Recreation Sports</option>
                                <option value="insuranceAccountingBanking">Insurance Accounting Banking</option>
                                <option value="designCreative">Design Creative</option>
                                <option value="constructionSkilledTrades">Construction SkilledTrades</option>
                                <option value="educationTraining">Education Training</option>
                                <option value="governmentPublicAdministration">Government blicAdministration</option>
                                <option value="engineeringArchitecture">Engineering Architecture</option>
                                <option value="manufacturingProductionOperation">Manufacturing Production Operation</option>
                                <option value="medicalHealthcare">Medical Healthcare</option>
                                <option value="mediaTelecommunicationCommunication">Media Telecommunication Communication</option>
                                <option value="religion">Religion</option>
                                <option value="legal\Services">Legal\Services</option>
                                <option value="emergencyProtection">Emergency Protection</option>
                                <option value="realEstate">RealEstate</option>
                                <option value="professionalScientificTechnicalServices">Professional Scientific Technical Services</option>
                                <option value='informationTechnology'>Information Technology</option>
                                <option value="transportationUtilities">Transportation Utilities</option>
                                <option value="salesMarketingRetail">Sales Marketing Retail</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel label='Occupation'>
                            <Form.Control className='occupation' ref={occupation2Ref}  placeholder='Occupation' onChange={(e)=>params.personalInfoEmploymentInfo.setOccupation(e.target.value) }  /> 
                        </FloatingLabel>
                    </Form.Group>


                    <Form.Group className='employerAddress'>
                        <FloatingLabel label='Street Number'>
                            <Form.Control placeholder='Street Number' ref={streetNum2Ref} onChange={(e)=>params.personalInfoEmploymentInfo.setEmployerStreetNum(e.target.value)} /> 
                        </FloatingLabel>

                        <FloatingLabel label='Address'>
                            <Form.Control placeholder='Address' ref={address2Ref} onChange={(e)=>params.personalInfoEmploymentInfo.setEmployerAddress(e.target.value)} /> 
                        </FloatingLabel>

                        <FloatingLabel label='Unit #'>
                            <Form.Control placeholder='Unit Number' ref={unitNum2Ref} onChange={(e)=> params.personalInfoEmploymentInfo.setEmployerUnitNum(e.target.value)} /> 
                        </FloatingLabel>

                        <FloatingLabel label='City'>
                            <Form.Control placeholder='City' ref={city2Ref} onChange={(e)=>params.personalInfoEmploymentInfo.setEmployerCity(e.target.value) } /> 
                        </FloatingLabel>
                    </Form.Group>


                    <Form.Group className='employerAddressProvince' >
                        <FloatingLabel label='Province' >
                            <Form.Select  className='province' ref={province2Ref} onChange={(e)=>params.personalInfoEmploymentInfo.setEmployerProvince(e.target.value)}  >
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

                        <FloatingLabel label='Postal Code'>
                            <Form.Control placeholder='Postal Code' ref={postalCode2Ref} onChange={(e)=> params.personalInfoEmploymentInfo.setEmployerPostalCode(e.target.value)} /> 
                        </FloatingLabel>
                        
                        <FloatingLabel label='Start From'>
                            <Form.Control type='date' placeholder='Start From' ref={startFrom2Ref} onChange={(e)=>params.personalInfoEmploymentInfo.setDurationStart(e.target.value)} /> 
                        </FloatingLabel> 

                        <FloatingLabel label='To'>
                            <Form.Control type='date' placeholder='To' ref={to2Ref} onChange={(e)=>params.personalInfoEmploymentInfo.setDurationEnd(e.target.value)} /> 
                        </FloatingLabel> 
                
                    </Form.Group>

                </Form.Group>

            ):null}

            
        </Card>
    )
}
