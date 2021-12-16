import React from 'react'
import './channel.css'
import {Card, Form, FloatingLabel} from 'react-bootstrap'

export default function Channel() {
    return (
        <Card className='channelInfoCard'>
            <Form.Group>
                <FloatingLabel className='weChatID' label='WeChat ID'>
                    <Form.Control placeholder='WeChat ID'
                    />
                </FloatingLabel>

                <FloatingLabel className='telegramID' label='Telegram ID'>
                    <Form.Control placeholder='Telegram ID'
                    />
                </FloatingLabel>
            </Form.Group>
        </Card>
    )
}
