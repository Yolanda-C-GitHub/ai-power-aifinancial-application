import React from 'react'
import './sidemenu.css'
import {SidemenuData} from './SidemenuData'
import {Link} from 'react-router-dom'




export default function Sidemenu() {
    return (
        <div>
            <nav>hello </nav>


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
  