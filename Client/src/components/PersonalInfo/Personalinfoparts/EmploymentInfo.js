import React from 'react'
import {Card, Form, FloatingLabel} from 'react-bootstrap'
import './employmentinfo.css'

export default function EmploymentInfo() {
    return (
        <Card className='employmentInfoCard' >
            <h3 className='employmentInfoLabel'> Employment Info </h3>

            <Form.Group className='employerSection'>
                <FloatingLabel label='Employment Status'>
                    <Form.Select className='employmentStatus' >
                        <option>Select</option>
                        <option value='employed' >Employed</option>
                        <option value="selfEmployed">Self Employed</option>
                        <option value="retired">Retuired</option>
                        <option value="student">Student</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="other">Other</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel label='Annual Income'>
                    <Form.Control className='annualIncome' placeholder='Annual Income' />
                </FloatingLabel>

                <FloatingLabel label='Employer Name'>
                    <Form.Control placeholder='Employer Name' /> 
                </FloatingLabel>

                <FloatingLabel label='Industry'>
                    <Form.Select className='industry'> 
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
                    <Form.Control className='occupation' placeholder='Occupation' /> 
                </FloatingLabel>
            </Form.Group>

            <Form.Group className='employerAddress'>
                <FloatingLabel label='Street Number'>
                    <Form.Control placeholder='Street Number' /> 
                </FloatingLabel>

                <FloatingLabel label='Address'>
                    <Form.Control placeholder='Address' /> 
                </FloatingLabel>

                <FloatingLabel label='Unit #'>
                    <Form.Control placeholder='Unit Number' /> 
                </FloatingLabel>

                <FloatingLabel label='City'>
                    <Form.Control placeholder='City' /> 
                </FloatingLabel>

                <FloatingLabel label='Province'>
                    <Form.Select  className='employerAddressProvince'  >
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
                    <Form.Control placeholder='Postal Code' /> 
                </FloatingLabel>

            </Form.Group>




        </Card>
    )
}
