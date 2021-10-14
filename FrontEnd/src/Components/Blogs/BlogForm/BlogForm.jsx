import React, { useState, useEffect, useContext } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import './BlogForm.css'
import { userContext } from '../../../context/userContex';
import { modules, formats } from '../../moduleFormat'
import { useHistory } from 'react-router-dom'
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


    const postBlogData = (e) => {
        const newBlog = {

            title,
            description,
            author: user._id,
            thumbnail,
            content
        }
        postBlog(e, 'http://localhost:5000/blogs/createBlogs', newBlog,'post');
        setTitle('')
        setDescription('')
        setThumbnail('')
        setContent('')
        history.push('/blog')
    }

    return (
        <div>
            <form className='blog-form' onSubmit={e => postBlogData(e)}>
                {console.log('thumbnail in blogform', thumbnail)}
                <input type="text"
                    placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input type="text"
                    placeholder='Description'
                    onChange={(e) => setDescription(e.target.value)}
                />

                <div className='file-progress-container'>
                    <div>
                        <progress value={progress} max="100" />
                        {image ? image.name : ''}
                    </div>
                    <div className='pick-upload-container'>
                        <label htmlFor="file-upload" className='choose-image'>
                            Choose Image
                            <input type="file"
                                accept="image/*"
                                className="image-upload"
                                id='file-upload'
                                onChange={(e) => setImage(handleImage(e.target.files[0]))} />
                        </label>
                        <button
                            className='upload-button'
                            type='button'
                            onClick={e => {
                                handleImageUpload(e, image, setProgressValue, setThumbnailValue)
                            }}>
                            Upload
                        </button>
                    </div>

                </div>

                <ReactQuill
                    value={content}
                    formats={formats}
                    modules={modules}
                    onChange={(html) => setContent(html)}
                />
                <input type="submit" value='Post' />
            </form>
        </div>
    )
}

export default BlogForm;