import React, { Component } from 'react'
import "./home.css"
import styled from 'styled-components'




const HomeContainer = styled.div`
    padding-left:${({ sideMenuPush }) => sideMenuPush? '250px':'0px' };
    transition: 0.5s;
`;

export default function Home({sidemenuState}) {


    return (
        <HomeContainer className ='homeContainer'  sideMenuPush={sidemenuState.sidemenu}><h1>Study Music</h1>
            <a href='https://www.youtube.com/watch?v=ctc3kF8CVs4' target='_blank'><h1>Bassa Nova Jazz</h1></a>
            <a href='https://www.youtube.com/watch?v=cUZbRc0lwjA' target='_blank'><h1>Paris Jazz</h1></a>
            <a href='https://www.youtube.com/watch?v=zXwOAw09g1I' target='_blank'><h1>Seaside Bassa Nova</h1></a>
            <a href='https://www.youtube.com/watch?v=33aluIL_K3U' target='_blank'><h1>OldSchool Runescape</h1></a>

        
        </HomeContainer>
    )
}
