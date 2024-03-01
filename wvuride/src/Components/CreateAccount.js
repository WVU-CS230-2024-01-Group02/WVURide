function CreateAccount(){

    function checkEmail(event){
        email = event.target.value
        at_sign = email.indexOf("@")
        if(email.substring(at_sign+1) != "mix.wvu.edu"){
            const styles = StyleSheet.create({
                input,[title="email"]: {
                 color: red
                }
            }
        }
    }

    return (
        <><div title="CreateAccount">
            <h1 title="CA-Title">Please create an account.</h1>
        </div><form>
                <label>Please enter your full name:
                    <input type="text" title="name" required="required"/>
                </label>
                <label>Please enter your mix.wvu.edu email address.
                    <input type="text" title="email" required="required"
                    onChange={checkEmail}
                    />
                </label>
                <label>
                    <input title="pfp" type="file"/>
                </label>
                <label>Enter a bio if you'd like!
                    <input type="textarea" title="bio"/>
                </label>
            </form></>
    )
}