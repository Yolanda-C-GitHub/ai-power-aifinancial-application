import React, {useState} from 'react'
import './sidemenu.css'
import styled from 'styled-components'
import {SidemenuData} from './SidemenuData'
import {Link} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


    // custom conditonal style for
    const SidemenuNav = styled.div`
    height: 100vh;
    width: 250px;
    background-color: #2F4050 ;
    position: fixed;
    top:0;
    transition: 0.5s;
    left:${({ sidemenu }) => (sidemenu? '0' : '-250px')};
    `;



export default function Sidemenu() {
    
   

    // State control and function for sidemenu toggle
    const [sidemenu, setSidemenu] = useState(true);
    const showSidemenu = () => setSidemenu(!sidemenu);




    return (
        <div>

            <Navbar className ='navBar'>
                <MenuIcon className='navBarMenuIcon' onClick={showSidemenu} />
                <h1 className='navBarTitle'>AI Financial</h1>
            </Navbar>

            <SidemenuNav sidemenu={sidemenu} >
                <CloseIcon className='closeIcon' onClick={showSidemenu} />


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
  