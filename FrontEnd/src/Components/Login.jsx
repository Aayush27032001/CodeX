import React, { Component } from 'react'
import '../CSS/Login.css'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div className="background">
                <form className="login-form" action="" method="post">
                    <input className="input-field" type="text" name="Email" id="Email" placeholder="Email"/>
                    <input className="input-field" type="text" name="Password" id="Password" placeholder="Password" />
                    <span><label className="lab-text">Don't have an account? &nbsp; </label><Link className="Login-Link">Signup</Link></span>
                    <input className="form-btn" type="submit" value="Sign In"/>
                </form>
            </div>
        )
    }
}
