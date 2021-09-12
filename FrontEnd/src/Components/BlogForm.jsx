import React, { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import '../CSS/BlogForm.css'



const modules = {
    toolbar: [
        // [{header:'1'},{header:'2'},{header:'3'}],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['code-block']
    ],
}
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', "code-block"
]
function BlogForm() {


    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [thumbnail, setThumbnail] = useState('')
    const [content, setContent] = useState('');
    const handleChange = (html) => {
        setContent(html)
        console.log(content)
    }

    const uploadImage = async (e) => {

        e.preventDefault()
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'codex_blog_thumbnail')

        const res = await fetch('https://api.cloudinary.com/v1_1/codex-cloud/image/upload', {
            method: "post",
            body: data
        })

        const img = await res.json()
        setThumbnail(img.secure_url)
        console.log(img.secure_url)

    }

    useEffect(async() => {
        const newBlog = JSON.stringify({

            title,
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
        }
    }, [thumbnail])

    
    return (
        <div>
            <form className='blog-form' onSubmit={e => uploadImage(e)}>
                <input type="text"
                    placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)} />

                <input type="file"
                    accept="image/*"
                    className="image-upload"
                    onChange={(e) => setImage(e.target.files[0])} />

                <ReactQuill
                    value={content}
                    formats={formats}
                    modules={modules}
                    onChange={(e) => handleChange(e)}
                />
                <input type="submit" value='Post' />
            </form>

            <img src={thumbnail} alt="" />
            <p>{content}</p>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    )
}

export default BlogForm;