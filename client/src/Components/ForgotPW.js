import React from 'react';
import './ForgotPW.css';
import { Link } from "react-router-dom";



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
                    <button type="submit" className="ca-btn">Reset your password</button>

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

export default ForgotPW;