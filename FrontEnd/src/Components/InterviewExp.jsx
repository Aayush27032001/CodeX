import React from 'react'
import '../CSS/InterviewExp.css'
import { Link } from 'react-router-dom'

export default function InterviewExp() {
    return (
        <div className='experience-container'>
            <h3>Mindtree | Software Engineer | Fresher | May 2021</h3>
            <div className="interview-info">
                <hr />
                <h5>Mr. Nilesh Yadav</h5>
                <p>Off campus | Mumbai University | 8.89 CGPA | 3 Rounds | 3 Coding Problems</p>
            </div>
            <div className="interview-status">
                <div style={{display:'flex'}}><i className="fas fa-check-circle interview-status-1"></i>
                <p>Selected</p></div>
                <Link className="interview-btn">View</Link>
            </div>

        </div>
    )
}
