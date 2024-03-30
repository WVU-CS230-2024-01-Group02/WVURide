import './App.css';
import Login from './Components/Login'
import CreateAccount from './Components/CreateAccount';
import HomePage from './Components/HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const mysql = require('mysql')

  const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'loginSystem',
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
