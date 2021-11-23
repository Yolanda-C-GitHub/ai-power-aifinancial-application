import React, {useState} from 'react'
import './personalinfo.css'
import styled from 'styled-components'
import {Form, Button, Container} from 'react-bootstrap'
import Firstpart from './Personalinfoparts/Firstpart'
import Secondpart from './Personalinfoparts/Secondpart'
import Thirdpart from './Personalinfoparts/Thirdpart'
import Fourthpart from './Personalinfoparts/Fourthpart'
import PartFive from './Personalinfoparts/Partfive'
import FamilyMember from './Personalinfoparts/FamilyMember'
import EmploymentInfo from './Personalinfoparts/EmploymentInfo'


const PersonalInfoContainer = styled.div`
    padding-left:${({ sideMenuPush }) => sideMenuPush? '250px':'0px' };
    transition: 0.5s;
`;



 
export default function Personalinfo({sidemenuState}) {

    // state control for 1st part
    const[lastName, setLastName] = useState()
    const[firstName, setFirstName] = useState()
    const[englishName, setEnglishName] = useState()
    const personalInfoNames = {setLastName, setFirstName, setEnglishName}
    
    // state control for 2nd part
    const[gender, setGender]= useState()
    const[birthDay, setBirthday] =useState()
    const[sinNum, setSinNum]= useState()
    const personalInfoOther = {gender,setGender, setBirthday, setSinNum}
    
    // state control for 3rd part
    const[livingStatus, setLivingStatus] = useState('');
    const[maritalStatus, setMaritalStatus]=useState('');
    const[citizenship, setCitizenship] = useState('');
    const[taxStatus, setTaxStatus]=useState('');
    const personalInfoStatus = {setLivingStatus, setMaritalStatus, setCitizenship, setTaxStatus}

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
    const[email, setEmail]=useState();
    const[cellNum, setCellNum]= useState();
    const[homeNum, setHomeNum]=useState();
    const[workNum, setWorkNum]=useState();
    const[idType, setIdType]=useState('provincialDriversLicense');
    const[idNum, setIdNum]=useState();
    const[issueDate, setIssueDate]=useState();
    const[expiryDate, setExpiryDate]=useState();
    const[verificationDate, setVerificationDate]=useState();
    const[issuingProvince, setIssuingProvince]=useState('ON');
    const[comments, setComments] = useState();
    const[declared, setDeclared] = useState('No');
    const[dischargeDate, setDischargeDate]= useState();
    const personalInfoPartFive ={
        declared,
        setEmail,
        setCellNum,
        setHomeNum,
        setWorkNum,
        setIdType,
        setIdNum,
        setIssueDate,
        setExpiryDate,
        setVerificationDate,
        setIssuingProvince,
        setComments,
        setDeclared,
        setDischargeDate,
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


        console.log('submit form button working')
        console.log(lastName, firstName, englishName)
        console.log(gender, birthDay, sinNum)
        console.log(livingStatus, maritalStatus, citizenship, taxStatus)
        console.log(houseNum,currentRez,aptNum,province,postalCode,rezSince)
        console.log(houseNum2,currentRez2,aptNum2,province2,postalCode2,rezSince2)
        console.log(email, cellNum, homeNum, workNum, idType, idNum, issueDate, expiryDate, verificationDate, issuingProvince, comments, declared, dischargeDate)
        console.log(spouseFirstName, spouseLastName, spouseBirth, child1Name,child1Birth, child2Name, child2Birth, child3Name, child3Birth, child4Name, child4Birth)

        console.log(
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
        )
        console.log(
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
        )


    }





    return (
            <PersonalInfoContainer className='border personalInfoContainer' sideMenuPush={sidemenuState.sidemenu}>
                <h2 className='personalinfoHeader'>Personal Info</h2>
                <Form onSubmit={handleSubmit} > 
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

                </Form>
            </PersonalInfoContainer>
    )
}
