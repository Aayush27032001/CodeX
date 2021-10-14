import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cards from '../BlogCard/BlogCard'
import './BlogPage.css'
// import blogimg from "../assets/1\ \(1\).png"
import blogimg from '../../../assets/1\ \(1\).png'
function BlogPage({ blogs }) {

    return (
        <div className="blog-page-container">
            <div className="blog-flex">                
                <div className="create-blog">
                    <p className='blog-flex-text'>It is Great to Express your<br/> Ideas</p>
                    <Link className="create-blog-link" to="/createBlog">Write your blog</Link>
                </div>
                <div className="blog-flex-image">
                    <img src={blogimg} width="70%" alt="" />
                </div>
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
