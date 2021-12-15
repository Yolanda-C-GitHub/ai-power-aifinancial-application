import React, {useState, useRef} from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './employmentinfo.css'
import moment from 'moment'
import {occupationOptions} from './employmentdata'



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



    function displayPreviousEmploymentInfo(){
        if(params.personalInfoEmploymentInfo.currentEmployer===true){
            console.log(params.personalInfoEmploymentInfo.currentEmployer)
            const startFromDate = moment(employerStartFrom.current.value, 'YYYY/MM/DD')
            const todaysDate = moment(moment().startOf('day'), 'YYYY/MM/DD')
            const daysBetweenStartToday = moment.duration(todaysDate.diff(startFromDate)).asDays()

            if (daysBetweenStartToday < 730){
                console.log('its within 2 years')
                params.personalInfoEmploymentInfo.setShowEmployer2(true)
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
                params.personalInfoEmploymentInfo.setShowEmployer2(false)
            }

        }else if(params.personalInfoEmploymentInfo.currentEmployer===false){
            console.log(params.personalInfoEmploymentInfo.currentEmployer)
            const startFromDate = moment(employerStartFrom.current.value, 'YYYY/MM/DD')
            const todaysDate = moment(employerTo.current.value, 'YYYY/MM/DD')
            const daysBetweenStartToday = moment.duration(todaysDate.diff(startFromDate)).asDays();

            console.log(todaysDate, daysBetweenStartToday )
            if (daysBetweenStartToday < 730){
                params.personalInfoEmploymentInfo.setShowEmployer2(true)
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
                params.personalInfoEmploymentInfo.setShowEmployer2(false)
            }
        }
        
    }
 
    

    const industrySelectorRef = useRef();

    return (
        <Card className='employmentInfoCard' >
            {/* most recent employer info */}
            <h3 className='employmentInfoLabel'>Current Employment Info </h3>

            <div className='employerSection'>
                <FloatingLabel className='employmentStatus' label='Employment Status'>
                    <Form.Select required
                        as='select'
                        value={params.personalInfoEmploymentInfo.employmentStatus}
                        onChange={(e)=>{
                            params.personalInfoEmploymentInfo.setEmploymentStatus(e.target.value)
                        }} 
                    >
                        <option value=''>Select</option>
                        <option value='employed' >Employed</option>
                        <option value="selfEmployed">Self Employed</option>
                        <option value="retired">Retired</option>
                        <option value="student">Student</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="other">Other</option>
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>Required Field Letters Only</Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel className='annualIncome' label='Annual Income' >
                    <Form.Control required
                        pattern='[0-9]+'
                        placeholder='Annual Income' 
                        value={params.personalInfoEmploymentInfo.annualIncome}
                        onChange={(e)=>params.personalInfoEmploymentInfo.setAnnualIncome(e.target.value)} 
                    />
                    <Form.Control.Feedback type='invalid'>Required Field Numbers Only</Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel className='employerName' label='Employer Name'>
                    <Form.Control required
                        pattern='[A-Za-z0-9]+' 
                        placeholder='Employer Name' 
                        value={params.personalInfoEmploymentInfo.employerName}
                        onChange={(e)=>params.personalInfoEmploymentInfo.setEmployername(e.target.value)} 
                    /> 
                    <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel label='Industry'>
                    <Form.Select required
                        className='industry' 
                        ref={industrySelectorRef} 
                        value={params.personalInfoEmploymentInfo.industry}
                        onChange={(e)=>{
                            params.personalInfoEmploymentInfo.setIndustry(e.target.value);
                        }}

                    > 
                        <option value=''>Select</option>
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
                        <option value="legalservices">Legal\Services</option>
                        <option value="emergencyProtection">Emergency Protection</option>
                        <option value="realEstate">RealEstate</option>
                        <option value="professionalScientificTechnicalServices">Professional Scientific Technical Services</option>
                        <option value='informationTechnology'>Information Technology</option>
                        <option value="transportationUtilities">Transportation Utilities</option>
                        <option value="salesMarketingRetail">Sales Marketing Retail</option>
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel label='Occupation'>
                    <Form.Select required
                        className='occupation' 
                        placeholder='Occupation' 
                        value={params.personalInfoEmploymentInfo.occupation}
                        onChange={(e)=>params.personalInfoEmploymentInfo.setOccupation(e.target.value)}
                    >
                        { params.personalInfoEmploymentInfo.industry === 'agricultureFishingForestryMining' ?(
                            occupationOptions[0].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ): params.personalInfoEmploymentInfo.industry === 'foodFoodserviceHospitality'?(
                            occupationOptions[1].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ):  params.personalInfoEmploymentInfo.industry === 'artsEntertainmentRecreationSports'?(
                            occupationOptions[2].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ):  params.personalInfoEmploymentInfo.industry === 'insuranceAccountingBanking'?(
                            occupationOptions[3].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ):  params.personalInfoEmploymentInfo.industry === 'designCreative'?(
                            occupationOptions[4].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ):  params.personalInfoEmploymentInfo.industry === 'constructionSkilledTrades'?(
                            occupationOptions[5].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ):  params.personalInfoEmploymentInfo.industry === 'educationTraining'?(
                            occupationOptions[6].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ):  params.personalInfoEmploymentInfo.industry === 'governmentPublicAdministration'?(
                            occupationOptions[7].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ):  params.personalInfoEmploymentInfo.industry === 'engineeringArchitecture'?(
                            occupationOptions[8].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ):  params.personalInfoEmploymentInfo.industry === 'manufacturingProductionOperation'?(
                            occupationOptions[9].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ): params.personalInfoEmploymentInfo.industry === 'medicalHealthcare'?(
                            occupationOptions[10].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ): params.personalInfoEmploymentInfo.industry === 'mediaTelecommunicationCommunication'?(
                            occupationOptions[11].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ): params.personalInfoEmploymentInfo.industry === 'religion'?(
                            occupationOptions[12].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ): params.personalInfoEmploymentInfo.industry === 'legalservices'?(
                            occupationOptions[13].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ): params.personalInfoEmploymentInfo.industry === 'emergencyProtection'?(
                            occupationOptions[14].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ): params.personalInfoEmploymentInfo.industry === 'realEstate'?(
                            occupationOptions[15].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ): params.personalInfoEmploymentInfo.industry === 'professionalScientificTechnicalServices'?(
                            occupationOptions[16].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ): params.personalInfoEmploymentInfo.industry === 'informationTechnology'?(
                            occupationOptions[17].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ): params.personalInfoEmploymentInfo.industry === 'transportationUtilities'?(
                            occupationOptions[18].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ): params.personalInfoEmploymentInfo.industry === 'salesMarketingRetail'?(
                            occupationOptions[19].map((item, index) => {
                                return  <option value={item} key={index}>{item}</option>
                            })
                        ): (
                            <option value=''>Select Industry first</option>
                        )
                        }
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                </FloatingLabel>


                {params.personalInfoEmploymentInfo.occupation==='Other - Specify'?(
                    console.log(params.personalInfoEmploymentInfo.occupation)
                ):(
                    console.log('nope')
                )}
                    <FloatingLabel className='otherOccupation'   label='Occupation-Other'>
                        <Form.Control required
                            pattern='[A-Za-z]+'
                            placeholder='Occupation-Other'
                        />
                    </FloatingLabel>

                <FloatingLabel className='streetNum' label='Street Number'>
                    <Form.Control required
                        pattern='[0-9]+'
                        placeholder='Street Number'
                        value={params.personalInfoEmploymentInfo.employerStreetNum}
                        onChange={(e)=>params.personalInfoEmploymentInfo.setEmployerStreetNum(e.target.value)}
                    /> 
                    <Form.Control.Feedback type='invalid'>Required Field, Numbers Only</Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel className='address' label='Address'>
                    <Form.Control required
                        pattern='[A-Za-z]+'
                        placeholder='Address' 
                        value={params.personalInfoEmploymentInfo.employerAddress}
                        onChange={(e)=>params.personalInfoEmploymentInfo.setEmployerAddress(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel className='unitNum' label='Unit #'>
                    <Form.Control required
                        placeholder='Unit Number' 
                        value={params.personalInfoEmploymentInfo.employerUnitNum}
                        onChange={(e)=> params.personalInfoEmploymentInfo.setEmployerUnitNum(e.target.value)} 
                    /> 
                     <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                </FloatingLabel>

            </div>


            <div className='employerAddress'>
                <FloatingLabel className='city' label='City'>
                    <Form.Control required
                        placeholder='City' 
                        value={params.personalInfoEmploymentInfo.employerCity}
                        onChange={(e)=>params.personalInfoEmploymentInfo.setEmployerCity(e.target.value)}
                    /> 
                    <Form.Control.Feedback type='invalid'>Required Field, Letters Only</Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel label='Province' >
                    <Form.Select required  
                        className='province' 
                        value={params.personalInfoEmploymentInfo.employerProvince}
                        onChange={(e)=>params.personalInfoEmploymentInfo.setEmployerProvince(e.target.value)}  
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

                <FloatingLabel className='postalCode' label='Postal Code'>
                    <Form.Control required
                        placeholder='Postal Code' 
                        pattern='[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]'
                        value={params.personalInfoEmploymentInfo.employerPostalCode}
                        onChange={(e)=>{
                            params.personalInfoEmploymentInfo.setEmployerPostalCode(e.target.value)
                        }}
                    /> 
                    <Form.Control.Feedback type='invalid'>Required Field, Format Must Be "A1A 1A1"</Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel className='startFrom' label='Start From'>
                    <Form.Control required
                        max={moment().format("YYYY-MM-DD")}
                        type='date' 
                        placeholder='Start From' 
                        ref={employerStartFrom} 
                        value={params.personalInfoEmploymentInfo.durationStart}
                        onChange={(e)=>{
                            params.personalInfoEmploymentInfo.setDurationStart(e.target.value);
                            displayPreviousEmploymentInfo()
                        }}
                    /> 
                    <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                </FloatingLabel> 

                <Form.Check className='currentEmployerCheckBox' type='checkbox' checked={params.personalInfoEmploymentInfo.currentEmployer} label='Current Employer' 
                    onChange={(e)=>{
                    params.personalInfoEmploymentInfo.setCurrentEmployer(e.target.checked)
                    displayPreviousEmploymentInfo()
                    }}
                />

                {params.personalInfoEmploymentInfo.currentEmployer===false? (
                    <FloatingLabel className='startTo' label='To'>
                        <Form.Control type='date' placeholder='To' ref={employerTo} onChange={(e)=>{
                            params.personalInfoEmploymentInfo.setDurationEnd(e.target.value)
                            displayPreviousEmploymentInfo()
                            }} /> 
                    </FloatingLabel> 
                ): null}
               


            </div>


    
            
            {/*previous employer info if he/she is employed at the most recent employer for less than 2 years */}
            {params.personalInfoEmploymentInfo.showEmployer2===true? (
                <Form.Group>
                    <h3 className='employmentInfoLabel2' >Previous Employment Info</h3>
                    <Form.Group className='employerSection'>
                        <FloatingLabel className='employmentStatus' label='Employment Status'>
                            <Form.Select required
                                ref={employermentStatus2Ref} 
                                value={params.personalInfoEmploymentInfo2.employmentStatus2}
                                onChange={(e)=>params.personalInfoEmploymentInfo2.setEmploymentStatus2(e.target.value)} 
                            >
                                <option value=''>Select</option>
                                <option value='employed' >Employed</option>
                                <option value="selfEmployed">Self Employed</option>
                                <option value="retired">Retuired</option>
                                <option value="student">Student</option>
                                <option value="unemployed">Unemployed</option>
                                <option value="other">Other</option>
                            </Form.Select>
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel className='annualIncome' label='Annual Income' >
                            <Form.Control required
                                pattern='[0-9]+'
                                ref={annualIncome2Ref}
                                placeholder='Annual Income'
                                value={params.personalInfoEmploymentInfo2.annualIncome2}
                                onChange={(e)=>params.personalInfoEmploymentInfo2.setAnnualIncome2(e.target.value)} 
                            />
                            <Form.Control.Feedback type='invalid'>Required Field Numbers Only</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel className='employerName' label='Employer Name'>
                            <Form.Control required
                                pattern='[A-Za-z0-9]+' 
                                placeholder='Employer Name'
                                ref={employerName2Ref} 
                                value={params.personalInfoEmploymentInfo2.employerName2}
                                onChange={(e)=>{params.personalInfoEmploymentInfo2.setEmployername2(e.target.value)
                                }}
                            /> 
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel className='industry' label='Industry'>
                            <Form.Select required
                                ref={industry2Ref} 
                                value={params.personalInfoEmploymentInfo2.industry2}
                                onChange={(e)=>{
                                    params.personalInfoEmploymentInfo2.setIndustry2(e.target.value)
                                }}
                            > 
                                <option value=''>Select</option>
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
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel className='occupation' label='Occupation'>
                            <Form.Select required
                                className='occupation' 
                                placeholder='Occupation' 
                                value={params.personalInfoEmploymentInfo2.occupation2}
                                onChange={(e)=>{
                                    params.personalInfoEmploymentInfo2.setOccupation2(e.target.value)
                                }}
                            > 
                            
                                { params.personalInfoEmploymentInfo2.industry2 === 'agricultureFishingForestryMining' ?(
                                    occupationOptions[0].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ): params.personalInfoEmploymentInfo2.industry2 === 'foodFoodserviceHospitality'?(
                                    occupationOptions[1].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ):  params.personalInfoEmploymentInfo2.industry2 === 'artsEntertainmentRecreationSports'?(
                                    occupationOptions[2].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ):  params.personalInfoEmploymentInfo2.industry2 === 'insuranceAccountingBanking'?(
                                    occupationOptions[3].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ):  params.personalInfoEmploymentInfo2.industry2 === 'designCreative'?(
                                    occupationOptions[4].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ):  params.personalInfoEmploymentInfo2.industry2 === 'constructionSkilledTrades'?(
                                    occupationOptions[5].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ):  params.personalInfoEmploymentInfo2.industry2 === 'educationTraining'?(
                                    occupationOptions[6].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ):  params.personalInfoEmploymentInfo2.industry2 === 'governmentPublicAdministration'?(
                                    occupationOptions[7].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ):  params.personalInfoEmploymentInfo2.industry2 === 'engineeringArchitecture'?(
                                    occupationOptions[8].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ):  params.personalInfoEmploymentInfo2.industry2 === 'manufacturingProductionOperation'?(
                                    occupationOptions[9].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ): params.personalInfoEmploymentInfo2.industry2 === 'medicalHealthcare'?(
                                    occupationOptions[10].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ): params.personalInfoEmploymentInfo2.industry2 === 'mediaTelecommunicationCommunication'?(
                                    occupationOptions[11].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ): params.personalInfoEmploymentInfo2.industry2 === 'religion'?(
                                    occupationOptions[12].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ): params.personalInfoEmploymentInfo2.industry2 === 'legalservices'?(
                                    occupationOptions[13].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ): params.personalInfoEmploymentInfo2.industry2 === 'emergencyProtection'?(
                                    occupationOptions[14].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ): params.personalInfoEmploymentInfo2.industry2 === 'realEstate'?(
                                    occupationOptions[15].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ): params.personalInfoEmploymentInfo2.industry2 === 'professionalScientificTechnicalServices'?(
                                    occupationOptions[16].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ): params.personalInfoEmploymentInfo2.industry2 === 'informationTechnology'?(
                                    occupationOptions[17].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ): params.personalInfoEmploymentInfo2.industry2 === 'transportationUtilities'?(
                                    occupationOptions[18].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ): params.personalInfoEmploymentInfo2.industry2 === 'salesMarketingRetail'?(
                                    occupationOptions[19].map((item, index) => {
                                        return  <option value={item} key={index}>{item}</option>
                                    })
                                ): (
                                    <option value=''>Select Industry first</option>
                                )
                                }
                            </Form.Select>
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel>
                                <Form.Control required
                                
                                >

                                </Form.Control>
                        </FloatingLabel>

                        <FloatingLabel className='streetNum' label='Street Number'>
                            <Form.Control required
                                placeholder='Street Number' 
                                ref={streetNum2Ref} 
                                value={params.personalInfoEmploymentInfo2.employerStreetNum2}
                                onChange={(e)=>{
                                    params.personalInfoEmploymentInfo2.setEmployerStreetNum2(e.target.value)
                                }} 
                            /> 
                            <Form.Control.Feedback type='invalid'>Required Field, Numbers Only</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel className='address' label='Address'>
                            <Form.Control required
                                placeholder='Address' 
                                ref={address2Ref} 
                                value={params.personalInfoEmploymentInfo2.employerAddress2}
                                onChange={(e)=>{
                                    params.personalInfoEmploymentInfo2.setEmployerAddress2(e.target.value)
                                    }}
                            /> 
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel className='unitNum' label='Unit #'>
                            <Form.Control required
                                placeholder='Unit Number' 
                                ref={unitNum2Ref}
                                value={params.personalInfoEmploymentInfo2.employerUnitNum2}
                                onChange={(e)=>{
                                    params.personalInfoEmploymentInfo2.setEmployerUnitNum2(e.target.value)
                                }}
                            /> 
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                    </Form.Group>


                    <Form.Group className='employerAddress'>

                        <FloatingLabel className='city' label='City'>
                            <Form.Control required
                                placeholder='City' 
                                ref={city2Ref} 
                                value={params.personalInfoEmploymentInfo2.employerAddress2}
                                onChange={(e)=>{
                                    params.personalInfoEmploymentInfo2.setEmployerCity2(e.target.value) 
                                }}
                            />
                            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel className='province' label='Province' >
                            <Form.Select required
                                ref={province2Ref}
                                value={params.personalInfoEmploymentInfo2.employerProvince2}
                                onChange={(e)=>{
                                    params.personalInfoEmploymentInfo2.setEmployerProvince2(e.target.value)
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
                        </FloatingLabel>  

                        <FloatingLabel className='postalCode' label='Postal Code'>
                            <Form.Control required
                                pattern='[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]'
                                placeholder='Postal Code'
                                ref={postalCode2Ref}
                                value={params.personalInfoEmploymentInfo2.employerPostalCode2}
                                onChange={(e)=>{
                                    params.personalInfoEmploymentInfo2.setEmployerPostalCode2(e.target.value)
                                }}
                            />
                            <Form.Control.Feedback type='invalid'>Required Field, Format Must Be "A1A 1A1"</Form.Control.Feedback>
                        </FloatingLabel>
                        
                        <FloatingLabel className='startFrom' label='Start From'>
                            <Form.Control required
                                type='date'
                                placeholder='Start From'
                                ref={startFrom2Ref}
                                value={params.personalInfoEmploymentInfo2.durationStart2}
                                onChange={(e)=>{
                                    params.personalInfoEmploymentInfo2.setDurationStart2(e.target.value)
                                }}
                            /> 
                            <Form.Control.Feedback type='invalid'>Required Field"</Form.Control.Feedback>
                        </FloatingLabel> 

                        <FloatingLabel className='startTo' label='To'>
                            <Form.Control required
                                type='date' 
                                placeholder='To'
                                ref={to2Ref}
                                value={params.personalInfoEmploymentInfo2.durationEnd2}
                                onChange={(e)=>{
                                    params.personalInfoEmploymentInfo2.setDurationEnd2(e.target.value)  
                                }}
                            /> 
                            <Form.Control.Feedback type='invalid'>Required Field"</Form.Control.Feedback>
                        </FloatingLabel> 
                    </Form.Group>
                </Form.Group>
            ):null}

            
        </Card>
    )
}
