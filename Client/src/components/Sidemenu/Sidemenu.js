import React, {useState} from 'react'
import './sidemenu.css'
import styled from 'styled-components'
import {SidemenuData} from './SidemenuData'
import {Link} from 'react-router-dom'
import {Navbar, Container} from 'react-bootstrap'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Sidemenu() {
    
    // Customer styled elements
    const SidemenuNav = styled.div`
        height: 100vh;
        width: 250px;
        background-color: #2F4050 ;
    `






    // State control and function for sidemenu toggle
    const [sidemenu, setSidemenu] = useState(false);
    const showSidemenu = () => setSidemenu(!sidemenu)




    return (
        <div>
    
            <Navbar className ='navBar'>
                <MenuIcon className='navBarMenuIcon' onClick={showSidemenu} />
                <h1 className='navBarTitle'>AI Financial</h1>
            </Navbar>




            <SidemenuNav>
                <CloseIcon className='closeIcon' />

                <ul className='sidemenuList'>
                    {SidemenuData.map((val, key) =>{
                        return (
                            <li key={key} className='sidemenuItems' 
                            onClick={(e)=>{
                                e.preventDefault()
                                window.location.pathname=val.link
                            }}
                            id={window.location.pathname === val.link ? 'sidemenuListItemActive':'' }
                            >
                                <div className='sidemenuItemsIcon'>{val.icon}</div>       
                                <div className='sidemenuItemsTitle'>{val.title}</div>
                            </li>
                        )
                    }) }
                </ul>
            </SidemenuNav>

        </div>

    )
}
  