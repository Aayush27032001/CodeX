import React, { useState,useEffect } from 'react'
import '../CSS/Login.css'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [user, setUser] = useState('')
    const history = useHistory()

    const postData = async (e) => {
        e.preventDefault();

        const userData = JSON.stringify({
            email,
            password
        })

        const response = await fetch("http://localhost:5000/login", {

            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: userData,
            credentials:'include'
        })
        const data = await response.json();

        if(data.error){
            console.log(data.error)
            toast.error(data.error,{
                position:toast.POSITION.TOP_CENTER,
                autoClose:2000
            })
        }else{
            console.log(data.message,data.user,data.token)
            toast.success(data.message,{
                position:toast.POSITION.TOP_CENTER,
                autoClose:2000
            })
            // localStorage.setItem('user',data.user.name)
            history.push('/')
        }
    }
    return (
        <div className="login-container">
            <form className="login-form" onSubmit={e=>postData(e)}>

                <input
                    className="input-field"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} />

                <input
                    className="input-field"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} />

                <input
                    className="form-btn"
                    type="submit"
                    value="Sign In" />

                <div className="signup-wraper">
                    <p className="signup-text">Don't have an account? </p>
                    <Link to='/signup' className="signup-link">Signup</Link>
                </div>
            </form>
        </div>
    )

}

export default Login
