import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useHistory} from 'react-router-dom'
import RedirectorButtons from './RedirectorButtons'

toast.configure()
const Signup = ({role}) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [typeOfRole,setTypeOfRole] = useState("Student's");
    const history = useHistory()
    const postData = async (e) => {

        e.preventDefault();
        const userData = JSON.stringify({
            username,
            email,
            role,
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
            localStorage.setItem("token",data.token);
            toast.success(data.message,{
                position:toast.POSITION.TOP_CENTER,
                autoClose:2000
            })
            history.push(`/${role}/login`)
        }
    }

    return (
        <div className="signup-container">
            <RedirectorButtons mode='signup' setTypeOfRole={setTypeOfRole}/>
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
                    value={typeOfRole+' Sign Up'} />

                <div className="signin-wraper">
                    <p className="signin-text">Already have an account? </p>
                    <Link to='/student/login' className="signin-link">Signin</Link>
                </div>
            </form>
        </div>
    )

}

export default Signup
