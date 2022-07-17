import { useEffect, useState, createContext } from 'react';
import { userContext } from './context/userContex';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Course from './Components/Courses/Course/Course';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
// import Footer from './Components/Footer';
import BlogPage from './Components/Blogs/BlogPage/BlogPage'
import InfoBlog from './Components/Blogs/BlogContent/BlogContent';
import BlogForm from './Components/Blogs/BlogForm/BlogForm'
import InterviewPage from './Components/InterviewPage';
import TestPage from './Components/Test/TestPage/TestPage';
import TutorialsPage from './Components/Tutorials/TutorialPages/TutorialsPage';
import TutorialForm from './Components/Tutorials/TutorialsForm/TutorialForm';
import TopicEdit from './Components/Tutorials/TopicEdit/TopicEdit';
import TopicForm from './Components/Tutorials/TopicForm';
import TutorialContent from './Components/Tutorials/TutorialsContent/TutorialContent';
import CreateTest from './Components/Test/CreateTest/CreateTest';
import EditBlog from './Components/Blogs/EditBlog/EditBlog';
import UserBlogPage from './Components/Blogs/UserBlogPage/UserBlogPage';
import UserSavedBlogs from './Components/UserSavedBlogs';
import ScrollToTop from './Components/UtilComponents/ScrollToTop';
import { useQuery } from 'react-query'

function App() {

    const [user, setUser] = useState(null)
    const [blogs, setBlogs] = useState([])
    const [Loading, setLoading] = useState(false)
    const [tutLoading, setTutLoading] = useState(false)
    const [tutorials, setTutorials] = useState([])


    const getBlogs = async () => {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}blogs/allblogs`)
        const data = await response.json()
        setBlogs(data.blogs)
        setLoading(false)
    }

    useEffect(() => {
        getBlogs();
    }, [])

    const { data:tutData, isLoading } = useQuery("tutorials",()=>{
        return fetch(`${process.env.REACT_APP_BACKEND_URL}tutorials/alltutorials`).then(res=>res.json())
    })

    const verifyUser = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}verifyuser`, {
                method: "POST",
                credentials: 'include',
            });
            const data = await res.json();
            if (!data.error) {
                setUser(data.user);
                localStorage.setItem("user",JSON.stringify(data.user))
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        verifyUser()
    }, [])

    return (
        <Router>
            <ScrollToTop>
            <div className='mobileView'>
                <h1>Not Available For mobile Devices</h1>
            </div>
            <div className="App">
                <userContext.Provider value={{ user, setUser }}>
                    <Navbar />
                    <Switch>
                        <Route path='/' exact ><Home blogs={blogs} loading={tutLoading} /></Route>
                        <Route exact path='/courses' component={Course} />
                        <Route exact path='/student/login' ><Login role='Student' /></Route>
                        <Route exact path='/teacher/login' ><Login role='Teacher' /></Route>
                        <Route exact path='/student/signup' ><Signup role='Student' /></Route>
                        <Route exact path='/teacher/signup' ><Signup role='Teacher' /></Route>
                        <Route exact path='/blog'><BlogPage blogs={blogs} loading={Loading} /></Route>
                        <Route exact path='/blogs/edit'><EditBlog /></Route>
                        <Route exact path='/createBlog' component={BlogForm} />
                        {
                            blogs.map((blog,i) => {
                                return (
                                    <Route key={i} exact path={`/blogs/${blog._id}`}>
                                        <InfoBlog
                                            blog={blog}
                                        />
                                    </Route>
                                )
                            })
                        }

                        <Route exact path='/interview-experiences'><InterviewPage blogs={blogs} loading={Loading} /></Route>
                        <Route exact path='/Test' component={TestPage} />

                        <Route exact path='/tutorials' ><TutorialsPage tutorials={tutData?.tutorials} loading={isLoading} /></Route>
                        <Route exact path='/tutorials-form' component={TutorialForm} />
                        <Route exact path='/tutorials/add-topic' component={TopicForm} />
                        <Route exact path='/tutorials/edit-topic' component={TopicEdit} />
                        <Route exact path='/createTest' component={CreateTest} />
                        <Route exact path='/user/myblogs' component={UserBlogPage} />
                        <Route exact path='/user/savedblogs' component={UserSavedBlogs} />
                        {
                            tutData?.tutorials.map((tutorial,i) => {
                                return (
                                    <Route key={i} exact path={`/tutorials/${tutorial._id}`} ><TutorialContent tutorial={tutorial} /></Route>
                                )
                            })
                        }
                    </Switch>
                </userContext.Provider>
            </div>
            </ScrollToTop>
        </Router>
    );
}

export default App;