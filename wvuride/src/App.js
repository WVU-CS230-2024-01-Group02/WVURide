import './App.css';
import Login from './Components/Login'
import MapDesign from './Components/MapDesign';

function App() {
  return (
    <div className="App">
      <div className='login-page'>
      <Login />
      <MapDesign />
      </div>

      <div className='create-account'>

      </div>
     
    </div>
  );
}

export default App;
