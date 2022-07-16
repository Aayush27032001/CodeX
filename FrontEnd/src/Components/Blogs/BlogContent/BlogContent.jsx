import { useState, useContext, useEffect, useRef } from 'react'
import { userContext } from '../../../context/userContex'
import { FiEdit } from "react-icons/fi";
import { IoSendSharp } from "react-icons/io5"
import './BlogContent.css'
import { format } from 'date-fns'
import { useHistory } from 'react-router-dom'


export default function InfoBlog({ blog }) {

    const [comment, setComment] = useState('')
    const { user, setUser } = useContext(userContext)
    const [currentBlog, setCurrentBlog] = useState(blog)
    const commentInputRef = useRef(null);
    const history = useHistory()
    const postComment = async (e) => {
        e.preventDefault()
        
        if(user===null){
            history.push("/student/login");
            return;
        }

        if(commentInputRef.current.value===""){
            commentInputRef.current.focus();
            return;
        }

        if (user !== undefined || comment !== '') {
            // const tempArr = [...currentBlog.comments]
            // tempArr.unshift({author:user,comment})
            // setCurrentBlog(tempArr)
            // setComment('')
            currentBlog.comments.unshift({ author: user, comment })
            // setComment('')
        }
        try {
          
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}blogs/${blog._id}/comments/createComment`, {
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
               
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}blogs/${blog._id}`);
                const foundBlog = await response.json()
                setCurrentBlog(foundBlog.blogs)
             
                setComment('')
            }
            // console.log(data)
        } catch (err) {
            console.log(err)
        }

    }



    // useEffect(() => {

    // },[currentBlog])
    return (

        <div className='blog-info-container'>
            <div className='blog-title-edit-container'>
                <h1 className="blog-title">{currentBlog.title}</h1>
                {
                    user ?
                        user._id === currentBlog.author._id ?
                            <span
                                className='edit-icon'
                                onClick={() => {
                                    history.push({
                                        pathname: `/blogs/edit`,
                                        state: {
                                            blog
                                        }
                                    })
                                }}
                            >
                                <FiEdit />
                            </span>
                            : null
                        : null
                }

            </div>
            <p>Posted on <b>{format(new Date(currentBlog.createdAt), 'MMM dd, yyyy')}</b>, By <b>{currentBlog.author.username}</b></p>

            <div className='info-blog-body'>

                <div dangerouslySetInnerHTML={{ __html: currentBlog.content }}></div>

            </div>

            <hr />
            <h2>Leave a Comment</h2>

            <form className="comment-form" onSubmit={(e) => postComment(e)}>
                <div className='input-container'>
                    <input
                        className="comment-input"
                        type="text"
                        placeholder="Add Public Comment"
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                        ref={commentInputRef}
                    />
                    <button
                        className="comment-submit" type="submit">
                        <IoSendSharp />
                    </button>
                </div>
            </form>

            <h2>Comments:</h2>
            <div className="comment-area">

                {console.log('curent comm', currentBlog.comments.length)}
                {

                    currentBlog.comments.length > 0 ?
                        currentBlog.comments.map(comment => {
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
