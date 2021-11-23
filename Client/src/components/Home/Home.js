import React, { Component } from 'react'
import "./home.css"
import styled from 'styled-components'




const HomeContainer = styled.div`
    padding-left:${({ sideMenuPush }) => sideMenuPush? '250px':'0px' };
    transition: 0.5s;
`;

export default function Home({sidemenuState}) {


    return (
        <HomeContainer className ='homeContainer'  sideMenuPush={sidemenuState.sidemenu}>
            <h1>hello Ron how are you today >:) ?</h1>
        </HomeContainer>
    )
}
