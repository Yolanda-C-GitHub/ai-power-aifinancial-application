import React from 'react'
import './sidemenu.css'
import {SidemenuData} from './SidemenuData'




export default function Sidemenu() {
    return (
        <div className='sidemenu'>
            <ul className='sidemenuList'>
                {SidemenuData.map((val, key) =>{
                    return (
                        <li key={key} className='sidemenuItems' onClick={()=>{window.location.pathname=val.link}} >
                            <div>{val.icon}</div>       
                            <div>{val.title}</div>
                        </li>
                    )
                }) }
            </ul>
        </div>
    )
}
