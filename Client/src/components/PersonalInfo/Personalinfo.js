import React, {useState} from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import Firstpart from './Personalinfoparts/Firstpart'
import Secondpart from './Personalinfoparts/Secondpart'
import Thirdpart from './Personalinfoparts/Thirdpart'
import Fourthpart from './Personalinfoparts/Fourthpart'

export default function Personalinfo() {

    const[lastName, setLastName] = useState()
    const[firstName, setFirstName] = useState()
    const[englishName, setEnglishName] = useState()
    const personalInfoNames = {setLastName, setFirstName, setEnglishName}
    
    const[gender, setGender]= useState("Male")
    const[birthDay, setBirthday] =useState()
    const[sinNum, setSinNum]= useState()
    const personalInfoOther = {gender,setGender, setBirthday, setSinNum}
    
    function handleSubmit(e){
        e.preventDefault()
        console.log('submit form button working')
        console.log(lastName, firstName, englishName)
        console.log(gender, birthDay, sinNum)
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

                    <div className ='row'>
                        <Thirdpart />
                    </div>

                    <div className='row'>
                        <Fourthpart />
                    </div>

                    <div className='d-flex justify-content-end mt-2 mb-2'>
                      <Button type='submit'>Next</Button>
                    </div>

                </Form>
            </Container>
    )
}
