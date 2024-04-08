import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import crypto from 'crypto'

function Login(props) {

  const con = props.DB

  const [username, setUsername] = useState('')
  const [unhashedPassword, setPassword] = useState('')


  async function checkLoginInfo(event) {
    event.preventDefault()

    var hash = crypto.createHash('sha256')
    var saltedPassword = unhashedPassword + 'carpool'
    hash.update(saltedPassword)
    var password = hash.digest('hex')

    const usernameElement = document.getElementById('username')
    const passwordElement = document.getElementById('password')
    const form = document.getElementById('L-form')

    const response = await axios.post("http://localhost:8800/login", {
      username: username,
    }).then(response => {
      console.log(response.status)
      console.log(response.data)
      return response.data
    }).catch(error => {
      if (error.status !== 200){
        return null
      }
    });

    if (response == null || response.length == 0) {
      passwordElement.style.color = 'red'
      usernameElement.style.color = 'red'
      alert("Invalid username or password")
      console.log("null response")
      return
    }

    var realPassword = response[0].password
    console.log(realPassword)

    if (password !== realPassword) {
      passwordElement.style.color = 'red'
      usernameElement.style.color = 'red'
      alert("Invalid username or password")
      console.log("invalid password")
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
