import React from "react";
import "./Login.css";

function Login() {

  


  return (
    <div className="login-container">
      <div className="login-function">
        <h2 className="login">Login</h2>
        <div className="login-underline"></div>
        <form id='L-form' name='L-form'>
          <div className="form-group">
            <label htmlFor="username">
              <input type="text" id="username" name="username" placeholder="Username" 
              onInput={e => setUsername(e.target.value)}/>
              <div className="input-underline"></div>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="creds">
              <input type="password" id="password" name="password" placeholder="Password" 
              onInput={e => setPassword(e.target.value)}/>
              <div className="input-underline"></div>
            </label>
          </div>
          <button type="submit" className="login-btn" onClick={checkLoginInfo}>Login</button>
        </form>
        <div className="links">
          <span>Don't have an account? <br /><a href="/signup">Create Account</a></span>
          <span><a href="/forgot-password">Forgot Password?</a></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
