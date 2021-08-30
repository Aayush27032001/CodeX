import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'



export default class Navbar extends Component {
    render() {

        return (
            <div>
                <nav className="nav-container">
                    <Link to='/about'><div className="nav-brand">
                        <img src="Logo.png" alt="CodeX" width="130px" />
                    </div></Link>

                    <label for="check" class="checkbtn burger">
                        <button className="checkbox" ><i class="fas fa-bars fa-2x "></i> </button>  
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
