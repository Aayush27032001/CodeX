import React from 'react'
import '../CSS/Homepage.css'
import CoursesCard from './CoursesCard'

export default function Home() {
    return (
        <>
        <div className="home-container">
            <img src="Icons.png" alt="Image" width="350px"/>
            <div className="home-first-slide">
                <h1 className="slide-text-1">Refreshing your ideas and <br/> broading your vision</h1>
                <p className="slide-subtext-1">Premium access to all courses for life time</p>
            </div>
            <button className="home-button">See Courses</button>
        </div>
        </>
    )
}
