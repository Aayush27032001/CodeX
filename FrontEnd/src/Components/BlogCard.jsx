import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../CSS/BlogCard.css'
import { format } from 'date-fns'
const Cards = ({ blog }) => {


    return (
        <div className="card-container">
            <div className='card2 text-center shadow'>
                <div className='overflow'>
                    <img src={blog.thumbnail} alt="Image 1" className="card-img-top" />
                </div>
                <div className='card-body text-dark'>
                    <h4 className='card-title'>{blog.title}</h4>
                    <p id="card-author">
                        <b>{format(new Date(blog.createdAt), 'MMM dd, yyyy')}</b> by <b>{blog.author.username}</b>
                    </p>
                    <p id="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, accusamus cumque adipisci molestiae distinctio repellendus sit expedita minus natus odit?
                    </p>
                    <Link to={`/blogs/${blog._id}`}>Read More</Link>
                </div>
            </div>
        </div>

    );


}

export default Cards