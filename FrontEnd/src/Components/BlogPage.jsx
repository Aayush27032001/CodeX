import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Cards from './BlogCard'
import '../CSS/BlogPage.css'
function BlogPage({blogs}) {

    return (
        <div>

            <div className="blog-page-container">

                <Link to="/createBlog">Write a blog</Link>
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
