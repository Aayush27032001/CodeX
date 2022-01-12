import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './BlogCard.css'
import { format } from 'date-fns'
const Cards = ({ blog }) => {


    return (
        <div className="card-container">
            <div className='card2 text-center shadow'>
                <div className='overflow'>
                    <img src={blog.thumbnail} alt="Image 1" className="card-img-top blog-thumnail" />
                </div>
                <div className='card-body text-dark'>
                    <h4 className='card-title'>{blog.title}</h4>
                    <p id="card-author">
                        <b>{format(new Date(blog.createdAt), 'MMM dd, yyyy')}</b> by <b>{blog.author.username}</b>
                    </p>
                    <p id="card-text">
                        {
                            blog.description ?
                                blog.description.substring(0, 160) + '....' :
                                ''
                        }
                    </p>
                    <Link className='read-more' to={`/blogs/${blog._id}`}>Read More</Link>
                </div>
            </div>
        </div>

    );


}

export default Cards