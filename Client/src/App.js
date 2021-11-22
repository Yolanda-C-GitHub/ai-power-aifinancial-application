import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header'
// import Login from './components/Login/Login'
import Personalinfo from './components/PersonalInfo/Personalinfo' 
import Sidemenu  from './components/Sidemenu/Sidemenu'
import ApplicantInfo from './components/ApplicantInfo/Applicantinfo'

function App() {
  return (
    <Router className="App">
      <Sidemenu />
      
      <Routes>
        <Route path='/home' element={<Personalinfo />} />
      </Routes>


    </Router>
  );
}

export default App;


 {/* <Header /> */}
      {/* <Login /> */}
      {/* <Personalinfo /> */}
      {/* <ApplicantInfo/> */}