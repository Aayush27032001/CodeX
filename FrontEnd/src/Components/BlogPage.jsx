import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Cards from './BlogCard'
import '../CSS/BlogPage.css'
function BlogPage({blogs}) {

    return (
        <div className="blog-page-container">
            <div className="create-blog">
                <Link className="create-blog-link" to="/createBlog">Write a blog</Link>
            </div>
            <div className="blog-container">

                
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
