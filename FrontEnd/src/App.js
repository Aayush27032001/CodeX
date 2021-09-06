import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Course from './Components/Course';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (

    <Router>
        <Navbar/>
          <Switch>
            <Route path='/about'>
              <Home/>
            </Route>
            <Route path='/courses'>
              <Course/>
            </Route>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/signup'>
              <Signup/>
            </Route>
          </Switch>
        <Footer/> 
    </Router>

  );
}

export default App;
