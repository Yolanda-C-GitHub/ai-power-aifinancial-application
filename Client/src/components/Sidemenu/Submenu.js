import React, {useState} from 'react'
import { NavLink } from 'react-router-dom' 
import styled from 'styled-components'
import {SidemenuData} from './SidemenuData'


const SidemenuLink = styled(NavLink)`
    display:flex;
    background-color: #2F4050;
    color:white;
    &:hover{
        transition: 0.1s;
        border-left: 4px solid blue;
    }
        &.active{
        border-left: 4px solid blue;
    }
`;

const SidemenuLabel = styled.span`
    
`;

const DropdownLink = styled(NavLink)`
    background-color: #2F4050;  
    height:60px;
    padding-left: 3rem;
    display:flex;
    align-items: center;
    text-decoration:none;
    font-size:18px;
    transition:0.1s;

    &:hover{
        cursor: pointer;
        border-left: 4px solid red;
        background: #293846 ;
        transition:0.1s;
    }
    &.active{
        border-left: 4px solid red;
    }
`;



export default function Submenu( {item} ){

    const [subnav, setSubnav] = useState(false)
    const [subNavActive, setSubNavActive] = useState(false)


    function toggleSubNav(e){
        e.preventDefault();
        setSubnav(!subnav);
        
    }

    return (
        <>
            <SidemenuLink  activeClassName='active' classNam ='sidemenuList' to={item.link} onClick={item.subNav && toggleSubNav}> 

                <div className='sidemenuItems'>
                    <div className='sidemenuItemsIcon'>{item.icon}</div>
                    <SidemenuLabel className='sidemenuItemsTitle'>{item.title}</SidemenuLabel>
                    
                    <div className= 'sidemenuItemsDropIcon' > {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}  </div>
                </div>
              
            </SidemenuLink>


            {subnav && item.subNav.map((item,index) => {
                return <DropdownLink to={item.link} key={index}>
                        <div className='submenuIcon'>{item.icon}</div>
                        <SidemenuLabel className='subMenuTitle'>{item.title}</SidemenuLabel>
                        </DropdownLink>
            } )}




        </>
    );
};
