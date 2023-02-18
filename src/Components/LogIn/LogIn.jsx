import React from "react";
import './LogIn.css'

function LogIn () {
    return (
        <div className="logIn">
            <h3>Log In</h3>
            <form>
                <label><b>Username:</b></label><br/>
                <input type="text" /><br/>
                <label><b>Password:</b></label><br/>
                <input type="text" /><br/>
                <button>Log In</button><br/>
            </form>
            <div className="links">
                <a href="">Sign up</a>
                <a href="">Forgot password</a>
            </div>
        </div>
    )
}

export default LogIn;