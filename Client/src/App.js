import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
// import Login from './components/Login/Login'
import Personalinfo from './components/PersonalInfo/Personalinfo' 
import Sidemenu  from './components/Sidemenu/Sidemenu'

function App() {
  return (
    <div className="App">

     
      <Header />
      <Sidemenu />
      {/* <Login /> */}
      {/* <Personalinfo /> */}

    </div>
  );
}

export default App;
