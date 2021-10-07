import React from 'react'
import TestBox from './TestBox'
import { Link } from 'react-router-dom'
import img3 from "../assets/test-image.jpg"

export default function TestPage() {
    return (
        <>
            <div className="test-first-slide">
                <h1 className="test-text-1">Prepare for <br />Interview/Exams</h1>
                <p className="test-text-2">Hand-curated Tests/Quizes to help<br />you polish your skills.</p>
                <div className="test-buttons">
                    <img src={img3} class="test-image" alt="testpage"></img>
                    <Link className='test-subject-link'>Java</Link>
                    <Link className='test-subject-link'>Python</Link>
                    <Link className='test-subject-link'>C++</Link>
                    <Link className='test-subject-link'>DBMS</Link>
                    <Link className='test-subject-link'>C language</Link>
                    <Link className='test-subject-link'>CNS</Link>
                    <Link className='test-subject-link'>OS</Link>
                    <Link className='test-subject-link'>DSA</Link>
                    <Link className='test-subject-link'>Aptitude</Link>
                    <Link className='test-subject-link'>Android</Link>
                    <Link className='test-subject-link'>Linux</Link>
                    <Link className='test-subject-link'>JSP</Link>

                </div>

            </div>

            <div className="test-title">
                <h3>Some of our popular Tests</h3>
            </div>
            <TestBox />
            <TestBox />
            <TestBox />
            <TestBox />
            <TestBox />

        </>
    )
}
