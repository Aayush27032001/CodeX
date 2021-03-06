
import { storage } from '../../../firebase'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useHistory, Link, Redirect } from 'react-router-dom'

toast.configure()

export const handleImageUpload = (e,image,setProgressValue,setThumbnailValue) => {
    e.preventDefault()
    console.log(image.name)
    const uploadTask = storage.ref(`codex-image/${image.name}`).put(image);
    uploadTask.on(
        "state_changed",
        snapshot => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgressValue(progress);
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
                    setThumbnailValue(url);
                });
        }
    );
};


export const handleImage = (file) => {

    // console.log(typeof file.name)
    const ext = file.name.split(".").pop().toLowerCase()
    // console.log(ext === 'png' || ext === 'jpg' || ext === 'jpeg')
    if (ext === 'png' || ext === 'jpg' || ext === 'jpeg') {
        return (file)
    } else {
        console.log('only png/jpg/jpeg is allowed')
        return ('')
    }
}
// useEffect(async () => {

export const postBlog = async (e, url,blog,method) => {

    e.preventDefault()
    // console.log(typeof method)
    if (blog.thumbnail != '') {
        const newBlog = JSON.stringify(blog)
        const resp = await fetch(url, {

            method: `${method}`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: newBlog,
            credentials: 'include'
        })
        const res_data = await resp.json()
        if (res_data.error) {
            console.log(res_data.error)
            toast.error(res_data.errore,{
                position:toast.POSITION.TOP_CENTER,
                autoClose:2000
            })
        } else {
            toast.success(res_data.message,{
                position:toast.POSITION.TOP_CENTER,
                autoClose:2000
            })
            // useHistory().push('/blog')
            // setThumbnail('')
        }
    } else {
        console.log('image is not uploaded yet')
    }
}

    // }, [thumbnail])





