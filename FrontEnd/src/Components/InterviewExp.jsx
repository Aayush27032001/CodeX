import React from 'react'
import '../CSS/InterviewExp.css'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

export default function InterviewExp({ blog }) {
    return (
        <div className='experience-container'>
            <h3>{blog.title}</h3>
            <div className="interview-info">
                <hr />
                <h5><i>{format(new Date(blog.createdAt), 'MMM dd, yyyy')}</i> by <i>{blog.author.username}</i></h5>
                <p>
                    {
                        blog.description ?
                            blog.description.substring(0, 160) + '....' :
                            ''
                    }
                </p>
            </div>
            <div className="interview-status">
                
                <Link className="interview-btn" to={`/blogs/${blog._id}`}>Read</Link>
            </div>

        </div>
    )
}
