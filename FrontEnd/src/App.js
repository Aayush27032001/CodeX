import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Course from './Components/Course';
import Login from './Components/Login';


function App() {
  return (

    <Router>
        <Navbar/> 
        <Switch>
          <Route path='/about'>
            <p>Hello</p>
          </Route>
          <Route path='/courses'>
            <Course/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
    </Router>

  );
}

export default App;
