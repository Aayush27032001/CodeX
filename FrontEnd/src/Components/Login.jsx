import React, { Component } from 'react'
import '../CSS/Login.css'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <form className="login-form" action="" method="post">
                    <input className="input-field" type="text" name="Email" id="Email" placeholder="Email"/>
                    <input className="input-field" type="password" name="Password" id="Password" placeholder="Password" />
                    <input className="form-btn" type="submit" value="Sign In"/>
                    <div className="signup-wraper">
                        <p className="signup-text">Don't have an account? </p>
                        <Link to='/signup' className="signup-link">Signup</Link>
                    </div>
                </form>
            </div>
        )
    }
}
