import React, {useState} from 'react'
import { Link } from 'react-router-dom' 
import styled from 'styled-components'
import {SidemenuData} from './SidemenuData'


const SidemenuLink = styled(Link)`
    display:flex;
    background-color: #2F4050;
    color:white;
    &:hover{
        transition: 0.1s;
        border-left: 4px solid red;
    }
`;

const SidemenuLabel = styled.span`
    
`;

const DropdownLink = styled(Link)`
    background-color: #2F4050;  
    height:60px;
    padding-left: 3rem;
    display:flex;
    align-items: center;
    text-decoration:none;
    font-size:18px;

    $:hover{
        cursor: pointer;
    }
`;



export default function Submenu( {item} ){

    const [subnav, setSubnav] = useState(false)


    function toggleSubNav(e){
        e.preventDefault();
        setSubnav(!subnav);
    }

    return (
        <>
            <SidemenuLink className = 'sidemenuList' to={item.link} onClick={toggleSubNav}> 

                <div className='sidemenuItems'>
                    <div className='sidemenuItemsIcon'>{item.icon}</div>
                    <SidemenuLabel className='sidemenuItemsTitle'>{item.title}</SidemenuLabel>
                    
                    <div className= 'sidemenuItemsDropIcon' > {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}  </div>
                </div>
              
            </SidemenuLink>


            {subnav && item.subNav.map((item,index) => {
                return 
                    <DropdownLink to={item.link} key={index}>
                        {item.icon}
                                <SidemenuLabel>{item.Title}</SidemenuLabel>
                        
                    </DropdownLink>
            } )}




        </>
    );
};
