import React from 'react'
import '../CSS/Homepage.scss'
import { Link } from 'react-router-dom'
import Cards from './Blogs/BlogCard/BlogCard'
import loadingPNG from '../assets/loading.png'
import homeimg from '../assets/home-banner-img.svg'


export default function Home({ blogs, loading }) {
	return (
		<>
			{loading ? <div class="loader">
				<img className='loading-img' src={loadingPNG} width="4%" alt="Loading" />
				<h3>Loading...</h3>
			</div>
				:
				<>
					<div id="home-banner-section">
						<div className="container">
							<div className="home-container">
								<div className="home-banner-left">
									<h1 className="slide-text-1">Refreshing your ideas and <br /> broading your vision</h1>
									<p className="slide-subtext-1">Premium access to all courses for life time</p>
									<div>
										<button className="home-button"><Link className='Link' to="/tutorials">Read Tutorials</Link></button>
									</div>
								</div>
								<div className="home-banner-right">
									<div>
										<img src={homeimg} alt="Image"/>
									</div>
								</div>
							</div>
						</div>
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
