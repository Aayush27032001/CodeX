import React from 'react'
import './TestBox.css'
import { Link } from 'react-router-dom'

export default function TestBox() {
    return (
        <div className='test-container'>
            <h3>Basics of Core <br/>Java-Warmup Test</h3>
            <div className="test-info">
                
                <p>This test will cover the basic concepts of Core Java, including basic syntax, Operators, Variables, control statements,etc.</p>
                <hr />
            </div>
            <div className="test-status">
                
                <Link className="test-btn">Attempt</Link>
            </div>

        </div>
    )
}
