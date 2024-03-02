import React from "react"
import "./CreateAccount.css";

function CreateAccount() {


    const [email, setEmail] = useState(props?.value ?? '');

    function checkForm(event) {
        event.preventDefault()
        const emailToCheck = email.value
        const domain = email.substring(email.indexOf("@") + 1)
        const targetDomain = "mix.wvu.edu"
        const element = document.querySelector("email")
        if (domain !== targetDomain) {
            element.style.color = 'red'
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
                        onInput={e => setInput(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="pfp">Upload a Profile Picture:</label>
                    <input type="file" id="pfp" name="pfp" />
                </div>

                <div className="form-group">
                    <label htmlFor="bio">Enter a bio if you'd like!</label>
                    <textarea id="bio" name="bio"></textarea>
                </div>
                <button type="submit" id="createAccount" onClick={checkForm}>Create Account</button>
            </form>
        </div>
    );
}

export default CreateAccount;