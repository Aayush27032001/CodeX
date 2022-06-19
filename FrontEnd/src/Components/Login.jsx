import React, { useState, useContext, useEffect } from 'react'
import { userContext } from '../context/userContex'
import '../CSS/Login.css'
import RedirectorButtons from './RedirectorButtons'
import { Link, useHistory, NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const Login = ({ role }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, setUser } = useContext(userContext)
    const history = useHistory()
    const [typeOfRole,setTypeOfRole] = useState("Student's");

    const postData = async (e) => {
        e.preventDefault();

        const userData = JSON.stringify({
            email,
            role,
            password
        })

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}login`, {

            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: userData,
            credentials: 'include'
        })
        const data = await response.json();

        if (data.error) {
            console.log(data.error)
            toast.error(data.error, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000
            })
        } else {
            console.log(data.message, data.user, data.token)
            setUser(data.user)
            localStorage.setItem("token",data.token);
            toast.success(data.message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000
            })
            history.push('/')
        }
    }

    return (
        <div className="login-container">
           <RedirectorButtons mode='login' setTypeOfRole={setTypeOfRole}/>
           
            <form className="login-form" onSubmit={e => postData(e)}>
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
                    value={typeOfRole+' Sign In'} />

                <div className="signup-wraper">
                    <p className="signup-text">Don't have an account? </p>
                    <Link to='/student/signup' className="signup-link">Signup</Link>
                </div>
            </form>
        </div>
    )

}

export default Login
