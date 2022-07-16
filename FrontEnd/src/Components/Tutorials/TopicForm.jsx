import { useState, useContext, useEffect } from 'react'
import ReactQuill from 'react-quill'
import Session from 'react-session-api'
import 'react-quill/dist/quill.snow.css';
// import '../CSS/BlogForm.css'
import { userContext } from '../../context/userContex';
import { modules, formats } from '../moduleFormat'
import { useHistory, useLocation } from 'react-router-dom'
import { useQueryClient } from 'react-query';

export default function TopicForm() {

    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [topics, setTopics] = useState([])
    const { user, setUser } = useContext(userContext)
    const history = useHistory()
    const location = useLocation()
    const handleChange = (html) => {
        setContent(html)
        // console.log(content)
    }

    const queryClient = useQueryClient();
    const saveTopic = (empty) => {

        const newTopic = {
            title,
            content
        }
        let tempArr = [...topics];
        tempArr.push(newTopic);
        setTopics(tempArr);
        if (empty) {
            setTitle('');
            setContent('');
        }

    }

    useEffect(() => {
        // console.log(topics)
    }, [topics])
    const postTopic = async (e, addMoreTopic) => {

        e.preventDefault()
        const newTopic = JSON.stringify({
            title,
            content
        })
        // console.log('tut_id', location.state.tut_id)
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}tutorials/${location.state.tut_id}/topics/postTopic`, {

            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: newTopic
        });

        const data = await response.json();
        // console.log('posted topic')
        if (data.error) {
            console.log(data.error);
        } else {
            // console.log(data)
            if (!addMoreTopic) {
                queryClient.invalidateQueries("tutorials")
                history.push(`/tutorials/${location.state.tut_id}`)
            }
            else {
                setTitle('')
                setContent('')
            }
        }

    }
    return (
        <div>
            <form className='blog-form' onSubmit={(e) => postTopic(e, false)}>
                {/* {location.state ? console.log('loc', location.state) : null} */}
                <input type="text"
                    className='blog-title-input'
                    placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />

                <ReactQuill
                    value={content}
                    formats={formats}
                    modules={modules}
                    onChange={(e) => handleChange(e)}
                />
                <button type='button' className='btn-blog-post' onClick={(e) => postTopic(e, true)}>Save and Add Topic</button>
                {/* <button type='button' onClick={()=>saveTopic(false)}>Save</button> */}
                <input type="submit" className='btn-blog-post' value='Save' />
            </form>
        </div>
    )
}
