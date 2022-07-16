import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useHistory} from 'react-router-dom'

toast.configure()
const Signup = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const postData = async (e) => {

        e.preventDefault();
        const userData = JSON.stringify({
            username,
            email,
            password
        })

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}signup`, {

            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: userData
        })
        const data = await response.json();

        if(data.error){

            toast.error(data.error,{
                position:toast.POSITION.TOP_CENTER,
                autoClose:2000
            })
            console.log(data.error)
        }else{
            console.log(data.message)
            toast.success(data.message,{
                position:toast.POSITION.TOP_CENTER,
                autoClose:2000
            })
            history.push("/login")
        }
    }

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={(e) => postData(e)}>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)} />

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
                    value="Sign Up" />

                <div className="signin-wraper">
                    <p className="signin-text">Already have an account? </p>
                    <Link to='/login' className="signin-link">Signin</Link>
                </div>
            </form>
        </div>
    )

}

export default Signup
