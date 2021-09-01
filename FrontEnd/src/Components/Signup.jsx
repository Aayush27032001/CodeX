import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Signup extends Component {
    render() {
        return (
            <div className="signup-container">
                <form className="signup-form" action="" method="post">
                    <input className="input-field" type="text" name="Username" id="Username" placeholder="Username"/>
                    <input className="input-field" type="text" name="Email" id="Email" placeholder="Email"/>
                    <input className="input-field" type="password" name="Password" id="Password" placeholder="Password" />
                    <input className="input-field" type="text" name="Country" id="Country" placeholder="Country"/>
                    <input className="input-field" type="text" name="State" id="State" placeholder="State"/>
                    <input className="input-field" type="text" name="City" id="City" placeholder="City"/>
                    <input className="form-btn" type="submit" value="Sign Up"/>
                    <div className="signin-wraper">
                        <p className="signin-text">Already have an account? </p>
                        <Link to='/login' className="signin-link">Signin</Link>
                    </div>
                </form>
            </div>
        )
    }
}
