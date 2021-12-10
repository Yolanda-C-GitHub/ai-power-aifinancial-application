import React, {useState, useEffect} from 'react'
import Axios  from  'axios'
import styled from 'styled-components'
import {Form, Button, Nav, Navbar} from 'react-bootstrap'

import './personalinfo.css'
import Firstpart from './Personalinfoparts/Firstpart'
import Address from './Personalinfoparts/Address'
import IDInfo from './Personalinfoparts/IDInfo'
import FamilyMember from './Personalinfoparts/FamilyMember'
import EmploymentInfo from './Personalinfoparts/EmploymentInfo'
import Cheque from './Personalinfoparts/Cheque'
import Channel from './Personalinfoparts/Channel'

import Coapp from './Coapplicant/CoApplicantInfo'


// dynamic sidemenu & main container
const PersonalInfoContainer = styled.div`
    padding-left:${({ sideMenuPush }) => sideMenuPush? '250px':'0px' };
    transition: 0.5s;
`;
// dynamic applicant
const PersonalInfoApplicant = styled(Nav.Link)` 
    background-color: ${({ applicantActive }) => (applicantActive? '#202c37' : '#374c5f;')}
`;
// dynamic tabs for applicant
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

// dynamic tabs for coapplicant
const PersonalInfoCoApplicant = styled(Nav.Link)`
    background-color: ${({ coApplicantActive }) => (coApplicantActive? '#202c37' : '#374c5f;')}
`;
const CoPersonalInfoID = styled(Nav.Link)`
    background-color: ${({ coiDActive }) => (coiDActive? '#202c37' : '#374c5f;')}
`;
const CoPersonalInfoFamily=styled(Nav.Link)`
    background-color: ${({ cofamilyActive }) => (cofamilyActive? '#202c37' : '#374c5f;')}
`;
const CoPersonalInfoEmployment=styled(Nav.Link)`
    background-color: ${({ coemploymentActive }) => (coemploymentActive? '#202c37' : '#374c5f;')}
`;
const CoPersonalInfoCheque = styled(Nav.Link)`
    background-color: ${({ cochequeActive }) => (cochequeActive? '#202c37' : '#374c5f;')}
`;
const CoPersonalInfoAddresss=styled(Nav.Link)`
    background-color: ${({ coaddressActive }) => (coaddressActive? '#202c37' : '#374c5f;')}
`;
const CoPersonalInfoChannel=styled(Nav.Link)`
    background-color: ${({ cochannelActive }) => (cochannelActive? '#202c37' : '#374c5f;')}
`;
const CoPersonalInfoKYC=styled(Nav.Link)`
    background-color: ${({ coKYCActive }) => (coKYCActive? '#202c37' : '#374c5f;')}
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

    // state control for detailed info active styling for coapplicant
    const [coiDActive, setCoIDActive]=useState(true)

    const [coemploymentActive, setcoEmploymentActive]=useState(false);
    const [coaddressActive, setcoAddressActive]= useState(false);
    const [cochannelActive, setcoChannelActive]=useState(false);
    const [coKYCActive, setcoKYCActive] = useState(false);

    function toggleCoIDActive(e){
        e.preventDefault();
        setCoIDActive(true);
        setcoEmploymentActive(false);
        setcoAddressActive(false);
        setcoChannelActive(false);
        setcoKYCActive(false);
        console.log(coiDActive);
    }
    function toggleCoEmploymentActive(e){
        e.preventDefault();
        setCoIDActive(false);
        setcoEmploymentActive(true);
        setcoAddressActive(false);
        setcoChannelActive(false);
        setcoKYCActive(false);
    }
    function toogleCoAddressActive(e){
        e.preventDefault();
        setCoIDActive(false);
        setcoEmploymentActive(false);
        setcoAddressActive(true);
        setcoChannelActive(false);
        setcoKYCActive(false);
    }
    function toggleCoChannelActive(e){
        e.preventDefault();
        setCoIDActive(false);
        setcoEmploymentActive(false);
        setcoAddressActive(false);
        setcoChannelActive(true);
        setcoKYCActive(false);
    }
    function toggleCoKYCActive(e){
        e.preventDefault();
        setCoIDActive(false);
        setcoEmploymentActive(false);
        setcoAddressActive(false);
        setcoChannelActive(false);
        setcoKYCActive(true);
    }



  






    // state control for 1st part main applicant tab
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
        firstName,
        lastName,
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
        setLastName,
        setFirstName,
        setEnglishName,
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
        setDeclared,
        setDischargeDate,
    }
    
    // state control for 4th part address info
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

    // state control part 5 ID info
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
    const [familyArray, setFamilyArray]=useState([
        {
            relationship:'spouse',
            firstName:'',
            lastName:'',
            dateofBirth:'',
        },
        {
            relationship:'children',
            firstName:'',
            lastName:'',
            dateofBirth:'',
        },    

    ])
    const personalInfoFamilyArray={
        familyArray,
        setFamilyArray,
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


    // states for personalinfo cheque
    const [chequeArray, setChequeArray] = useState([
        {
            chequeID:'',
            transitNum:'',
            institution:'',
            accountNum:'',
            bankName:'',
            address:'',
            verified:false,
            verifiedDate:'',
        },
        {
            chequeID:'',
            transitNum:'',
            institution:'',
            accountNum:'',
            bankName:'',
            address:'',
            verified:false,
            verifiedDate:'',
        },
    ]);
    const personalInfoChequeArray = {
        chequeArray,
        setChequeArray,
    }

    // states for personalinfo Channel
    const [channelArray, setChannelArray]=useState([
        {       
            channelType:'',
            accountid:'',
            nickName:'',
        },
        {
            channelType:'',
            accountid:'',
            nickName:'',
        },
        
    ])













    
    // state control for coapplicant main 
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
    const[codeclared, setcoDeclared] = useState('No');
    const[codischargeDate, setcoDischargeDate]= useState();
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
        codeclared,
        setcoDeclared,
        setcoDischargeDate,
    }



// coapp Housing Info
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
    const coApphouse={
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






    function handleSubmit(e){
        e.preventDefault()
        if(!firstName || !lastName || !englishName){
          alert('Please Make Sure the Required Fields are Filled')
          return
        }
        console.log(firstName, lastName, englishName, idArray)
        Axios.post('https://ai-financial-333500.uc.r.appspot.com/api/insert',{
            firstName: firstName,
            lastName:lastName, 
            englishName: englishName,
        }).then(() =>  {
            alert('inserted')
            console.log('database updated')
            // later when we need to display the content, we would need to update an array state here right after the database has been updated.
            // as for now, we'll just include a console.log statement that we have successfully updated the database
        })
        Axios.get('https://ai-financial-333500.uc.r.appspot.com/api/readdata').then((response) => {
            console.log(response.data)
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
        // console.log(idArray)
        // console.log(chequeArray)
        console.log(familyArray)

        console.log(lastName, firstName, englishName)

          






        // console.log('submit form button working')
   
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

                    // <Form onSubmit={handleSubmit} className='applicantInfoContainer'> REMOVE THIS FORM FOR NOW, WE ARE GOING TO CREATE MULTIPLE FORMS INSTEAD

                        <div className='applicantInfoContainer'>
                        {/* main info  */}
                        <div className='row' className='applicantInfoNames'> 
                            <Firstpart  personalInfoNames={personalInfoNames} />
                        </div>

                        {/* supporting info tabs */}
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
                      
                        <div className='addtionalInfoElements'> 
                            {iDActive?(
                                <IDInfo personalInfoPartFive={personalInfoPartFive} />
                            ):null}
                            {familyActive?(
                                <FamilyMember personalInfoFamilyArray={personalInfoFamilyArray}/>
                            ):null}

                            {employmentActive?(
                                <EmploymentInfo personalInfoEmploymentInfo={personalInfoEmploymentInfo} personalInfoEmploymentInfo2={personalInfoEmploymentInfo2} />
                            ):null}

                            {chequeActive?(
                                <Cheque personalInfoChequeArray={personalInfoChequeArray}  />
                            ):null}

                            {addressActive?(
                                <Address personalInfoRez={personalInfoRez}  personalInfoRez2={personalInfoRez2} />
                            ):null}

                            {channelActive?(
                                <Channel />          
                            ):null}

                            {KYCActive?(
                                <h1>lol</h1>            
                            ):null}
                         
                        </div> 
                    {/* // </Form> */}
                    </div>
                ) : null }





                {coApplicantActive? (
                    <Form onSubmit={handleSubmit} className='coApplicantInfoContainer'>

                        {/* main info coApplicant  */}
                        <div className='row' className='coapplicantInfoNames'> 
                            <Coapp  coAppInfo ={coAppInfo} />
                        </div>

                         {/* supporting info tabs coApplicant */}
                        <Navbar className='copersonalInfoNavbarContainer2'>
                            <Nav className='me-auto'>

                                <CoPersonalInfoID className='applicantAddtionalInfoItem' disabled={coiDActive?true:false} coiDActive={coiDActive} onClick={toggleCoIDActive}>
                                    ID
                                </CoPersonalInfoID>

                                <CoPersonalInfoEmployment className='applicantAddtionalInfoItem' disabled={coemploymentActive?true:false} coemploymentActive={coemploymentActive} onClick={toggleCoEmploymentActive}>
                                    Employment
                                </CoPersonalInfoEmployment>

                                <CoPersonalInfoAddresss className='applicantAddtionalInfoItem' disabled={coaddressActive?true:false} coaddressActive={coaddressActive} onClick={toogleCoAddressActive} >
                                    Address
                                </CoPersonalInfoAddresss>

                                <CoPersonalInfoChannel className='applicantAddtionalInfoItem' disabled={cochannelActive?true:false} cochannelActive={cochannelActive} onClick={toggleCoChannelActive}>
                                    Channel
                                </CoPersonalInfoChannel>

                                <CoPersonalInfoKYC className='applicantAddtionalInfoItem' disabled={coKYCActive?true:false} coKYCActive={coKYCActive} onClick={toggleCoKYCActive} >
                                    KYC
                                </CoPersonalInfoKYC>
                            </Nav>
                            <Navbar.Brand className='navBarBrand'>Additional Information</Navbar.Brand>
                        </Navbar>




                        <div className='addtionalInfoElements'>
                            {coiDActive?(
                                <h1>hi</h1>
                            ): null}

                            {coemploymentActive?(
                                <h1>welp</h1>
                            ): null}

                            {coaddressActive?(
                                <h1>skrskr</h1>
                            ):null}

                            {cochannelActive?( 
                                <h1>hi</h1> 
                            ):null}

                            {coKYCActive?( 
                                <h1>yes</h1>
                            ):null}
                        </div>


                        <div className='applicantInfoButton d-flex justify-content-end mt-2 mb-2'>
                            {/* <Button type='submit'>Next</Button> */}
                        </div>
                    </Form>
                ):null}





                <div className='applicantInfoButton'>
                    <Button type='submit' onClick={(e)=>{
                        console.log('----------------')
                        console.log(
                            firstName,
                            lastName,
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
                    }}>Test Submit</Button>
                </div>
            </PersonalInfoContainer>
    )
}
