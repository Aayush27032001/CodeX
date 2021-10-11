import { useState,useContext,useEffect } from 'react'
import ReactQuill from 'react-quill'
import Session from 'react-session-api'
import 'react-quill/dist/quill.snow.css';
import '../CSS/BlogForm.css'
import { userContext } from '../context/userContex';
import {modules,formats} from './moduleFormat'
import { useHistory} from 'react-router-dom'

export default function TopicForm() {

    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [topics,setTopics] = useState([])
    const {user,setUser} = useContext(userContext)
    const history = useHistory()
    const handleChange = (html) => {
        setContent(html)
        console.log(content)
    }


    const saveTopic = (empty)=>{

        const newTopic = {
            title,
            content
        }
        let tempArr = [...topics];
        tempArr.push(newTopic);
        setTopics(tempArr);
        if(empty){
            setTitle('');
            setContent('');
        }    
        
    }

    useEffect(()=>{
        console.log(topics)
    },[topics])
    const postTutorial = async(e)=>{

        e.preventDefault()
        console.log(e.submitter)
        const newTutorial = JSON.stringify({
            category:Session.get('category'),
            title:Session.get('tutorialTitle'),
            author:user._id,
            topics:[...topics]
        })
        const response = await fetch('http://localhost:5000/tutorials/postTutorial',{

            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: newTutorial
        });

        const data = await response.json();

        if(data.error){
            console.log(data.error);
        }else{
            console.log(data)
            history.push('/tutorials')
        }

    }
    return (
        <div>
            <form className='blog-form' onSubmit={(e)=>postTutorial(e)}>
                <input type="text"
                    placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title}
                    />

                <ReactQuill
                    value={content}
                    formats={formats}
                    modules={modules}
                    value={content}
                    onChange={(e) => handleChange(e)}
                />
                <button type='button' onClick={()=>saveTopic(true)}>Save and Add Topic</button>
                <button type='button' onClick={()=>saveTopic(false)}>Save</button>
                <input type="submit" value='Publish' />
            </form>
        </div>
    )
}
