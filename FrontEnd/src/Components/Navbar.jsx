import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'



export default class Navbar extends Component {
    render() {

        return (
            <div className="navbar">
                <Link><div className="nav-brand">
                    <img src="Logo.png" alt="CodeX" width="130px" />
                </div></Link>

                <ul className="nav-items-1">
                    <li><span className='nav-items'><Link to='/'>Home</Link></span></li>
                    <li><span className='nav-items'><Link to='/courses'>Course</Link></span></li>
                    <li><span className='nav-items'><Link to='/Test'>Blog</Link></span></li>
                    <li><span className='nav-items'><Link to='/Test'>Tutorials</Link></span></li>
                    <li><span className='nav-items'><Link to='/Test'>Test</Link></span></li>
                    <li><span className='nav-items'><Link to='/Test'>Interview Experience</Link></span></li>
                    <li><Link to='/Contributor'><span className="nav-box-item">Be a Contributor</span></Link></li>
                    <li><Link to='/login'><span className="nav-box-item">Login</span></Link></li>
                </ul>
            </div>
        )
    }
}
