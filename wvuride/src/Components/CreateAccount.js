

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
        <><div title="CreateAccount">
            <h1 title="CA-Title">Please create an account.</h1>
        </div><form id="CA-Fields">
                <label>Please enter your full name:
                    <input type="text" id="name" required="required" />
                </label>
                <label>Please enter your mix.wvu.edu email address.
                    <input type="text" id="email" required="required" onInput={e => setInput(e.target.value)} />
                </label>
                <label>
                    <input id="pfp" type="file" />
                </label>
                <label>Enter a bio if you'd like!
                    <input type="textarea" id="bio" />
                </label>
                <button type="submit" id="createAccount" onClick={checkForm}>Create Account</button>
            </form></>
    )
}