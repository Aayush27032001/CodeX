import React, { useState, useEffect, useContext } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import './BlogForm.css'
import { userContext } from '../../../context/userContex';
import { modules, formats } from '../../moduleFormat'
import { useHistory, Link, Redirect } from 'react-router-dom'
import { handleImage, handleImageUpload, postBlog } from '../commonFunction/commonFn'



function BlogForm() {

    const { user, setUser } = useContext(userContext)
    const [image, setImage] = useState('');
    const [progress, setProgress] = useState(0)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('')
    const [content, setContent] = useState('');
    const history = useHistory()

    const handleChange = (html) => {
        setContent(html)
        console.log(content)
    }

    const setProgressValue = (prog) => {
        setProgress(prog)
    }
    const setThumbnailValue = (prog) => {
        setThumbnail(prog)
    }


    const postBlogData = async (e) => {

        e.preventDefault()
        const newBlog = {

            title,
            description,
            author: user._id,
            thumbnail,
            content
        }
        await postBlog(e, 'http://localhost:5000/blogs/createBlogs', newBlog, 'post');
        // setTitle('')
        // setDescription('')
        // setThumbnail('')
        // setContent('')
        // history.push('/blog')
    }

    return (
        <div>
            {
                user ?

                    <Link className="create-tutorial-link" to="/tutorials-form">Add Tutorials</Link>
                    : <Redirect to='/student/login' />
            }
            <form className='blog-form' onSubmit={e => postBlogData(e)}>
                {console.log('thumbnail', thumbnail)}
                <input className='blog-title-input' type="text"
                    placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input className='blog-description-input' type="text"
                    placeholder='Description'
                    onChange={(e) => setDescription(e.target.value)}
                />

                <div className='file-progress-container'>
                    <div className='pick-upload-container'>
                        <label htmlFor="file-upload" className='choose-image'>
                            Choose Image
                            <input type="file"
                                accept="image/*"
                                className="image-upload"
                                id='file-upload'
                                onChange={(e) => setImage(handleImage(e.target.files[0]))} />
                        </label>
                        <button className='upload-button' type='button' onClick={e => {
                            handleImageUpload(e, image, setProgressValue, setThumbnailValue)
                        }}>
                            Upload
                        </button>
                        <div className='progress-container'>
                            <div className='progress-div'><progress value={progress} max="100" /></div>
                            <div className="uploaded-blog-image">
                                {thumbnail ?
                                    < img className='uploaded-image' width="100%" src={thumbnail} alt="" />
                                    : <img className="uploaded-image" src="https://via.placeholder.com/400x300" alt="" />
                                }
                            </div>
                            <div style={{ marginLeft: 10 }}>
                                {image ?
                                    image.name
                                    : ''
                                }
                            </div>
                        </div>
                    </div>

                    <ReactQuill
                        value={content}
                        formats={formats}
                        modules={modules}
                        onChange={(html) => setContent(html)}
                    />
                    <input className='btn-blog-post' type="submit" value='Post' />
                </div>
            </form>
        </div>
    )
}

export default BlogForm;

{/* onClick = { e => {
    handleImageUpload(e, image, setProgressValue, setThumbnailValue)
}}

//image */}
