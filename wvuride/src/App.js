import './App.css';
import Login from './Components/Login'
import MapDesign from './Components/MapDesign';
import CreateAccount from './Components/CreateAccount';

function App() {
  return (
    <div className="App">
      {/* <div className='login-page'>
      <Login />
      <MapDesign />
      </div> */}

      <div className='create-account'>
      <CreateAccount />
      <MapDesign/>
      </div> 
     
    </div>
  );
}

export default App;
