import React from 'react'
import { Link } from 'react-router-dom'

function TutorialsCard(props) {
    return (
        <Link to={props.url}>
            <div className="tutorial-card-container">
                <p className="tutorial-title" alt={props.alt} >{props.alt}</p>
            </div>
        </Link>
    )
}

export default TutorialsCard
