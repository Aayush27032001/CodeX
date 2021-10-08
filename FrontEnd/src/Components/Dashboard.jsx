import React from 'react'
import '../CSS/Dashboard.css'
import BlogPage from './BlogPage'

// written BlogPage
// Saved for later
// Edit profile

function Dashboard() {
    return (
        <div className="side-bar-container">
            <div className="sidebar-item">
                Edit Profile
            </div>
            <div className="sidebar-item">
                Saved Blogs
            </div>
            <div className="sidebar-item">
                My Blogs
            </div>
        </div>
    )
}

export default Dashboard
