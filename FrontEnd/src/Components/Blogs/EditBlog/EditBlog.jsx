import React, { useState, useEffect, useContext } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { userContext } from '../../../context/userContex';
import { modules, formats } from '../../moduleFormat'
import { useHistory, useLocation } from 'react-router-dom'
import { handleImage, handleImageUpload, postBlog } from '../commonFunction/commonFn'

export default function EditBlog() {

    const location = useLocation()
    console.log(location)
    const { blog } = location.state
    console.log('xyzthum', blog.thumbnail)
    const { user, setUser } = useContext(userContext)
    const [image, setImage] = useState(blog.thumbnail);
    const [progress, setProgress] = useState(0)
    const [title, setTitle] = useState(blog.title);
    const [description, setDescription] = useState(blog.description);
    const [thumbnail, setThumbnail] = useState(blog.thumbnail)
    const [content, setContent] = useState(blog.content);
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
        console.log(blog._id)
        await postBlog(e, `http://localhost:5000/blogs/${blog._id}/edit`, newBlog, 'put');
        // console.log(saved successf)
        // setTitle('')
        // setDescription('')
        // setThumbnail('')
        // setContent('')
        // history.push(`/blogs/${blog._id}`)
    }

    return (
        <div>
            <form className='blog-form' onSubmit={e => postBlogData(e)}>
                {console.log('thumbnail in blogform', thumbnail)}
                <input type="text"
                    placeholder='Title'
                    className='blog-title-input'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input type="text"
                    placeholder='Description'
                    className='blog-description-input'
                    value={description}
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
                        <button
                            className='upload-button'
                            type='button'
                            onClick={e => {
                                handleImageUpload(e, image, setProgressValue, setThumbnailValue)
                            }}>
                            Upload
                        </button>

                        <div className='progress-container'>
                            <progress className='progress-div' value={progress} max="100" />
                            {console.log('image name', thumbnail)}
                            <div className="uploaded-blog-image">
                            {thumbnail ?
                                < img className='uploaded-image' width="100%" src={thumbnail} alt="" />
                                : ''
                            }
                            </div>
                        </div>
                    </div>

                </div>

                <ReactQuill
                    value={content}
                    formats={formats}
                    modules={modules}
                    onChange={(html) => setContent(html)}
                />
                <input className='btn-blog-post' type="submit" value='Update' />
            </form>
        </div>
    )
}
