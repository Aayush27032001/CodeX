import { useState, useContext, useEffect } from 'react'
import { userContext } from '../context/userContex'
import '../CSS/InfoBlog.css'
import { format } from 'date-fns'

export default function InfoBlog({ blog }) {

    const [comment, setComment] = useState('')
    const { user, setUser } = useContext(userContext)
    const postComment = async (e) => {

        e.preventDefault()
        try {
            console.log(blog._id)
            const res = await fetch(`http://localhost:5000/blogs/${blog._id}/comments/createComment`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    author: user,
                    comment
                })
            })
            const data = await res.json()
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data.message)
            }
            // console.log(data)
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(async () => {

    })
    return (

        <div className='blog-info-container'>
            {console.log("Date format", format(new Date("Thu Oct 07 2021 23:47:16 GMT+0530 (India Standard Time)"), 'MMM'))}
            <h1 className="blog-title">{blog.title}</h1>
            <p>Posted on <b>{format(new Date("Thu Oct 07 2021 23:47:16 GMT+0530 (India Standard Time)"), 'MMM dd, yyyy')}</b>, By <b>{blog.author.username}</b></p>

            <div className='info-blog-body'>

                <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>

                <div className="blog-slider">
                    <button className='blog-slider slider-prev'>
                        <i class="fas fa-arrow-circle-left fa-2x"></i>
                    </button>
                    <button className='blog-slider slider-next'>
                        <i class="fas fa-arrow-circle-right fa-2x"></i>
                    </button>
                </div>

            </div>

            <hr />
            <h2>Leave a Comment</h2>

            <form className="comment-form" onSubmit={(e) => postComment(e)}>
                <input
                    className="comment-input"
                    type="text"
                    placeholder="Add Public Comment"
                    onChange={(e) => setComment(e.target.value)}
                />
                <button
                    className="comment-submit" type="submit">Submit</button>
            </form>

            <h2>Comments:</h2>
            <div className="comment-area">

                {console.log(blog.comments)}
                {
                    blog.comments.map(comment => {
                        console.log('author',comment.author)
                        return (
                            <div key={comment._id}>
                                <p className='comment-author'>{comment.author.username}</p>
                                <p>{comment.content}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>

    )
}
