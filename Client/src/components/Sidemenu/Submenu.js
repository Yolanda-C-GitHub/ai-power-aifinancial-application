import React from 'react'
import {Link} from 'react-router-dom' 
import styled from 'styled-components'
import {SidemenuData} from './SidemenuData'


const SidemenuLink = styled(Link)`
    display:flex;
    background-color: #2F4050;

`;

const SidemenuLabel = styled(Link)`


`;



export default function Submenu({item}) {
    return (
        <>
            <SidemenuLink> 

                <div>
                    {item.icon}
                    <SidemenuLabel>{item.title}</SidemenuLabel>
                </div>


                
            </SidemenuLink>
        </>
    )
}
