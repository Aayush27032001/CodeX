import React from 'react'
import InterviewExp from './InterviewExp'
import { Link } from 'react-router-dom'

export default function InterviewPage() {
    return (
        <>
        <div style={{ height: '300px' }} className="home-container">
            <img src="Icons.png" alt="Image" height="200px" width="250px" />
            <div className="home-first-slide">
                <h1 className="slide-text-1">It’s good to learn from your mistakes. <br /> It’s better to learn from other people’s mistakes.</h1>
            </div>
        </div>
        <div className="interview-title">
            <h3>Interview Experiences</h3>
            <Link className='share-interview-link'>Add My Experience</Link>
        </div>
        <InterviewExp/>
        <InterviewExp/>
        <InterviewExp/>

        </>
    )
}
