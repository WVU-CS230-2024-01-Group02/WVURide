import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  var realUsername = 'GET THIS FROM DATABASE'
  var realPassword = 'GET THIS FROM DATABASE TOO'

  function checkLoginInfo(event) {
    event.preventDefault()
    const usernameElement = document.getElementById('username')
    const passwordElement = document.getElementById('password')
    const form = document.getElementById('L-form')

    if (username !== realUsername || password !== realPassword) {
      if (username !== realUsername) {
        usernameElement.style.color = 'red'
      }
      else {
        usernameElement.style.color = 'black'
      }
      if (password !== realPassword) {
        passwordElement.style.color = 'red'
      }
      else {
        passwordElement.style.color = 'black'
      }
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
          <button type="submit" className="login-btn" onClick={checkLoginInfo()}>Login</button>
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
