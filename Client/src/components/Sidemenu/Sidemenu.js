import React from 'react'
import './sidemenu.css'
import {SidemenuData} from './SidemenuData'




export default function Sidemenu() {
    return (
        <div className='sidemenu'>
            <ul>
                {SidemenuData.map((val, key) =>{
                    return (
                        <li key={key} onClick={()=>{window.location.pathname=val.link}} >
                            <div>{val.icon}</div>       
                            <div>{val.title}</div>
                        </li>
                    )
                }) }
            </ul>
        </div>
    )
}
