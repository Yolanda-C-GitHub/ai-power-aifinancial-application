import React from 'react'
import {Container} from 'react-bootstrap'
import './header.css'


export default function Header() {
    return (
        <div>
            <Container className = 'header d-flex justify-content-center'>
                <h1 className='headerText d-flex justify-content-center align-item-center mb-5 mt-3 w-50'> AI Financial </h1>
            </Container>
        </div>
    )
}

