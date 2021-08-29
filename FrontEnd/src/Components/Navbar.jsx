import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'



export default class Navbar extends Component {
    render() {

        return (
            <div>
                <nav className="nav-container">
                    <Link to='/about'><div className="nav-brand">
                        CodeX
                    </div></Link>

                    <input type="checkbox" id="check" />
                    <label for="check" class="checkbtn burger">
                        <i class="fas fa-bars fa-2x "></i>
                    </label>
                    
                    <ul className="nav-items-1">
                        <li><Link to='/login'><span className="nav-box-item">Login</span></Link></li>
                        <li><Link to='/Contributor'><span className="nav-box-item">Be A Contributor</span></Link></li>
                        <li><span className='nav-items'><Link to='/Test'>Interview Experience</Link></span></li>
                        <li><span className='nav-items'><Link to='/Test'>Test</Link></span></li>
                        <li><span className='nav-items'><Link to='/Test'>Tutorials</Link></span></li>
                        <li><span className='nav-items'><Link to='/Test'>Blog</Link></span></li>
                        <li><span className='nav-items'><Link to='/courses'>Course</Link></span></li>
                        <li><span className='nav-items'><Link to='/'>Home</Link></span></li>
                    </ul>
                </nav> 
                
            </div>
        )
    }
}
