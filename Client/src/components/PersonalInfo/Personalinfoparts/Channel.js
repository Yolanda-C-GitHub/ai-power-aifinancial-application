import React from 'react'
import './channel.css'
import {Card, Form, FloatingLabel} from 'react-bootstrap'

export default function Channel(params) {






    return (
        <Card className='channelInfoCard'>
            <Form.Group>
                <FloatingLabel className='weChatID' label='WeChat ID'>
                    <Form.Control 
                        placeholder='WeChat ID'
                        value={params.personalInfoChannel.wechat}
                        onChange={(e) => {
                            params.personalInfoChannel.setWechat(e.target.value)
                        }}

                    />
                </FloatingLabel>

                <FloatingLabel className='telegramID' label='Telegram ID'>
                    <Form.Control 
                        placeholder='Telegram ID'
                        value={params.personalInfoChannel.telegram}
                        onChange={(e)=>{
                            params.personalInfoChannel.setTelegram(e.target.value)
                        }}
                    />
                </FloatingLabel>

                <FloatingLabel className='emailChannel' label='Addtional E-Mail'>
                    <Form.Control
                        placeholder='Additional E-Mail'
                        value={params.personalInfoChannel.addtionalEmail}
                        onChange={(e)=>{
                            params.personalInfoChannel.setAddtionalEmail(e.target.value)
                        }}

                    />
                </FloatingLabel>
            </Form.Group>
        </Card>
    )
}
