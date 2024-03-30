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

  const db = mysql.createConnection({
    user: 'admin',
    host: 'wvuride-db1.c9w2o8komlq5.us-east-2.rds.amazonaws.com',
    password: 'password',
    database: 'metadata',
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login DB={db} />} />
          <Route path="/createaccount" element={<CreateAccount DB={db} />} />
          <Route path="/home" element={<HomePage DB={db} />} />

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
