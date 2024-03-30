import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

function Login(props) {

  const con = props.DB

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  /*const [correctLogin, setCL] = useState([])

  const url = require("url")
  const queryParams = {
    limit: 1,
    dbUsername: username,
  };
  const params = new url.URLSearchParams(queryParams);
  console.log(params);

  useEffect(() => {
    axios.get('DATABASE URL/?${params}')
        .then(response => {
            setCL(response.data);
        })
        .catch(error => {
            console.log(error);
        });
  }, []);*/

  function checkLoginInfo(event) {
    event.preventDefault()
    var realPassword = 'GET THIS FROM DATABASE TOO'

    const usernameElement = document.getElementById('username')
    const passwordElement = document.getElementById('password')
    const form = document.getElementById('L-form')

    con.connect(function (err) {
      if (err) throw err;
      var sql = "SELECT " + username + " FROM users";
      con.query(sql, function (err, result, fields) {
        if (err) {
          usernameElement.style.color = 'red'
          passwordElement.style.color = 'red'
          alert("Username or password is incorrect")
        }
        realPassword = result[0].dbPassword;
      });
    });

    if (password !== realPassword) {
      passwordElement.style.color = 'red'
      usernameElement.style.color = 'red'
      alert("Invalid username or password")
      return
    }
    else {
      passwordElement.style.color = 'black'
      usernameElement.style.color = 'black'
      window.location.href = "/home"
      return
    }
  }


  return (
    <div className="login-container">
      <div className="login-function">
        <h2 className="login">Login</h2>
        <div className="login-underline"></div>
        <form id='L-form' name='L-form'>
          <div className="form-group">
            <label htmlFor="username">
              <input type="text" id="username" name="username" placeholder="Username"
                onInput={e => setUsername(e.target.value)} />
              <div className="input-underline"></div>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="creds">
              <input type="password" id="password" name="password" placeholder="Password"
                onInput={e => setPassword(e.target.value)} />
              <div className="input-underline"></div>
            </label>
          </div>
          <button type="submit" className="login-btn" onClick={checkLoginInfo}>Login</button>
        </form>
        <div className="links">
          <span>Don't have an account?<br></br><Link to="/createaccount"><a href="/createaccount">Create Account</a></Link></span>
          <span><a href="/forgot-password">Forgot Password?</a></span>
        </div>
      </div>
      <div className="map-container-lg">
        <div className="map-design-lg">
          <div className="blue-bg-lg">
          </div>
        </div>
        <div className="wvu-logo-lg"></div>
      </div>
    </div>
  );
}

export default Login;
