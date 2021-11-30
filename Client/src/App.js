import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react'


import Sidemenu  from './components/Sidemenu/Sidemenu'
import Home from  './components/Home/Home'
import Personalinfo from './components/PersonalInfo/Personalinfo' 

import Header from './components/Header'
import Login from './components/Login/Login'
import ApplicantInfo from './components/ApplicantInfo/Applicantinfo'

function App() {

  const [sidemenu, setSidemenu] = useState(true);
  const sidemenuState={sidemenu, setSidemenu};

  return (
    <Router className="App">
      <div className='routeContainer'>
        <Sidemenu sidemenuState={sidemenuState}/>
        
        <Routes className = 'routes'>
          <Route path='/home' element={<Home sidemenuState={sidemenuState} />} />
          <Route path='/basicinfo/personalinfo' element={<Personalinfo  sidemenuState={sidemenuState} />} />
          
        </Routes>
      </div>

    </Router>
  );
}

export default App;


    {/* <Header /> */}
      {/* <Login /> */}
      {/* <Personalinfo /> */}
      {/* <ApplicantInfo/> */}