import React, { useState, useContext } from 'react'
import { Link,useHistory,NavLink } from 'react-router-dom'
import { userContext } from '../context/userContex'
import { FaUserCircle } from "react-icons/fa";
import '../CSS/Navbar.css'
import logo2 from '../assets/Logo2.png'

export default function Navbar() {

    const [linksVisible, setLinksVisible] = useState(false)
    const [dropdown, setDropdown] = useState(true)
    const { user, setUser } = useContext(userContext)
    const history = useHistory()

    const LogoutHandle = async () => {

        const res = await fetch("http://localhost:5000/logout", { method: "GET", credentials: "include" });
        const data = await res.json()
        console.log('logout', data)
        setUser(null)
        setDropdown(true)
        history.push(`/`)
    }

    return (
        <div className="navbar">
            <Link><div className="nav-brand">
                <img src={logo2} alt="CodeX" width="130px" />
            </div></Link>

            <ul className="nav-items-1" id={linksVisible ? "hidden" : ""}>
                <li><NavLink activeClassName='active-page' className='nav-items' exact to='/'>Home</NavLink></li>
                <li><NavLink activeClassName='active-page' className='nav-items' to='/blog'>Blog</NavLink></li>
                <li><NavLink activeClassName='active-page' className='nav-items' to='/tutorials'>Tutorials</NavLink></li>
                <li><NavLink activeClassName='active-page' className='nav-items' to='/Test'>Test</NavLink></li>
                <li><NavLink activeClassName='active-page' className='nav-items' to='/interview-experiences'>Interview Experience</NavLink></li>

                {/* {console.log('idjoidasoi', user)} */}
                {
                    user != null ?
                        <span className="nav-items" onClick={() => setDropdown(!dropdown)} >{user.name}</span>
                        : <li><Link to='/student/login'><span className="nav-box-item">Login</span></Link></li>

                }


            </ul>

            <button onClick={() => setLinksVisible(!linksVisible)} className="nav-burger">
                <i class="fas fa-bars fa-2x"></i>
            </button>
            {
                user ?
                    <div onMouseLeave={() => setDropdown(true)} className="nav-dropdown" id={dropdown ? "dropdown" : ""}>
                        <Link className='Link dropdown-items' to='/user/myblogs'><span onClick={() => setDropdown(true)}>My Blogs</span></Link>
                        {/* <Link className='Link dropdown-items' to='/user/savedblogs'><span onClick={() => setDropdown(true)} >Saved Blogs</span></Link> */}
                        <span className="dropdown-items" onClick={LogoutHandle}>Logout</span>
                        
                    </div>
                    : null
            }


        </div>
    )
}

