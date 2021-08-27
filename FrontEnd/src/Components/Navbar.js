import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'



export default class Navbar extends Component {
    render() {

        return (
            <>
                <BrowserRouter>
                    <nav className="Nav-contain">
                        <Link to='/about'><div className="nav-brand">
                            CodeX
                        </div></Link>

                        
                            <input type="checkbox" id="check" />
                            <label for="check" class="checkbtn burger">
                                <i class="fas fa-bars fa-2x "></i>
                            </label>
                        


                        <ul className="nav-items-1">
                            <li><Link to='/Login'><span className="nav-box-item">Login</span></Link></li>
                            <li><Link to='/Contributor'><span className="nav-box-item">Be A Contributor</span></Link></li>
                            <li><span className='nav-items'><Link to='/Test'>Test</Link></span></li>
                            <li><span className='nav-items'><Link to='/Test'>Tutorials</Link></span></li>
                            <li><span className='nav-items'><Link to='/Test'>Blog</Link></span></li>
                            <li><span className='nav-items'><Link to='/Test'>Course</Link></span></li>
                            <li><span className='nav-items'><Link to='/Test'>Home</Link></span></li>
                        </ul>

                    </nav>

                    <br />
                    <br />
                    <br />
                    <br />

                    <Switch>
                        <Route path='/about'>
                            <p>Hello about</p>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}
