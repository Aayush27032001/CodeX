import { useState, useContext, useEffect } from 'react'
import ReactQuill from 'react-quill'
import Session from 'react-session-api'
import 'react-quill/dist/quill.snow.css';
// import '../CSS/BlogForm.css'
import { userContext } from '../../../context/userContex';
import { modules, formats } from '../../moduleFormat'
import { useHistory, useLocation } from 'react-router-dom'
import { useQueryClient } from 'react-query';

export default function TopicForm() {

    const location = useLocation()
    const { activeTopic, tut_id } = location.state;
    const [content, setContent] = useState(activeTopic.content);
    const [title, setTitle] = useState(activeTopic.title);
    const [topics, setTopics] = useState([])
    const { user, setUser } = useContext(userContext)
    const history = useHistory()
    const queryClient = useQueryClient();
    const handleChange = (html) => {
        setContent(html)
        // console.log(content)
    }

    // useEffect(() => {
    //     // console.log(topics)
    // }, [topics])
    const postTopic = async (e) => {

        e.preventDefault()
        const newTopic = JSON.stringify({
            title,
            content
        })
        // console.log('tut_id',location.state.tut_id)
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}tutorials/${tut_id}/topics/editTopic/${activeTopic._id}`, {

            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: newTopic,
            credentials: 'include'
        });

        const data = await response.json();
        // console.log('posted topic')
        if (data.error) {
            console.log(data.error);
        } else {
            queryClient.invalidateQueries("tutorials");
            history.push(`/tutorials/${tut_id}`);
            // console.log(data)
            // if(!addMoreTopic)history.push(`/tutorials/${location.state.tut_id}`)
            // else{
            //     setTitle('')
            //     setContent('')
            // }
        }

    }
    return (
        <div>
            <form className='blog-form' onSubmit={(e) => postTopic(e)}>
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
                <input type="submit" className='btn-blog-post' value='Update' />
            </form>
        </div>
    )
}
