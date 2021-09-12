import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'

export default function Navbar() {
    
    const [linksVisible, setLinksVisible] = useState(false)
    

    return (
        <div className="navbar">
                <Link><div className="nav-brand">
                    <img src="Logo2.png" alt="CodeX" width="130px" />
                </div></Link>

                <ul className="nav-items-1" id={linksVisible ? "hidden" : ""}>
                    <li><Link className='nav-items' to='/'>Home</Link></li>
                    <li><Link className='nav-items' to='/courses'>Course</Link></li>
                    <li><Link className='nav-items' to='/blog'>Blog</Link></li>
                    <li><Link className='nav-items' to='/Test'>Tutorials</Link></li>
                    <li><Link className='nav-items' to='/Test'>Test</Link></li>
                    <li><Link className='nav-items' to='/interview-experiences'>Interview Experience</Link></li>

                    <li><Link to='/Contributor'><span className="nav-box-item">Be a Contributor</span></Link></li>
                    <li><Link to='/login'><span className="nav-box-item">Login</span></Link></li>
                </ul>

                <button onClick={() => setLinksVisible(!linksVisible)} className="nav-burger">
                    <i class="fas fa-bars fa-2x"></i>
                </button>
            </div>
    )
}

