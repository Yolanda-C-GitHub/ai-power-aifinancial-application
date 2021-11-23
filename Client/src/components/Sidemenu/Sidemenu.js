import React, {useState} from 'react'
import './sidemenu.css'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {SidemenuData} from './SidemenuData'
import Submenu from './Submenu';


// custom conditonal style for sidemenu
const SidemenuNav = styled.div`
height: 100vh;
width: 250px;
background-color: #2F4050 ;
position: fixed;
top:0;
transition: 0.5s;
left:${({ sidemenu }) => (sidemenu? '0' : '-250px')};
z-index: 10;
`;



export default function Sidemenu({sidemenuState}) {

    // State control and function for sidemenu toggle
    const showSidemenu = () => sidemenuState.setSidemenu(!sidemenuState.sidemenu);

    
 
    return (
        <div>

            <Navbar className ='navBar' >
                <MenuIcon className='navBarMenuIcon' onClick={showSidemenu} />
                <h1 className='navBarTitle'>AI Financial</h1>
            </Navbar>

            <SidemenuNav className='sidemenuList' sidemenu={sidemenuState.sidemenu} >
                <CloseIcon className='closeIcon' onClick={showSidemenu} />

                {SidemenuData.map((item, index)=>{
                    return <Submenu item={item} key={index} />
                })}s

            </SidemenuNav>

        </div>

    )
}
  



// <ul className='sidemenuList'>
// {SidemenuData.map((val, key) =>{

//     return (

//         <li key={key}  className='sidemenuItems' onClick={(e)=>{
//             e.preventDefault()
//             window.location.pathname=val.link
//             }}
//             id={window.location.pathname === val.link ? 'sidemenuListItemActive':'' }
//         >
//             <div className='sidemenuItemsIcon'>{val.icon}</div>       
//             <div className='sidemenuItemsTitle'>{val.title}</div>
//         </li>

//     )

// }) }
// </ul>
