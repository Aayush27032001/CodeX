import React, { useState, useEffect, useContext } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import '../CSS/BlogForm.css'
import { userContext } from '../context/userContex';
import { modules, formats } from './moduleFormat'
import { useHistory } from 'react-router-dom'
import { storage } from '../firebase'



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

    // const uploadImage = async (e) => {

    //     e.preventDefault()
    //     const data = new FormData()
    //     data.append('file', image)
    //     data.append('upload_preset', 'codex_blog_thumbnail')

    //     const res = await fetch('https://api.cloudinary.com/v1_1/codex-cloud/image/upload', {
    //         method: "post",
    //         body: data
    //     })

    //     const img = await res.json()
    //     setThumbnail(img.secure_url)


    // }

    const handleUpload = (e) => {
        e.preventDefault()
        console.log(image.name)
        const uploadTask = storage.ref(`codex-image/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("codex-image")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url)
                        setThumbnail(url);
                    });
            }
        );
    };


    const handleImage = (file) => {

        console.log(typeof file.name)
        const ext = file.name.split(".").pop().toLowerCase()
        console.log(ext === 'png' || ext === 'jpg' || ext === 'jpeg')
        if (ext === 'png' || ext === 'jpg' || ext === 'jpeg') {
            setImage(file)
        } else {
            console.log('only png/jpg/jpeg is allowed')
            setImage('')
        }
    }
    // useEffect(async () => {

    const postBlog = async (e) => {

        e.preventDefault()
        if (thumbnail != '') {
            const newBlog = JSON.stringify({

                title,
                description,
                author: user._id,
                thumbnail,
                content
            })

            const resp = await fetch('http://localhost:5000/blogs/createBlogs', {

                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: newBlog
            })
            const res_data = await resp.json()
            if (res_data.error) {
                console.log(res_data.error)
            } else {
                console.log(res_data.message)
                setThumbnail('')
                history.push('/blog')
            }
        } else {
            console.log('image is not uploaded yet')
        }
    }

    // }, [thumbnail])


    return (
        <div>
            <form className='blog-form' onSubmit={e => postBlog(e)}>
                {console.log('thumbnail', thumbnail)}
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
                                onChange={(e) => handleImage(e.target.files[0])} />
                        </label>
                        <button className='upload-button' type='button' onClick={e => handleUpload(e)}>
                            Upload
                        </button>
                    </div>

                </div>

                <ReactQuill
                    value={content}
                    formats={formats}
                    modules={modules}
                    onChange={(e) => handleChange(e)}
                />
                <input type="submit" value='Post' />
            </form>
        </div>
    )
}

export default BlogForm;