import {useState,useContext} from 'react'
import Session from 'react-session-api'
import '../CSS/TutorialForm.css'
import { userContext } from '../context/userContex';
import { useHistory} from 'react-router-dom'
function TutorialForm() {

    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('');
    // const {user,setUser} = useContext(userContext)
    const history = useHistory()

    const submit = async (e)=>{
        e.preventDefault()

        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'codex_blog_thumbnail')

        const res = await fetch('https://api.cloudinary.com/v1_1/codex-cloud/image/upload', {
            method: "post",
            body: data
        })

        const img = await res.json()
        // setThumbnail(img.secure_url)
        console.log(img.secure_url)
        Session.set('thumbnail',img.secure_url)
        Session.set('category',category);
        Session.set('tutorialTitle',title);
        
        console.log(Session.get('category'))
        // window.location.href = '/tutorials/add-topic'
        history.push('/tutorials/add-topic') 
    }
    return (
        <div className="tutorial-form-conatiner">
            <form className="tutorial-form" onSubmit={(e)=>submit(e)}>

                <select className="input-field" onChange={e => setCategory(e.target.value)}>
                    <option value="Category" selected>Category </option>
                    <option value="Databases">Databases</option>
                    <option value="DSA">DSA</option>
                    <option value="Computer Security">Computer Security</option>
                    <option value="Python">Python</option>
                </select>

                <input
                    className="input-field"
                    type="text"
                    placeholder="Title"
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <input type="file"
                    accept="image/*"
                    className="image-upload"
                    onChange={(e) => setImage(e.target.files[0])} />
                <input
                    className="form-btn"
                    type="submit"
                    value="Next"
                />
            </form>
        </div>
    )
}

export default TutorialForm
