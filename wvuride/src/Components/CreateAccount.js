import React from "react"
import "./CreateAccount.css";

function CreateAccount() {

    function checkEmail(event) {
        email = event.target.value
        const email = document.getElementsByClassName("email");
        at_sign = email.indexOf("@")
        if (email.substring(at_sign + 1) != "mix.wvu.edu") {
            const styles = StyleSheet.create({
                input, [title = "email"]: {
                    color: red
                }
            })
        }
    }

    return (
        <div className="ca-container">
            <div title="CreateAccount">
                <h2 title="CA-Title" className="ca-title">Please create an account.</h2>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Please enter your full name:</label>
                    <input type="text" id="name" name="name" required="required" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Please enter your mix.wvu.edu email address.</label>
                    <input type="text" id="email" name="email" required="required"
                        onChange={checkEmail} />
                </div>
                <div className="form-group">
                    <label htmlFor="pfp">Upload a Profile Picture:</label>
                    <input type="file" id="pfp" name="pfp" />
                </div>

                <div className="form-group">
                    <label htmlFor="bio">Enter a bio if you'd like!</label>
                    <textarea id="bio" name="bio"></textarea>
                </div>
                <button type="submit" className="ca-btn">Create Account</button>
            </form>
        </div>
    );
}

export default CreateAccount;