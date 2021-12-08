import React,{useRef} from 'react'
import {Card, Form, FloatingLabel, InputGroup} from 'react-bootstrap'
import './familymember.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';


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
                        <Form.Select onChange={(e) => handleOnChangeInput(index,e)} name='relationship'  value={params.personalInfoFamilyArray.familyArray[index].relationship}  >
                            <option value='spouse'>Spouse</option>
                            <option value="children">Children</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel className='familyFirstName'  label='First Name'>
                        <Form.Control placeholder='First Name' onChange={(e)=>handleOnChangeInput(index,e)} name='firstName' value={params.personalInfoFamilyArray.familyArray[index].firstName} />
                    </FloatingLabel>
                        
                    <FloatingLabel className='familyLastName' label='Last Name' >
                        <Form.Control placeholder='Last Name' onChange={(e)=>handleOnChangeInput(index,e)} name='lastName' value={params.personalInfoFamilyArray.familyArray[index].lastName} />
                    </FloatingLabel>
                            
                    <FloatingLabel  className='familyBirth' label='Date of Birth' >
                        <Form.Control type='date' onChange={(e)=>handleOnChangeInput(index,e)} name='dateofBirth' alue={params.personalInfoFamilyArray.familyArray[index].dateofBirth}  />
                    </FloatingLabel>


                    {index === 0? (
                        <></>
                    ):(<DeleteOutlineIcon className='deleteIcon' onClick={()=> handleDelete(index)} />
                    )}

                    {index > 0? (
                        <></>
                    ):(
                        <AddBoxOutlinedIcon className='addIcon' onClick={()=>handleAdd()} />
                    )}
                        
                
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