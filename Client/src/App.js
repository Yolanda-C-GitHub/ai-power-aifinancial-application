import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Header from './components/Header'
// import Login from './components/Login/Login'
import Personalinfo from './components/PersonalInfo/Personalinfo' 
import Sidemenu  from './components/Sidemenu/Sidemenu'
import ApplicantInfo from './components/ApplicantInfo/Applicantinfo'

function App() {
  return (
    <Router className="App">

     
      {/* <Header /> */}
      <Sidemenu />
      {/* <Login /> */}
      {/* <Personalinfo /> */}
      {/* <ApplicantInfo/> */}

    </Router>
  );
}

export default App;
