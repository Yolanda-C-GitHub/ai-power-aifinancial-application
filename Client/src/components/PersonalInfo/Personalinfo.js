import React, {useState} from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import Firstpart from './Personalinfoparts/Firstpart'
import Secondpart from './Personalinfoparts/Secondpart'
import Thirdpart from './Personalinfoparts/Thirdpart'
import Fourthpart from './Personalinfoparts/Fourthpart'

export default function Personalinfo() {

    // state control for 1st part
    const[lastName, setLastName] = useState()
    const[firstName, setFirstName] = useState()
    const[englishName, setEnglishName] = useState()
    const personalInfoNames = {setLastName, setFirstName, setEnglishName}
    
    // state control for 2nd part
    const[gender, setGender]= useState("Male")
    const[birthDay, setBirthday] =useState()
    const[sinNum, setSinNum]= useState()
    const personalInfoOther = {gender,setGender, setBirthday, setSinNum}

    // state control for 3rd part
    const[livingStatus, setLivingStatus] = useState();
    const[maritalStatus, setMaritalStatus]=useState();
    const[citizenship, setCitizenship] = useState();
    const[taxStatus, setTaxStatus]=useState();
    const personalInfoStatus = {setLivingStatus, setMaritalStatus, setCitizenship, setTaxStatus}

    // state control for 4th part
    const[houseNum, setHouseNum]=useState();
    const[currentRez, setCurrentRez]=useState();
    const[aptNum, setAptNum]=useState();
    const[province, setProvince]=useState();
    const[postalCode, setPostalCode]=useState();
    const[rezSince, setRezSince]=useState();
    const personalInfoRez = {setHouseNum, setCurrentRez, setAptNum, setProvince, setPostalCode, setRezSince}

    
    function handleSubmit(e){
        e.preventDefault()
        console.log('submit form button working')
        console.log(lastName, firstName, englishName)
        console.log(gender, birthDay, sinNum)
        console.log(livingStatus, maritalStatus, citizenship, taxStatus)
        console.log(houseNum,currentRez,aptNum,province,postalCode,rezSince)
    }


    return (
            <Container className=' border'>
                <h2 className='text-center'>Personal Info</h2>
                <Form onSubmit={handleSubmit} > 
                    <div className='row'>
                        <Firstpart  personalInfoNames ={personalInfoNames} />
                    </div>

                    <div className ='row'>
                        <Secondpart personalInfoOther={personalInfoOther} />
                    </div>

                    <div className ='row' >
                        <Thirdpart personalInfoStatus={personalInfoStatus}  />
                    </div>

                    <div className='row'>
                        <Fourthpart personalInfoRez={personalInfoRez} />
                    </div>

                    <div className='d-flex justify-content-end mt-2 mb-2'>
                      <Button type='submit'>Next</Button>
                    </div>

                </Form>
            </Container>
    )
}
