import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../context/userContex'
import '../CSS/Navbar.css'

export default function Navbar() {

    const [linksVisible, setLinksVisible] = useState(false)
    const [dropdown, setDropdown] = useState(true)
    const { user, setUser } = useContext(userContext)

    const LogoutHandle = async () => {

        const res = await fetch("http://localhost:5000/logout", { method: "GET", credentials: "include" });
        const data = await res.json()
        console.log('logout', data)
        setUser(null)
        setDropdown(true)

    }

    return (
        <div className="navbar">
            <Link><div className="nav-brand">
                <img src="Logo2.png" alt="CodeX" width="130px" />
            </div></Link>

            <ul className="nav-items-1" id={linksVisible ? "hidden" : ""}>
                <li><Link className='nav-items' to='/'>Home</Link></li>
                <li><Link className='nav-items' to='/blog'>Blog</Link></li>
                <li><Link className='nav-items' to='/Tutorials'>Tutorials</Link></li>
                <li><Link className='nav-items' to='/Test'>Test</Link></li>
                <li><Link className='nav-items' to='/interview-experiences'>Interview Experience</Link></li>

                {console.log('idjoidasoi', user)}
                {
                    user != null ?
                        <span className="nav-items" onClick={() => setDropdown(!dropdown)} >{user.name}</span>
                        : <li><Link to='/login'><span className="nav-box-item">Login</span></Link></li>
                }


            </ul>

            <button onClick={() => setLinksVisible(!linksVisible)} className="nav-burger">
                <i class="fas fa-bars fa-2x"></i>
            </button>

            <div className="nav-dropdown" id={dropdown ? "dropdown" : ""}>
                {
                    user ?
                        <span onClick={() => setDropdown(true)} className="nav-items" onClick={LogoutHandle}>Logout</span>
                        : null
                }
                
            </div>
        </div>
    )
}

