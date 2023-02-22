import React from "react";
import './Login.css'

function LogIn () {
    return (
        <body className="logInBody">
                    <div className="logIn">
            <h1>Log In</h1>
            <form>
                <label htmlFor=""><b>Username</b></label><br />
                <input type="text" /><br />
                <label htmlFor=""><b>Password</b></label><br />
                <input type="text" /><br />
                <button>Log In</button>
            </form>
            <div className="logInLinks">
                <a href="">Forgot Password</a><br />
                <a href="">No Account? Sign up!</a>
            </div>
        </div>
        </body>
    )
}

export default LogIn;