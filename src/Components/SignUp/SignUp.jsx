import React from "react";
import './SignUp.css'

function SignUp () {
    return (
        <div className="signUp">
            <h3>Sign Up</h3>
            <form>
                <label><b>Username:</b></label><br/>
                <input type="text" /><br/>
                <label><b>Email::</b></label><br/>
                <input type="text" /><br/>
                <label><b>Password:</b></label><br/>
                <input type="text" /><br/>
                <label><b>Confirm Passowrd:</b></label><br/>
                <input type="text" /><br/>
                <button>Create Account</button><br/>
            </form>
            <div className="links">
                <a href="">Already have an account</a>
            </div>
        </div>
    )
}

export default SignUp;