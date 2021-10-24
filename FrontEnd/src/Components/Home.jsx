import React from 'react'
import '../CSS/Homepage.css'
import { Link } from 'react-router-dom'
import Cards from './Blogs/BlogCard/BlogCard'
import loadingPNG from '../assets/loading.png'


export default function Home({ blogs, loading }) {
    return (
        <>
            {loading ? <div class="loader">
                <img className='loading-img' src={loadingPNG} width="4%" alt="Loading" />
                <h3>Loading...</h3>
            </div>
                :
                <>
                    <div className="home-container">
                        <img src="Icons.png" alt="Image" width="350px" />
                        <div className="home-first-slide">
                            <h1 className="slide-text-1">Refreshing your ideas and <br /> broading your vision</h1>
                            <p className="slide-subtext-1">Premium access to all courses for life time</p>
                        </div>
                        <button className="home-button"><Link className='Link' to="/tutorials">Read Tutorials</Link></button>
                    </div>
                    <div className="home-blog-section">
                        <div className='home-blog-head'>
                            Blogs
                        </div>
                        <div className='home-blog-card'>
                            {
                                blogs.map((blog) => {
                                    console.log(blog)
                                    return <Cards key={blog._id} blog={blog} />
                                })
                            }
                        </div>

                        <div className='home-blog-discover'>
                            <Link className='Link' to="/blog">
                                <button className='home-blog-btn'>
                                    Discover More
                                </button>
                            </Link>
                        </div>
                    </div>
                </>
            }

        </>
    )
}
