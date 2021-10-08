import React from 'react'
import {Link} from 'react-router-dom'
import '../CSS/TutorialsPage.css'
import TutorialsCard from './TutorialsCard'


function TutorialsPage() {
    return (
        <div className="tutorials-container">
            <div className="create-tutorial">
                <Link className="create-tutorial-link" to="/createBlog">Add Tutorials</Link>
            </div>
            <div className="tutorials-section">
                <TutorialsCard img="https://www.tutorialspoint.com/images/ant_icon.png" alt="Apache-ant"/>
                <TutorialsCard img="https://www.tutorialspoint.com/images/java.png" alt="Java" />
                <TutorialsCard img="https://www.tutorialspoint.com/images/python.png" alt="Apache-ant" />
                <TutorialsCard img="https://www.tutorialspoint.com/images/spring.png" alt="Spring"/>
                <TutorialsCard img="https://www.tutorialspoint.com/images/hibernate.png" alt="Hibernet"/>
                <TutorialsCard img="https://www.tutorialspoint.com/images/ant_icon.png" alt="Apache-ant"/>
                <TutorialsCard img="https://www.tutorialspoint.com/images/ant_icon.png" alt="Apache-ant"/>
                <TutorialsCard img="https://www.tutorialspoint.com/images/ant_icon.png" alt="Apache-ant"/>
                <TutorialsCard img="https://www.tutorialspoint.com/images/ant_icon.png" alt="Apache-ant"/>
            </div>
        </div>
    )
}

export default TutorialsPage
