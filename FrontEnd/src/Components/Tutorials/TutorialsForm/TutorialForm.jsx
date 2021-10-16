import { useState, useContext } from 'react'
import Session from 'react-session-api'
import './TutorialForm.css'
import { userContext } from '../../../context/userContex';
import { useHistory } from 'react-router-dom'
import { storage } from '../../../firebase'
function TutorialForm() {

    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('');
    const [progress, setProgress] = useState(0)
    const [thumbnail, setThumbnail] = useState('')
    const {user,setUser} = useContext(userContext)

    const history = useHistory()

    const handleImage = (file) => {

        console.log(typeof file.name)

        const ext = file.name.split(".").pop().toLowerCase()
        console.log(ext === 'png')
        if (ext === 'png') {
            setImage(file)
        } else {
            console.log('only png is allowed')
            setImage('')
        }
    }
    // const submit = async (e) => {
    //     e.preventDefault()

    //     const data = new FormData()
    //     data.append('file', image)
    //     data.append('upload_preset', 'codex_blog_thumbnail')

    //     const uploadTask = storage.ref(`codex-image/${image.name}`).put(image);
    //     uploadTask.on(
    //         "state_changed",snapshot => {
    //             const progress = Math.round(
    //                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //             );
    //             setProgress(progress);
    //         },
    //         error => {
    //             console.log(error);
    //         },
    //         () => {
    //             storage
    //                 .ref("codex-image")
    //                 .child(image.name)
    //                 .getDownloadURL()
    //                 .then(url => {
    //                     console.log(url)

    //                     Session.set('thumbnail', url)
    //                     Session.set('category', category);
    //                     Session.set('tutorialTitle', title);

    //                     console.log(Session.get('category'))
    //                     history.push('/tutorials/add-topic')
    //                 });
    //         }
    //     );

    // }


    const postTutorial = async(e)=>{

        e.preventDefault()
        const newTutorial = JSON.stringify({
            category,
            title,
            thumbnail,
            author:user._id,
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
            history.push({
                pathname:'/tutorials/add-topic',
                state:{
                    tut_id:data.tutorial._id
                }
            })
        }

    }

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
    return (
        <div className="tutorial-form-conatiner">
            {console.log('image', image)}
            <form className="tutorial-form" onSubmit={(e) =>postTutorial(e)}>

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
                    onChange={(e) => setTitle(e.target.value)}
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
                                accept=".png"
                                className="image-upload"
                                id='file-upload'
                                onChange={(e) => handleImage(e.target.files[0])}
                            />
                        </label>
                        <button className='upload-button' type='button' onClick={e => handleUpload(e)}>
                            Upload
                        </button>
                    </div>

                </div>

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
