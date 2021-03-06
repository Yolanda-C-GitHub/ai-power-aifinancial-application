import React from 'react'
import {Card, Form, FloatingLabel, Button} from 'react-bootstrap'
import './familymember.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import moment from 'moment'
import DoneIcon from '@mui/icons-material/Done';


export default function FamilyMember(params) {

    

    function handleOnChangeInput(index,e){
        const values = [...params.personalInfoFamilyArray.familyArray]
        values[index][e.target.name] = e.target.value;
        params.personalInfoFamilyArray.setFamilyArray(values)
      
    }
 

    function handleAdd(){
        params.personalInfoFamilyArray.setFamilyArray(
            [...params.personalInfoFamilyArray.familyArray,
                {
                    relationship:'children',
                    firstName:'',
                    lastName:'',
                    dateofBirth:'',
                }
            ]
        )
    }

    
    const handleDelete=(index)=>{
        const values = [...params.personalInfoFamilyArray.familyArray]
        values.splice(index,1)
        params.personalInfoFamilyArray.setFamilyArray(values);
    }


    return (
        <Card className='familyMemberCard'>

            {params.personalInfoFamilyArray.familyArray.map((item, index) => 
                <Form.Group className='formGroupFamily'>
                    
                    <FloatingLabel className='familyRelationship' label='Relationship' >
                        <Form.Select required
                            name='relationship'
                            value={params.personalInfoFamilyArray.familyArray[index].relationship} 
                            onChange={(e) => handleOnChangeInput(index,e)}
                        >
                            <option value='spouse'>Spouse</option>
                            <option value="children">Children</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel className='familyFirstName'  label='First Name'>
                        <Form.Control required
                            pattern='[A-Za-z]+'
                            placeholder='First Name' 
                            name='firstName'
                            value={params.personalInfoFamilyArray.familyArray[index].firstName}
                            onChange={(e)=>handleOnChangeInput(index,e)} 
                        />
                        <Form.Control.Feedback type='invalid'>Required Field Letters Only</Form.Control.Feedback>
                    </FloatingLabel>
                        
                    <FloatingLabel className='familyLastName' label='Last Name' >
                        <Form.Control required
                            pattern='[A-Za-z]+'
                            placeholder='Last Name' 
                            name='lastName' 
                            value={params.personalInfoFamilyArray.familyArray[index].lastName}
                            onChange={(e)=>handleOnChangeInput(index,e)} 
                        />
                        <Form.Control.Feedback type='invalid'>Required Field Letters Only</Form.Control.Feedback>
                    </FloatingLabel>
                            
                    <FloatingLabel  className='familyBirth' label='Date of Birth' >
                        <Form.Control required
                            max={moment().format("YYYY-MM-DD")}
                            type='date' 
                            name='dateofBirth'
                            value={params.personalInfoFamilyArray.familyArray[index].dateofBirth} 
                            onChange={(e)=>handleOnChangeInput(index,e)} 
                        />
                        <Form.Control.Feedback type='invalid'>Required Field Letters Only</Form.Control.Feedback>
                    </FloatingLabel>


                    <div className='buttonBoxFamily'>
                    {index === 0? (
                        <></>
                    ):(<DeleteOutlineIcon className='deleteIcon' onClick={()=> handleDelete(index)} />
                    )}

                    {index > 0? (
                        <></>
                    ):(
                        <AddBoxOutlinedIcon className='addIcon' onClick={()=>handleAdd()} />
                    )}
                    </div>
                
                </Form.Group>
            )}


            <div className='validationContainerPersonalFamily'>
                <Button
                    type='submit'
                    onClick={(e)=>{
                        e.preventDefault()
                        const form = params.personalInfoFamilyArray.formRef.current
                        if (form.checkValidity() === false) {
                            params.personalInfoFamilyArray.setValidated(true);
                            e.stopPropagation();
                            alert('Make sure all required fields are filled out properly')
                        }else{
                            params.personalInfoFamilyArray.setValidationStatusFormFamily(true)
                        }
                    }}
                >Validate</Button>

                {params.personalInfoFamilyArray.validationStatusFormFamily===true?(
                    <DoneIcon/>  
                ):null 
                }
            </div>        
         
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