import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cards from '../BlogCard/BlogCard'
import InterviewExp from '../../InterviewExp'
import './BlogPage.css'
import blogimg from '../../../assets/1\ \(1\).png'
import loadingPNG from '../../../assets/loading.png'
import img3 from "../../../assets/test-image.jpg"

function BlogPage({ blogs, loading }) {

    return (
        <>

            {loading ? <div class="loader">
                <img className='loading-img' src={loadingPNG} width="4%" alt="Loading" />
                <h3>Loading...</h3>
            </div>
                :
                <div className="blog-page-container">

                    <div className="blog-flex">
                        <div className="create-blog">
                            <h1 className='blog-flex-text'>It is Great to Express your<br /> Ideas</h1>
                            <Link className="create-blog-link" to="/createBlog">Write your blog</Link>
                        </div>
                        <div className="blog-flex-image">
                            <img src={img3} width="72%" height="80%" alt="" />
                        </div>
                    </div>

                    <div className="interview-title">
                        <h3>Blogs</h3>
                    </div>
                    {
                        blogs.map((blog) => {
                            return <InterviewExp key={blog._id} blog={blog} />
                        })
                    }
                </div>
            }
        </>
    )
}

export default BlogPage
