import React from 'react'
import './cochannel.css'
import {Card, Form, FloatingLabel,Button} from 'react-bootstrap'
import DoneIcon from '@mui/icons-material/Done'



export default function CoChannel(params) {



    return (
        <Card className='cochannelInfoCard'>
            <Form.Group>
                <FloatingLabel className='coweChatID' label='WeChat ID'>
                    <Form.Control 
                        placeholder='WeChat ID'
                        value={params.copersonalInfoChannel.cowechat}
                        onChange={(e) => {
                            params.copersonalInfoChannel.setcoWechat(e.target.value)
                        }}
                    />
                </FloatingLabel>

                <FloatingLabel className='cotelegramID' label='Telegram ID'>
                    <Form.Control 
                        placeholder='Telegram ID'
                        value={params.copersonalInfoChannel.cotelegram}
                        onChange={(e)=>{
                            params.copersonalInfoChannel.setcoTelegram(e.target.value)
                        }}
                    />
                </FloatingLabel>

                <FloatingLabel className='coemailChannel' label='Addtional E-Mail'>
                    <Form.Control
                        placeholder='Additional E-Mail'
                        value={params.copersonalInfoChannel.coaddtionalEmail}
                        onChange={(e)=>{
                            params.copersonalInfoChannel.setcoAddtionalEmail(e.target.value)
                        }}

                    />
                </FloatingLabel>
            </Form.Group>

            <div className='covalidationContainerPersonalChannel' >
                <Button
                    type='submit'
                    onClick={(e)=>{
                        console.log('button is working')
                        e.preventDefault()
                        const form = params.copersonalInfoChannel.formRef.current
                        if(form.checkValidity()===false){
                            params.copersonalInfoChannel.setValidated(true)
                            e.stopPropagation()
                            alert('Make sure all required fields are filled out properly')
                        }else{
                            params.copersonalInfoChannel.setcoValidationStatusFormChannel(true);
                        }
                    }}
                >Validate</Button>

                {params.copersonalInfoChannel.validationStatusFormChannel===true? (
                    <DoneIcon />
                ): null
                }
            </div>
        </Card>
    )
}
