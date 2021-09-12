import React, { useEffect, useState } from 'react'
import Cards from './BlogCard'
import '../CSS/BlogPage.css'
function BlogPage() {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {

        const getBlogs = async () => {

            const response = await fetch('http://localhost:5000/blogs/allblogs')
            const data = await response.json()
            setBlogs(data.blogs)
            console.log("useeff", data)
        }
        getBlogs();
    }, [])



    return (
        <div>
            <a href="/ceateBlog">Write a blog</a>
            <div className="blog-page-container">
                {
                    blogs.map((blog) => {

                        console.log(blog)
                        return <Cards key={blog._id} blog={blog} />
                    })
                }
            </div>
        </div>

    )
}

export default BlogPage
