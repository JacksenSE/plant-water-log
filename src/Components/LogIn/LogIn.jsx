import React from "react";
import './LogIn.css'
import { Link } from 'react-router-dom';

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
                <Link to="signup">Sign up</Link>
                <a href="">Forgot password</a>
            </div>
        </div>
    )
}

export default LogIn;