import React from 'react'
import './sidemenu.css'
import {SidemenuData} from './SidemenuData'
import {Link} from 'react-router-dom'
import {Navbar, Container} from 'react-bootstrap'
import MenuIcon from '@mui/icons-material/Menu';


export default function Sidemenu() {
    return (
        <div>

            <Navbar className ='navBar'>
                <MenuIcon />
                <h1>AI Financial</h1>
            </Navbar>

            <div className='sidemenu'>
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
            </div>

        </div>

    )
}
  