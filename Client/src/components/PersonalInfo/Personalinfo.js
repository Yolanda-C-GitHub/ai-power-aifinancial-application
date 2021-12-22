import React, {useState, useRef} from 'react'
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
import KycIA from './Personalinfoparts/KycIA'

import Coapp from './Coapplicant/CoApplicantInfo'
import Coidinfo from './Coapplicant/Coidinfo'


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
const PersonalInfoKYCIA=styled(Nav.Link)`
    background-color: ${({ KYCIAActive }) => (KYCIAActive? '#202c37' : '#374c5f;')}
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
    const [KYCIAActive, setKYCIAActive]=useState(false);
    function toggleIDActive(e){
        e.preventDefault();
        setIDActive(true);
        setFamilyActive(false)
        setEmploymentActive(false)
        setChequeActive(false)
        setAddressActive(false)
        setChannelActive(false)
        setKYCIAActive(false)
    }
    function toggleFamilyActive(e){
        e.preventDefault();
        setIDActive(false);
        setFamilyActive(true)
        setEmploymentActive(false)
        setChequeActive(false)
        setAddressActive(false)
        setChannelActive(false)
        setKYCIAActive(false)
    }
    function toggleEmploymentActive(e){
        e.preventDefault();
        setIDActive(false);
        setFamilyActive(false)
        setEmploymentActive(true)
        setChequeActive(false)
        setAddressActive(false)
        setChannelActive(false)
        setKYCIAActive(false)
    }
    function toggleChequeActive(e){
        e.preventDefault();
        setIDActive(false);
        setFamilyActive(false)
        setEmploymentActive(false)
        setChequeActive(true)
        setAddressActive(false)
        setChannelActive(false)
        setKYCIAActive(false)
    }
    function toggleAddressActive(e){
        e.preventDefault();
        setIDActive(false);
        setFamilyActive(false)
        setEmploymentActive(false)
        setChequeActive(false)
        setAddressActive(true)
        setChannelActive(false)
        setKYCIAActive(false)
    }
     function toggleChannelActive(e){
        e.preventDefault();
        setIDActive(false);
        setFamilyActive(false)
        setEmploymentActive(false)
        setChequeActive(false)
        setAddressActive(false)
        setChannelActive(true)
        setKYCIAActive(false)
    }
    function toggleKYCIAActive(e){
        e.preventDefault();
        setIDActive(false);
        setFamilyActive(false)
        setEmploymentActive(false)
        setChequeActive(false)
        setAddressActive(false)
        setChannelActive(false)
        setKYCIAActive(true)
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


    // Referrence for Form and validate status
    const formRef=useRef()
    const [validated, setValidated] = useState(false)


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
    const[showDischarge, setShowDischarge]=useState();
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
        showDischarge,
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
        setShowDischarge,
    }
    
    // state control part 5 ID info
    const[idArray, setIdArray] = useState([
        {
            idType:'',
            idNum:'',
            issueDate:'',
            expiryDate:'',
            verificationDate:'',
            issuingProvince:'',
            comments:'',
        },
    ]);
    const [validationStatusFormID, setValidationStatusFormID]=useState(false)
    const personalInfoPartFive ={
        idArray,
        setIdArray,
        setValidationStatusFormID,
        validationStatusFormID,
        formRef,
        setValidated,
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
    const [validationStatusFormFamily, setValidationStatusFormFamily]=useState(false)
    const personalInfoFamilyArray={
        familyArray,
        setFamilyArray,
        setValidationStatusFormFamily,
        validationStatusFormFamily,
        formRef,
        setValidated,
    }

    // state control employment info
    const [validationStatusFormEmployment, setValidationStatusFormEmployment]=useState(false)
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
    const [currentEmployer, setCurrentEmployer]=useState(true)
    const [showEmployer2, setShowEmployer2]=useState(false)
    const [otherOccupation, setOtherOccupation]=useState()
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
        setCurrentEmployer,
        setShowEmployer2,
        setOtherOccupation,
        employmentStatus,
        annualIncome,
        employerName,
        employerStreetNum,
        employerAddress,
        employerUnitNum,
        employerCity,
        employerProvince,
        employerPostalCode,
        durationStart,
        durationEnd,
        industry,
        occupation,
        currentEmployer,
        showEmployer2,
        otherOccupation,
        validationStatusFormFamily,
        setValidationStatusFormEmployment,
        formRef,
        setValidated,
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
    const [otherOccupation2, setOtherOccupation2]=useState();
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
        setOtherOccupation2,
        employmentStatus2,
        annualIncome2,
        employerName2,
        employerStreetNum2,
        employerAddress2,
        employerUnitNum2,
        employerCity2,
        employerProvince2,
        employerPostalCode2,
        durationStart2,
        durationEnd2,
        industry2,
        occupation2,
        otherOccupation2,
    }


    // states for personalinfo cheque
    const [validationStatusFormCheque, setValidationStatusFormCheque] = useState(false)
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
    ]);
    const personalInfoChequeArray = {
        chequeArray,
        setChequeArray,
        formRef,
        setValidated,
        validationStatusFormCheque,
        setValidationStatusFormCheque,
    }


    // state control for 4th part address info
    const [validationStatusFormAddress, setValidationStatusFormAddress]=useState(false)
    const[houseNum, setHouseNum]=useState();
    const[currentRez, setCurrentRez]=useState();
    const[aptNum, setAptNum]=useState();
    const[province, setProvince]=useState('ON');
    const[postalCode, setPostalCode]=useState();
    const[rezSince, setRezSince]=useState();
    const[showRez2, setShowRez2]=useState(false);
    const personalInfoRez = {
        setHouseNum, 
        setCurrentRez, 
        setAptNum, 
        setProvince, 
        setPostalCode,
        setRezSince,
        setShowRez2,
        houseNum,
        currentRez,
        aptNum,
        province,
        postalCode,
        rezSince,
        showRez2,
        formRef,
        setValidated,
        validationStatusFormAddress,
        setValidationStatusFormAddress,
    }
    const[houseNum2, setHouseNum2]=useState();
    const[currentRez2, setCurrentRez2]=useState();
    const[aptNum2, setAptNum2]=useState();
    const[province2,setProvince2]=useState();
    const[postalCode2, setPostalCode2] = useState();
    const[rezSince2, setRezSince2]=useState();
    const personalInfoRez2 = {
        setHouseNum2, 
        setCurrentRez2, 
        setAptNum2,
        setProvince2, 
        setPostalCode2, 
        setRezSince2,
        houseNum2,
        currentRez2,
        aptNum2,
        province2,
        postalCode2,
        rezSince2,
    }

 



    // states for personalinfo Channel
    const [validationStatusFormChannel, setValidationStatusFormChannel]=useState(false);
    const [wechat, setWechat] = useState()
    const [telegram, setTelegram] =useState()
    const [addtionalEmail, setAddtionalEmail] = useState()
    const personalInfoChannel={
        wechat,
        telegram,
        addtionalEmail,
        setWechat,
        setTelegram,
        setAddtionalEmail,
        validationStatusFormChannel,
        setValidationStatusFormChannel,
        formRef,
        setValidated,
    }
    // const [channelArray, setChannelArray]=useState([
    //     {       
    //         channelType:'',
    //         accountid:'',
    //         nickName:'',
    //     },
    //     {
    //         channelType:'',
    //         accountid:'',
    //         nickName:'',
    //     },
        
    // ])














    


























    // ====================================================================
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
    const[showCoDischarge, setShowCoDischarge]=useState();
    const coAppInfo = {
        colastName,
        cofirstName,
        coenglishName,
        cogender,
        cobirthDay,
        cosinNum,
        coemail,
        cocellNum,
        cohomeNum,
        coworkNum,
        colivingStatus,
        comaritalStatus,
        cocitizenship,
        cotaxStatus,
        codeclared,
        codischargeDate,
        showCoDischarge,
        setCoLastName,
        setCoFirstName,
        setCoEnglishName,
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
        setcoDeclared,
        setcoDischargeDate,
        setShowCoDischarge,
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






    function handleSubmitOld(e){
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
    }




    








    function submitData(){
        if(validationStatusFormID===true && validationStatusFormFamily===true && validationStatusFormEmployment===true){
            console.log('submit state info to database')
            console.log('validation passed')
            console.log('---Applicant data---')
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
                idArray,
            )
            console.log('---co-applicant data---')
            console.log(
                colastName,
                cofirstName,
                coenglishName,
                cogender,
                cobirthDay,
                cosinNum,
                coemail,
                cocellNum,
                cohomeNum,
                coworkNum,
                colivingStatus,
                comaritalStatus,
                cocitizenship,
                cotaxStatus,
                codeclared,
                codischargeDate,
                showCoDischarge,
            )  
        }else{
            console.log('not all validations are truez')
            alert('make sure all validations are passed for each tabs')
            console.log('---applicant data---')
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
                idArray,
            )
            console.log('---co-applicant data---')
            console.log(
                colastName,
                cofirstName,
                coenglishName,
                cogender,
                cobirthDay,
                cosinNum,
                coemail,
                cocellNum,
                cohomeNum,
                coworkNum,
                colivingStatus,
                comaritalStatus,
                cocitizenship,
                cotaxStatus,
                codeclared,
                codischargeDate,
                showCoDischarge,
            )
        }

    }

    return (
        <Form noValidate ref={formRef} validated={validated} >
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

                                <PersonalInfoKYCIA className='applicantAddtionalInfoItem' disabled={KYCIAActive?true:false} KYCIAActive={KYCIAActive} onClick={toggleKYCIAActive} >
                                    KYC-AI
                                </PersonalInfoKYCIA>

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
                                <Channel personalInfoChannel={personalInfoChannel} />          
                            ):null}

                            {KYCIAActive?(
                                <KycIA />       
                            ):null}
                        </div> 
                        
                    </div>
                ) : null }





                {coApplicantActive? (
                    <div className='coApplicantInfoContainer'>

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
                                <Coidinfo/>
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
                    </div>
                ):null}





                <div className='applicantInfoButton'>
                    <Button
                        onClick={submitData}
                    > Submit Data
                    </Button>
                </div>
            </PersonalInfoContainer>




        </Form>
    )
}
