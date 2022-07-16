import { useState, useEffect, useContext } from 'react'
import { userContext } from '../../../context/userContex'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { FiEdit } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import { useHistory } from 'react-router-dom'
import './UserBlogPage.css'
function UserBlogPage() {

    const [blogs, setBlogs] = useState([])
    const { user, setUser } = useContext(userContext)
    const history = useHistory()
    useEffect(() => {

        findBlogs();
    }, [])

    
    const findBlogs = async () => {

        try {
            if (blogs.length === 0) {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}blogs/find-user-blog/${user._id}`)
                const data = await response.json()
                setBlogs(data.blogs)
            }
        } catch (e) {
            console.log(e)
        }

    }

    const handleDelete = async (blog,ind) => {

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}blogs/${blog._id}/delete`, {

            method:'DELETE',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(blog),
            credentials:'include'
        })

        const res = await response.json()
        if(res.error){
            console.log(res.error)
        }else{
            // console.log(res)
            // blogs.splice(ind,1)
            const filteredBlog = blogs.filter((blog,i)=>{
                return i !== ind
            })
            // console.log(filteredBlog)
            setBlogs(filteredBlog)
        }
    }

    return (
        <div>

            <div className="blog-container" style={{ marginTop: 100 }}>
                

                {
                    blogs.map((blog,ind) => {
                        return (
                            <div className="card-container" key={ind}>

                                <div className='card2 text-center shadow'>
                                    <div className='overflow'>
                                        <img src={blog.thumbnail} alt="Image 1" className="card-img-top blog-thumnail" />
                                    </div>
                                    <div className='card-body text-dark'>
                                        <div style={
                                            {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }
                                        }>
                                            <h4 className='card-title'>{blog.title}</h4>
                                            <div>
                                                <span
                                                    className='blog-edit-icon'
                                                    onClick={() => {
                                                        history.push({
                                                            pathname: `/blogs/edit`,
                                                            state: {
                                                                blog
                                                            }
                                                        })
                                                    }}
                                                >
                                                    <FiEdit />
                                                </span>

                                                <span
                                                    className='blog-delete-icon'
                                                    onClick={() => handleDelete(blog,ind)}
                                                >
                                                    <IoTrashOutline />
                                                </span>
                                            </div>
                                        </div>

                                        <p id="card-author">
                                            <b>
                                                {format(new Date(blog.createdAt), 'MMM dd, yyyy')}
                                            </b>
                                            by
                                            <b>
                                                {blog.author.username}
                                            </b>
                                        </p>
                                        <p id="card-text">
                                            {
                                                blog.description ?
                                                    blog.description.substring(0, 160) + '....' :
                                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, accusamus cumque adipisci molestiae distinctio repellendus sit expedita minus natus odit'
                                            }
                                        </p>
                                        <Link className='read-more' to={`/blogs/${blog}`}>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UserBlogPage
