import { useState, useContext } from 'react'
import '../CSS/Dashboard.css'
import BlogPage from './Blogs/BlogPage/BlogPage'
import { userContext } from '../context/userContex'
import Cards from './Blogs/BlogCard/BlogCard'
// written BlogPage
// Saved for later
// Edit profile

function Dashboard() {

    const { user, setUser } = useContext(userContext)
    const [blogs, setBlogs] = useState([])
    const findBlogs = async () => {

        if (blogs.length === 0) {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}blogs/find-user-blog/${user._id}`)
            const data = await response.json()
            setBlogs(data.blogs)
        }

    }
    return (
        <div className='dashboard-conatiner'>
            <div className="side-bar-container">
                <div className="sidebar-item">
                    Edit Profile
                </div>
                <div className="sidebar-item">
                    Saved Blogs
                </div>
                <div className="sidebar-item" onClick={() => findBlogs()}> My Blogs</div>
            </div>

            <div className='user-dashboard-blog-container'>
                {
                    blogs.map((blog,i)=>{
                        return <Cards key={i} blog={blog}/>
                    })
                }
            </div>
        </div>
    )
}

export default Dashboard
