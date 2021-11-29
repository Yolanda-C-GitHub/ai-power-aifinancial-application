import React, {useState, useEffect} from 'react'
import './personalinfo.css'
import styled from 'styled-components'
import {Form, Button, Nav, Navbar} from 'react-bootstrap'
import Firstpart from './Personalinfoparts/Firstpart'
import Coapp from '../CoapplicantInfo/CoApplicantInfo'
import Secondpart from './Personalinfoparts/Secondpart'
import Thirdpart from './Personalinfoparts/Thirdpart'
import Fourthpart from './Personalinfoparts/Fourthpart'
import PartFive from './Personalinfoparts/Partfive'
import FamilyMember from './Personalinfoparts/FamilyMember'
import EmploymentInfo from './Personalinfoparts/EmploymentInfo'

import Axios  from  'axios'


const PersonalInfoContainer = styled.div`
    padding-left:${({ sideMenuPush }) => sideMenuPush? '250px':'0px' };
    transition: 0.5s;
`;
const PersonalInfoApplicant = styled(Nav.Link)` 
    background-color: ${({ applicantActive }) => (applicantActive? '#202c37' : '#374c5f;')}

`;
const PersonalInfoCoApplicant = styled(Nav.Link)`
    background-color: ${({ coApplicantActive }) => (coApplicantActive? '#202c37' : '#374c5f;')}
`;

const PersonalInfoID = styled(Nav.Link)`
    background-color: ${({ iDActive }) => (iDActive? '#202c37' : '#374c5f;')}
`;
const PersonalInfoFamily = styled(Nav.Link)`
    background-color: ${({ familyActive }) => (familyActive? '#202c37' : '#374c5f;')}
`;
const PersonalInfoEmployment = styled(Nav.Link)`
    background-color: ${({ employmentActive }) => (employmentActive? '#202c37' : '#374c5f;')}
`;
const PersonalInfoCheque = styled(Nav.Link)`
    background-color: ${({ chequeActive }) => (chequeActive? '#202c37' : '#374c5f;')}
`;
const PersonalInfoAddress = styled(Nav.Link)`
    background-color: ${({ addressActive }) => (addressActive? '#202c37' : '#374c5f;')}
`;
const PersonalInfoChannel= styled(Nav.Link)`
    background-color: ${({ channelActive }) => (channelActive? '#202c37' : '#374c5f;')}
`;
const PersonalInfoKYC=styled(Nav.Link)`
    background-color: ${({ KYCActive }) => (KYCActive? '#202c37' : '#374c5f;')}
`;



export default function Personalinfo({sidemenuState}) {

    // state control for applicant & coapplicant active styling
    const[applicantActive, setApplicantActive] = useState(true);
    const[coApplicantActive, setCoApplicantActive] = useState(false);
    function toggleApplicantActive(e){
        e.preventDefault();
        setApplicantActive(true)
        setCoApplicantActive(false)
    }
    function toggleCoApplicantActive(e){
        e.preventDefault();
        setCoApplicantActive(true)
        setApplicantActive(false)
    }

    // state control for detailed info active styling
    const [iDActive, setIDActive]=useState(true)
    const [familyActive, setFamilyActive]=useState(false)
    const [employmentActive, setEmploymentActive] = useState(false);
    const [chequeActive, setChequeActive]= useState(false);
    const [addressActive, setAddressActive]=useState(false);  
    const [channelActive, setChannelActive]=useState(false);
    const [KYCActive, setKYCActive]=useState(false);
    function toggleIDActive(e){
        e.preventDefault();
        setIDActive(true);
        setFamilyActive(false)
        setEmploymentActive(false)
        setChequeActive(false)
        setAddressActive(false)
        setChannelActive(false)
        setKYCActive(false)
    }
    function toggleFamilyActive(e){
        e.preventDefault();
        setIDActive(false);
        setFamilyActive(true)
        setEmploymentActive(false)
        setChequeActive(false)
        setAddressActive(false)
        setChannelActive(false)
        setKYCActive(false)
    }
    function toggleEmploymentActive(e){
        e.preventDefault();
        setIDActive(false);
        setFamilyActive(false)
        setEmploymentActive(true)
        setChequeActive(false)
        setAddressActive(false)
        setChannelActive(false)
        setKYCActive(false)
    }
    function toggleChequeActive(e){
        e.preventDefault();
        setIDActive(false);
        setFamilyActive(false)
        setEmploymentActive(false)
        setChequeActive(true)
        setAddressActive(false)
        setChannelActive(false)
        setKYCActive(false)
    }
    function toggleAddressActive(e){
        e.preventDefault();
        setIDActive(false);
        setFamilyActive(false)
        setEmploymentActive(false)
        setChequeActive(false)
        setAddressActive(true)
        setChannelActive(false)
        setKYCActive(false)
    }
     function toggleChannelActive(e){
        e.preventDefault();
        setIDActive(false);
        setFamilyActive(false)
        setEmploymentActive(false)
        setChequeActive(false)
        setAddressActive(false)
        setChannelActive(true)
        setKYCActive(false)
    }
    function toggleKYCActive(e){
        e.preventDefault();
        setIDActive(false);
        setFamilyActive(false)
        setEmploymentActive(false)
        setChequeActive(false)
        setAddressActive(false)
        setChannelActive(false)
        setKYCActive(true)
    }













    // state control for 1st part
    const[lastName, setLastName] = useState()
    const[firstName, setFirstName] = useState()
    const[englishName, setEnglishName] = useState()

    const[gender, setGender]= useState()
    const[birthDay, setBirthday] =useState()
    const[sinNum, setSinNum]= useState()

    const[email, setEmail]=useState();
    const[cellNum, setCellNum]= useState();
    const[homeNum, setHomeNum]=useState();
    const[workNum, setWorkNum]=useState();

    const[livingStatus, setLivingStatus] = useState('');
    const[maritalStatus, setMaritalStatus]=useState('');
    const[citizenship, setCitizenship] = useState('');
    const[taxStatus, setTaxStatus]=useState('');

    const[declared, setDeclared] = useState('No');
    const[dischargeDate, setDischargeDate]= useState();

    const personalInfoNames = {
        setLastName,
        setFirstName,
        setEnglishName,
        gender,
        setGender,
        setBirthday,
        setSinNum,
        setEmail,
        setCellNum,
        setHomeNum,
        setWorkNum,
        setLivingStatus, 
        setMaritalStatus, 
        setCitizenship,
        setTaxStatus,
        declared,
        setDeclared,
        setDischargeDate,
    }
    

    // state control for 4th part
    const[houseNum, setHouseNum]=useState();
    const[currentRez, setCurrentRez]=useState();
    const[aptNum, setAptNum]=useState();
    const[province, setProvince]=useState('ON');
    const[postalCode, setPostalCode]=useState();
    const[rezSince, setRezSince]=useState();
    const personalInfoRez = {setHouseNum, setCurrentRez, setAptNum, setProvince, setPostalCode, setRezSince}
    const[houseNum2, setHouseNum2]=useState();
    const[currentRez2, setCurrentRez2]=useState();
    const[aptNum2, setAptNum2]=useState();
    const[province2,setProvince2]=useState();
    const[postalCode2, setPostalCode2] = useState();
    const[rezSince2, setRezSince2]=useState();
    const personalInfoRez2 = {setHouseNum2, setCurrentRez2, setAptNum2, setProvince2, setPostalCode2, setRezSince2}


   

    // state control part 5
    const[idArray, setIdArray] = useState([
        {
            idType:'provincialDriversLicense',
            idNum:'',
            issueDate:'',
            expiryDate:'',
            verificationDate:'',
            issuingProvince:'',
            comments:'',
        },
    ]);

    const personalInfoPartFive ={
        idArray,
        setIdArray,
    }



    // state control family info
    const[spouseFirstName, setSpouseFirstName]=useState();
    const[spouseLastName, setSpouseLastName]=useState();
    const[spouseBirth, setSpouseBirth]=useState();
    const[child1Name, setChild1Name]=useState();
    const[child1Birth, setChild1Birth]=useState();
    const[child2Name, setChild2Name]=useState();
    const[child2Birth, setChild2Birth]=useState();
    const[child3Name, setChild3Name]=useState();
    const[child3Birth, setChild3Birth]= useState();
    const[child4Name, setChild4Name]=useState();
    const[child4Birth, setChild4Birth]=useState();
    const personalInfoFamilyMember={
        setSpouseFirstName,
        setSpouseLastName,
        setSpouseBirth,
        setChild1Name,
        setChild2Name,
        setChild3Name,
        setChild4Name,
        setChild1Birth,
        setChild2Birth,
        setChild3Birth,
        setChild4Birth,
    }


    // state control employment info
    const [employmentStatus, setEmploymentStatus]=useState();
    const [annualIncome, setAnnualIncome]=useState();
    const [employerName, setEmployername]=useState();
    const [employerStreetNum, setEmployerStreetNum]=useState();
    const [employerAddress, setEmployerAddress]=useState();
    const [employerUnitNum, setEmployerUnitNum]=useState();
    const [employerCity, setEmployerCity]=useState();
    const [employerProvince, setEmployerProvince]=useState('ON');
    const [employerPostalCode, setEmployerPostalCode]=useState();
    const [durationStart, setDurationStart]=useState();
    const [durationEnd, setDurationEnd]=useState();
    const [industry, setIndustry]=useState();
    const [occupation, setOccupation]=useState();
    const personalInfoEmploymentInfo={
        setEmploymentStatus,
        setAnnualIncome,
        setEmployername,
        setEmployerStreetNum,
        setEmployerAddress,
        setEmployerUnitNum,
        setEmployerCity,
        setEmployerProvince,
        setEmployerPostalCode,
        setDurationStart,
        setDurationEnd,
        setIndustry,
        setOccupation,
    }

    const [employmentStatus2, setEmploymentStatus2]=useState();
    const [annualIncome2, setAnnualIncome2]=useState();
    const [employerName2, setEmployername2]=useState();
    const [employerStreetNum2, setEmployerStreetNum2]=useState();
    const [employerAddress2, setEmployerAddress2]=useState();
    const [employerUnitNum2, setEmployerUnitNum2]=useState();
    const [employerCity2, setEmployerCity2]=useState();
    const [employerProvince2, setEmployerProvince2]=useState();
    const [employerPostalCode2, setEmployerPostalCode2]=useState();
    const [durationStart2, setDurationStart2]=useState();
    const [durationEnd2, setDurationEnd2]=useState();
    const [industry2, setIndustry2]=useState();
    const [occupation2, setOccupation2]=useState();
    const personalInfoEmploymentInfo2={
        setEmploymentStatus2,
        setAnnualIncome2,
        setEmployername2,
        setEmployerStreetNum2,
        setEmployerAddress2,
        setEmployerUnitNum2,
        setEmployerCity2,
        setEmployerProvince2,
        setEmployerPostalCode2,
        setDurationStart2,
        setDurationEnd2,
        setIndustry2,
        setOccupation2,
    }

    function handleSubmit(e){
        e.preventDefault()

        if(!firstName || !lastName || !englishName){
          alert('Please Make Sure the Required Fields are Filled')
          return
        }
        console.log(firstName, lastName, englishName, idArray)
    
        Axios.post('http://localhost:3001/insert',{
          firstName: firstName,
          lastName:lastName, 
          englishName: englishName,
          idArray: idArray,
        }).then(() =>  {

            console.log('database updated')
            // later when we need to display the content, we would need to update an array state here right after the database has been updated.
            // as for now, we'll just include a console.log statement that we have successfully updated the database
          
        })
    


        console.log(
            lastName,
            firstName,
            englishName,
            gender,
            birthDay,
            sinNum,
            email,
            cellNum,
            homeNum,
            workNum,
            livingStatus,
            maritalStatus,
            citizenship,
            taxStatus,
            declared,
            dischargeDate,
        )
        console.log(
            idArray
        )
        console.log(
            spouseFirstName,
            spouseLastName,
            spouseBirth,
            child1Name,
            child2Name,
            child3Name,
            child4Name,
            child1Birth,
            child2Birth,
            child3Birth,
            child4Birth,
        )




          






        // console.log('submit form button working')
        // console.log(lastName, firstName, englishName)
        // console.log(gender, birthDay, sinNum)
        // console.log(livingStatus, maritalStatus, citizenship, taxStatus)
        // console.log(houseNum,currentRez,aptNum,province,postalCode,rezSince)
        // console.log(houseNum2,currentRez2,aptNum2,province2,postalCode2,rezSince2)
        // console.log(email, cellNum, homeNum, workNum, idType, idNum, issueDate, expiryDate, verificationDate, issuingProvince, comments, declared, dischargeDate)
        // console.log(spouseFirstName, spouseLastName, spouseBirth, child1Name,child1Birth, child2Name, child2Birth, child3Name, child3Birth, child4Name, child4Birth)

        // console.log(
        //     employmentStatus,
        //     annualIncome,
        //     employerName,
        //     employerStreetNum,
        //     employerAddress,
        //     employerUnitNum,
        //     employerCity,
        //     employerProvince,
        //     employerPostalCode,
        //     durationStart,
        //     durationEnd,
        //     industry,
        //     occupation,  
        // )

        // console.log(
        //     employmentStatus2,
        //     annualIncome2,
        //     employerName2,
        //     employerStreetNum2,
        //     employerAddress2,
        //     employerUnitNum2,
        //     employerCity2,
        //     employerProvince2,
        //     employerPostalCode2,
        //     durationStart2,
        //     durationEnd2,
        //     industry2,
        //     occupation2,  
        // )
        

    }
















    
    // state control for coapplicant
    const[colastName, setCoLastName] = useState()
    const[cofirstName, setCoFirstName] = useState()
    const[coenglishName, setCoEnglishName] = useState()

    const[cogender, setCoGender]= useState()
    const[cobirthDay, setCoBirthday] =useState()
    const[cosinNum, setCoSinNum]= useState()

    const[coemail, setCoEmail]=useState();
    const[cocellNum, setCoCellNum]= useState();
    const[cohomeNum, setCoHomeNum]=useState();
    const[coworkNum, setCoWorkNum]=useState();

    const[colivingStatus, setCoLivingStatus] = useState('');
    const[comaritalStatus, setCoMaritalStatus]=useState('');
    const[cocitizenship, setCoCitizenship] = useState('');
    const[cotaxStatus, setCoTaxStatus]=useState('');

    const[cohouseNum, setCoHouseNum]=useState();
    const[cocurrentRez, setCoCurrentRez]=useState();
    const[coaptNum, setCoAptNum]=useState();
    const[coprovince, setCoProvince]=useState('ON');
    const[copostalCode, setCoPostalCode]=useState();
    const[corezSince, setCoRezSince]=useState();

    const[cohouseNum2, setCoHouseNum2]=useState();
    const[cocurrentRez2, setCoCurrentRez2]=useState();
    const[coaptNum2, setCoAptNum2]=useState();
    const[coprovince2,setCoProvince2]=useState();
    const[copostalCode2, setCoPostalCode2] = useState();
    const[corezSince2, setCoRezSince2]=useState();

    const coAppInfo = {
        setCoLastName,
        setCoFirstName,
        setCoEnglishName,
        cogender,
        setCoGender,
        setCoBirthday,
        setCoSinNum,
        setCoEmail,
        setCoCellNum,
        setCoHomeNum,
        setCoWorkNum,
        setCoLivingStatus, 
        setCoMaritalStatus, 
        setCoCitizenship,
        setCoTaxStatus,

        setCoHouseNum,
        setCoCurrentRez,
        setCoAptNum,
        setCoProvince,
        setCoPostalCode,
        setCoRezSince,

        setCoHouseNum2,
        setCoCurrentRez2,
        setCoAptNum2,
        setCoProvince2,
        setCoPostalCode2,
        setCoRezSince2,
    }



    return (
            <PersonalInfoContainer className='border personalInfoContainer' sideMenuPush={sidemenuState.sidemenu}>
                
                <Navbar className='personalInfoNavbarContainer'>
                    <Nav className='me-auto'>
                        <PersonalInfoApplicant disabled={applicantActive?true:false} onClick={toggleApplicantActive} className='navLinkApplicant' applicantActive={applicantActive}>
                            Applicant
                        </PersonalInfoApplicant>
                        <PersonalInfoCoApplicant disabled={coApplicantActive?true:false} onClick={toggleCoApplicantActive} className='navLinkCoApplicant' coApplicantActive={coApplicantActive} >
                            Co-Applicant
                        </PersonalInfoCoApplicant>
                    </Nav>

                    <Navbar.Brand className='navBarBrand'>Personal Information</Navbar.Brand>
                </Navbar>
            
        
              
                {applicantActive?(
                    <Form onSubmit={handleSubmit} className='applicantInfoContainer'>

                        <div className='row' className='applicantInfoNames'> 
                            <Firstpart  personalInfoNames ={personalInfoNames} />
                        </div>


                        <Navbar className='personalInfoNavbarContainer2'>
                            <Nav className='me-auto'>
                                <PersonalInfoID className='applicantAddtionalInfoItem' disabled={iDActive?true:false} iDActive={iDActive} onClick={toggleIDActive}>
                                    ID
                                </PersonalInfoID>

                                <PersonalInfoFamily className='applicantAddtionalInfoItem' disabled={familyActive?true:false} familyActive={familyActive} onClick={toggleFamilyActive}  >
                                    Family
                                </PersonalInfoFamily >

                                <PersonalInfoEmployment className='applicantAddtionalInfoItem' disabled={employmentActive?true:false} employmentActive={employmentActive} onClick={toggleEmploymentActive}>
                                    Employment
                                </PersonalInfoEmployment>
                                
                                <PersonalInfoCheque className='applicantAddtionalInfoItem' disabled={chequeActive?true:false} chequeActive={chequeActive} onClick={toggleChequeActive}>
                                    Cheque
                                </PersonalInfoCheque>

                                <PersonalInfoAddress className='applicantAddtionalInfoItem' disabled={addressActive?true:false} addressActive={addressActive} onClick={toggleAddressActive} >
                                    Address
                                </PersonalInfoAddress>

                                <PersonalInfoChannel className='applicantAddtionalInfoItem' disabled={channelActive?true:false} channelActive={channelActive} onClick={toggleChannelActive}>
                                    Channel
                                </PersonalInfoChannel>

                                <PersonalInfoKYC className='applicantAddtionalInfoItem' disabled={KYCActive?true:false} KYCActive={KYCActive} onClick={toggleKYCActive} >
                                    KYC
                                </PersonalInfoKYC>
                            </Nav>
                            <Navbar.Brand className='navBarBrand'>Additional Information</Navbar.Brand>
                        </Navbar>
                        {/* conditional content will go here */}
                        <div className='addtionalInfoElements'> 
                            {iDActive?(
                                <PartFive personalInfoPartFive={personalInfoPartFive} />
                            ):null}

                            {familyActive?(
                                <FamilyMember personalInfoFamilyMember={personalInfoFamilyMember}/>
                            ):null}

                            {employmentActive?(
                                <EmploymentInfo personalInfoEmploymentInfo={personalInfoEmploymentInfo} personalInfoEmploymentInfo2={personalInfoEmploymentInfo2} />
                            ):null}

                            {chequeActive?(
                                <h1>welp</h1>
                            ):null}

                            {addressActive?(
                                <Fourthpart personalInfoRez={personalInfoRez}  personalInfoRez2={personalInfoRez2} />
                            ):null}

                            {channelActive?(
                                <h1>try again</h1>            
                            ):null}

                            {KYCActive?(
                                <h1>lol</h1>            
                            ):null}
                            {/* conditional content will go here */}

                            <div className='applicantInfoButton d-flex justify-content-end mt-2 mb-2'>
                                <Button type='submit'>Next</Button>
                            </div>
                        </div> 
                    </Form>

                    
                ) : null }


                {coApplicantActive? (
                    <Form onSubmit={handleSubmit} className='coApplicantInfoContainer'>

                        <div className='row' className='coapplicantInfoNames'> 
                            <Coapp  coAppInfo ={coAppInfo} />
                        </div>

                    
                        <div className='applicantInfoButton d-flex justify-content-end mt-2 mb-2'>
                            <Button type='submit'>Next</Button>
                        </div>
                     
                    </Form>










                ):null}











              
                {/* <Form onSubmit={handleSubmit} > 
                    <div className='row'>
                        <Firstpart  personalInfoNames ={personalInfoNames} />
                    </div>

                    <div className ='row'>
                        <Secondpart personalInfoOther={personalInfoOther} />
                    </div>

                    <div className ='row' >
                        <Thirdpart personalInfoStatus={personalInfoStatus} />
                    </div>

                    <div className='row'>
                        <Fourthpart personalInfoRez={personalInfoRez}  personalInfoRez2={personalInfoRez2} />
                    </div>

                    <div className='row'>
                        <PartFive personalInfoPartFive={personalInfoPartFive} />
                    </div>

                    <div className='row'>  
                        <FamilyMember personalInfoFamilyMember={personalInfoFamilyMember} />  
                    </div>


                    <div className='row'>
                        <EmploymentInfo personalInfoEmploymentInfo={personalInfoEmploymentInfo} personalInfoEmploymentInfo2={personalInfoEmploymentInfo2} />
                    </div>

                    <div className='d-flex justify-content-end mt-2 mb-2'>
                      <Button type='submit'>Next</Button>
                    </div>

                </Form> */}
            </PersonalInfoContainer>
    )
}
