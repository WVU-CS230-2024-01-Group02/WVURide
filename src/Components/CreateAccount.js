import React from "react"
import { useState } from "react";
import "./CreateAccount.css";

function CreateAccount() {


    const [email, setEmail] = useState('');


    function checkForm(event) {
        event.preventDefault()
        const domain = email.substring(email.indexOf("@") + 1)
        const targetDomain = "mix.wvu.edu"
        const element = document.querySelector("email")
        if (domain !== targetDomain) {
            element.style.color = 'red'
            return
        }
        else {
            document.getElementById('CA-Form').submit()
            return
        };
    }

    return (
        <div className="ca-container">
            <div title="CreateAccount" className="ca-function">
                <h2 title="CA-Title" className="ca-title">Please create an account.</h2>
                <div className="ca-underline"></div>
            </div>
            <form id='CA-Form' name='CA-Form'>
                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" required="required" placeholder="Full Name" />
                    <div className="input-underline"></div>
                </div>

                <div className="form-group">
                    <label htmlFor="email"></label>
                    <input type="email" id="email" name="email" required="required" placeholder="Mix Email"
                        onInput={e => setEmail(e.target.value)} />
                    <div className="input-underline"></div>
                </div>
                <div className="form-group">
                    <label htmlFor="username"></label>
                    <input type="text" id="username" name="username" required="required" placeholder="Username"></input>
                    <div className="input-underline"></div>
                </div>

                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input type="password" id="password" name="password" required="required" placeholder="Password"></input>
                    <div className="input-underline"></div>
                </div>
                <div className="form-group">
                    <label htmlFor="pfp">Upload a Profile Picture:</label>
                    <div className="custom-pfp-wrapper">
                        <input type="file" className="custom-pfp" name="pfp" />
                        <label htmlFor="pfp" className="custom-pfp-label">
                        </label>
                    </div>

                </div>

                {/* <div className="form-group">
                    <label htmlFor="bio">Enter a bio if you'd like!</label>
                    <textarea id="bio" name="bio"></textarea>
                </div> */}
                <button type="submit" className="ca-btn" >Create Your Account</button> {onClick = { checkForm }}
            </form>
            <div className="links">
                <span>Already have an account? <a href="/login">Go back to login.</a></span>
            </div>
        </div>
    );
}

export default CreateAccount;