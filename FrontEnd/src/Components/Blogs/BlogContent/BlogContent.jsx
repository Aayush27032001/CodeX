import { useState, useContext, useEffect } from 'react'
import { userContext } from '../../../context/userContex'
// import { FaUserCircle } from "react-icons/fa";
import './BlogContent.css'
import { format } from 'date-fns'
import { useHistory } from 'react-router-dom'


export default function InfoBlog({ blog }) {

    const [comment, setComment] = useState('')
    const { user, setUser } = useContext(userContext)
    const [currentBlog, setCurrentBlog] = useState(blog)
    const history = useHistory()
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
                const response = await fetch(`http://localhost:5000/blogs/${blog._id}`);
                const foundBlog = await response.json()
                setCurrentBlog(foundBlog.blogs)
                console.log(foundBlog.blogs)
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
            {console.log(currentBlog)}
            <div className='blog-title-edit-container'>
                <h1 className="blog-title">{currentBlog.title}</h1>
                {
                    user ?
                        user._id === currentBlog.author._id ?
                            <span
                                className='blog-edit'
                                onClick={() => {
                                    history.push({
                                        pathname: `/blogs/edit`,
                                        state: {
                                            blog
                                        }
                                    })
                                }}
                            >
                                Edit
                            </span>
                            : null
                        : null
                }

            </div>
            <p>Posted on <b>{format(new Date(currentBlog.createdAt), 'MMM dd, yyyy')}</b>, By <b>{currentBlog.author.username}</b></p>

            <div className='info-blog-body'>

                <div dangerouslySetInnerHTML={{ __html: currentBlog.content }}></div>

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
                    className="comment-submit" type="submit"><svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg>
                </button>
            </form>

            <h2>Comments:</h2>
            <div className="comment-area">

                {console.log('curent comm', currentBlog.comments.length)}
                {

                    currentBlog.comments.length > 0 ?
                        currentBlog.comments.map(comment => {
                            console.log('author', comment.author)
                            return (
                                <div key={comment._id}>
                                    <p className='comment-author'> {comment.author.username}</p>
                                    <p>{comment.content}</p>
                                </div>
                            )
                        }) : null
                }
            </div>

        </div>

    )
}
