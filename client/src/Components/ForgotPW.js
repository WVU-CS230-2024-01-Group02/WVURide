import React from 'react';
import { useState } from 'react';
import './ForgotPW.css';
import { Link } from "react-router-dom";
import axios from 'axios';


const ForgotPW = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const changePass = async (event) => {
        event.preventDefault();

        // Check if passwords match
        if (password !== confirm) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8800/changePassword", {
                username: email, // Assuming email is the username for changing password
                password: password
            });
            console.log(response.data);

            window.location.href = "/login";
        } catch (error) {
            console.error(error);
            alert("Failed to reset password");
        }
    };


    const ForgotPW = () => {

        return (
            <div className='fp-container'>
                <div className="fp-function">
                    <h2 className='forgot'>Reset Password</h2>
                    <div className="fp-underline"></div>
                    <p className='fp-desc'>Enter your email and your new password in order to reset your current password</p>
                    <form className='FP-form'>

                        <div className='form-group'>
                            <label htmlFor='email'>
                                <input type="email" id="email" name="email" required="required" placeholder="Mix Email" />
                                <div className="input-underline" />
                            </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password"></label>
                            <input type="password" id="password" name="password" required="required" placeholder="Password"></input>
                            <div className="input-underline"></div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirm"></label>
                            <input type="password" id="confirm" name="confirm" required="required" placeholder="Confirm your password"></input>
                            <div className="input-underline"></div>
                        </div>
                        <button type="submit" className="ca-btn" onClick={changePass}>Reset your password</button>

                    </form>
                    <div className="links">
                        <span><Link to="/"><a href="/login">Go back to login.</a></Link></span>
                    </div>
                    <div className="map-container-ca">
                        <div className="map-design-ca">
                            <div className="blue-bg-ca">
                            </div>
                        </div>
                        <div className="wvu-logo-ca"></div>
                    </div>
                </div>
                <div className="map-container-fp">
                    <div className="map-design-fp">
                        <div className="blue-bg-fp">
                        </div>
                    </div>
                    <div className="wvu-logo-fp"></div>
                </div>
            </div>
        )
    }
}
export default ForgotPW;