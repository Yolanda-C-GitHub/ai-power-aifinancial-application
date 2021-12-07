import React,{useRef} from 'react'
import {Card, Form, FloatingLabel, InputGroup} from 'react-bootstrap'
import './familymember.css'

export default function FamilyMember(params) {

    

    const handleOnChangeInput=(index,e)=>{
        console.log (index, e.target.name,)
        const values = [...params.personalInfoFamilyArray.familyArray]
        values[index][e.target.name] = e.target.value;
        params.personalInfoFamilyArray.setFamilyArray(values)
    }
 

    return (
        <Card className='familyMemberCard'>

            {params.personalInfoFamilyArray.familyArray.map((item, index) => 
                <Form.Group className='formGroupFamily'>
                    
                    <FloatingLabel label='Relationship' >
                        <Form.Select onChange={(e) => handleOnChangeInput(index,e)} name='relationship'  value={params.personalInfoFamilyArray.familyArray[index].idType}  >
                            <option value='spouse'>Spouse</option>
                            <option value="children">Children</option>
                            <option value="parent">Parent</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel className='familyFirstName'  label='First Name'>
                        <Form.Control placeholder='First Name' />
                    </FloatingLabel>
                        
                    <FloatingLabel className='familyLastName' label='Last Name' >
                        <Form.Control placeholder='Last Name' />
                    </FloatingLabel>
                            
                    <FloatingLabel  className='familyBirth' label='Date of Birth' >
                        <Form.Control type='date' />
                    </FloatingLabel>

                </Form.Group>
            )}
         


        </Card>
    )
}




{/* <Form.Group className='formGroupSpouseInfo'>
<FloatingLabel className='spouseInfoFirstName' label='Spouse First Name'>
    <Form.Control placeholder ='First Name' ref={spouseFirstNameRef}  onChange={(e)=>params.personalInfoFamilyMember.setSpouseFirstName(e.target.value)} />
</FloatingLabel>

<FloatingLabel className='spouseInfoLastName' label='Spouse Last Name'>
    <Form.Control placeholder ='Last Name' ref={spouseLastNameRef} onChange={(e)=>params.personalInfoFamilyMember.setSpouseLastName(e.target.value)} />
</FloatingLabel>

<FloatingLabel className='spouseInfoBday' label='Date of Birth'>
    <Form.Control type='date' placeholder ='Date of Birth' ref={spouseBirthdayRef} onChange={(e)=>params.personalInfoFamilyMember.setSpouseBirth(e.target.value)}  />
</FloatingLabel>

<InputGroup className='inputGroupChild1'>
    <FloatingLabel className='child1Name' label='Child 1'>
        <Form.Control className='child1' placeholder ='Child 1' ref={child1NameRef} onChange={(e)=>params.personalInfoFamilyMember.setChild1Name(e.target.value)} />
    </FloatingLabel>
    <FloatingLabel label='Date of Birth'>
        <Form.Control type='date' placeholder ='Date of Birth' ref={child1BirthdayRef} onChange={(e)=>params.personalInfoFamilyMember.setChild1Birth(e.target.value)} />
    </FloatingLabel>
</InputGroup>
</Form.Group>


<Form.Group  className='formGroupChildInfo'>
<InputGroup className='otherChildInputGroup'>
    <FloatingLabel className='child2Name' label='Child 2'>
        <Form.Control placeholder='Child 2' className = "otherChildName" ref={child2NameRef} onChange={(e)=>params.personalInfoFamilyMember.setChild2Name(e.target.value)} />
    </FloatingLabel>
    <FloatingLabel label='Date of Birth'>
        <Form.Control type='date' placeholder ='Date of Birth' ref={child2BirthdayRef} onChange={(e)=>params.personalInfoFamilyMember.setChild2Birth(e.target.value)} />
    </FloatingLabel>
</InputGroup>

<InputGroup className='otherChildInputGroup'>
    <FloatingLabel className='child3Name' label='Child 3'>
        <Form.Control placeholder ='Child 3' className ="otherChildName" ref={child3NameRef} onChange= {(e)=>params.personalInfoFamilyMember.setChild3Name(e.target.value) } />
    </FloatingLabel>
    <FloatingLabel label='Date of Birth'>
        <Form.Control type='date' placeholder ='Date of Birth' ref={child3BirthdayRef} onChange={(e)=> params.personalInfoFamilyMember.setChild3Birth(e.target.value)} />   
    </FloatingLabel>
</InputGroup>

<InputGroup className='otherChildInputGroup'>
    <FloatingLabel className='child4Name' label='Child 4'>
        <Form.Control placeholder ='Child 4' className = "otherChildName" ref={child4NameRef} onChange={(e)=>params.personalInfoFamilyMember.setChild4Name(e.target.value)} />
    </FloatingLabel>
    <FloatingLabel label='Date of Birth'>
        <Form.Control type='date' placeholder ='Date of Birth' ref={child4BirthdayRef} onChange={(e)=>params.personalInfoFamilyMember.setChild4Birth(e.target.value)} />
    </FloatingLabel>
</InputGroup>
</Form.Group> */}