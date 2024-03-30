import './App.css';
import Login from './Components/Login'
import CreateAccount from './Components/CreateAccount';
import HomePage from './Components/HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import mysql from "mysql";


function App() {
  /*const mysql = require('mysql')*/

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/home" element={<HomePage />} />

        </Routes>
      </BrowserRouter>

      {/* <div className='login-page'>
        < Login />
        <MapDesign />
      </div> */}

      {/* <div className='create-account'>
      <CreateAccount />
      <MapDesign/>
      </div>  */}

      {/*<div className='home-page' >
        <HomePage/>
    </div>*/}

    </div >
  );
}

export default App;
