import './CSS/Navbar.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Course from './Components/Course';

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
        </Switch>
    </Router>

  );
}

export default App;
