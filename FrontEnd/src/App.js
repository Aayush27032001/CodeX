import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Course from './Components/Course';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Footer from './Components/Footer';
import BlogPage from './Components/BlogPage'

function App() {
  return (
    <Router>
        <Navbar/> 
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/courses' component={Course}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup'component={Signup}/>
          <Route path='/blog'component={BlogPage}/>
        </Switch>
        {/* <Footer/> */}
    </Router>

  );
}

export default App;
