import { useEffect, useState, createContext } from 'react';
import { userContext } from './context/userContex';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Course from './Components/Courses/Course/Course';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Footer from './Components/Footer';
import BlogPage from './Components/Blogs/BlogPage/BlogPage'
import InfoBlog from './Components/Blogs/BlogContent/BlogContent';
import BlogForm from './Components/Blogs/BlogForm/BlogForm'
import InterviewPage from './Components/InterviewPage';
import TestPage from './Components/Test/TestPage/TestPage';
import TutorialsPage from './Components/Tutorials/TutorialPages/TutorialsPage';
import TutorialForm from './Components/Tutorials/TutorialsForm/TutorialForm';
import TopicForm from './Components/TopicForm';
import TutorialContent from './Components/Tutorials/TutorialsContent/TutorialContent';
import CreateTest from './Components/Test/CreateTest/CreateTest';
import EditBlog from './Components/Blogs/EditBlog/EditBlog';
import UserBlogPage from './Components/UserBlogPage';
import UserSavedBlogs from './Components/UserSavedBlogs';

function App() {


    const [user, setUser] = useState(null)
    const [blogs, setBlogs] = useState([])
    const [tutorials, setTutorials] = useState([])

    useEffect(() => {
        getBlogs();
    }, [])

    const getBlogs = async () => {

        const response = await fetch('http://localhost:5000/blogs/allblogs')
        const data = await response.json()
        setBlogs(data.blogs)
    }

    useEffect(async () => {

        const response = await fetch('http://localhost:5000/tutorials/alltutorials')
        const data = await response.json()
        if (data.error) {
            console.log(data.error)
        } else {
            console.log('tut', data.tutorials)
            setTutorials(data.tutorials)
        }
    }, [])

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const res = await fetch('http://localhost:5000/verifyuser', {
                    method: "POST",
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                });
                const data = await res.json();
                if (!data.error) {
                    setUser(data.user);
                }

            } catch (error) {
                console.log(error)
            }
        }
        verifyUser()
    }, [])

    return (
        <div className="App">
            <Router>
                <userContext.Provider value={{ user, setUser }}>
                    <Navbar />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/courses' component={Course} />
                        <Route path='/student/login' ><Login role='Student' /></Route>
                        <Route path='/teacher/login' ><Login role='Teacher' /></Route>
                        <Route path='/student/signup' ><Signup role='Student' /></Route>
                        <Route path='/teacher/signup' ><Signup role='Teacher' /></Route>
                        <Route path='/blog'><BlogPage blogs={blogs} /></Route>
                        <Route path='/blogs/edit'><EditBlog /></Route>
                        <Route path='/createBlog' component={BlogForm} />
                        {
                            blogs.map((blog) => {
                                return (
                                    <Route path={`/blogs/${blog._id}`}>
                                        <InfoBlog
                                            blog={blog}
                                        // getBlogs={getBlogs}
                                        />
                                    </Route>
                                )
                            })
                        }

                        <Route path='/interview-experiences' component={InterviewPage} />
                        <Route path='/Test' component={TestPage} />

                        <Route exact path='/tutorials' ><TutorialsPage tutorials={tutorials} /></Route>
                        <Route exact path='/tutorials-form' component={TutorialForm} />
                        <Route path='/tutorials/add-topic' component={TopicForm} />
                        <Route path='/createTest' component={CreateTest} />
                        <Route path='/user/myblogs' component={UserBlogPage} />
                        <Route path='/user/savedblogs' component={UserSavedBlogs} />
                        {
                            tutorials.map(tutorial => {
                                return (
                                    <Route path={`/tutorials/${tutorial._id}`} ><TutorialContent tutorial={tutorial} /></Route>
                                )
                            })
                        }
                    </Switch>
                </userContext.Provider>
                
            </Router>
            {/* <Footer/> */}
        </div>
    );
}

export default App;







// const [blogs, setBlogs] = useState([])
//     const findBlogs = async () => {

//         if (blogs.length === 0) {
//             const response = await fetch(`http://localhost:5000/blogs/find-user-blog/${user._id}`)
//             const data = await response.json()
//             setBlogs(data.blogs)
//         }

//     }