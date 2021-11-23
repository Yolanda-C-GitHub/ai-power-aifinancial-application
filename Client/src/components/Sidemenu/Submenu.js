import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom' 
import styled from 'styled-components'



const SidemenuLink = styled(NavLink)`
    display:flex;
    background-color: #2F4050;
    color:white;
    text-decoration: none;
    transition: 0.2s;
    &:hover{
        transition: 0.2s;
        border-left: 4px solid  rgb(74, 185, 245);
    }
        &.active{
        background: #293846 ;
        transition: 0.1s;
    }
`;

const SidemenuLabel = styled.span`
    
`;

const DropdownLink = styled(NavLink)`
    background-color: #2F4050;  
    height:50px;
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

    // drop down menu animation
    const [animate, setAnimate] =  useState(false)
     useEffect(() => {
        setAnimate( true )
      }, [subnav])
    
    


    function toggleSubNav(e){
        e.preventDefault();
        setSubnav(!subnav);
        
    }

    return (
        <>
            <SidemenuLink  activeClassName='active' className ='sidemenuList' to={item.link} onClick={item.subNav && toggleSubNav}> 
                <div className='sidemenuItems'>
                    <div className='sidemenuItemsIcon'>{item.icon}</div>
                    <SidemenuLabel className='sidemenuItemsTitle'>{item.title}</SidemenuLabel>
                    
                    <div className= 'sidemenuItemsDropIcon' > {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}  </div>
                </div>
            </SidemenuLink>


            {subnav && item.subNav.map((item,index) => {
                return (
                    <DropdownLink className={animate? 'dropdownAnimation':null }  to={item.link} key={index}>
                        <div className='submenuIcon'>{item.icon}</div>
                        <SidemenuLabel className='subMenuTitle'>{item.title}</SidemenuLabel>
                    </DropdownLink>
                )
            } )}




        </>
    );
};
