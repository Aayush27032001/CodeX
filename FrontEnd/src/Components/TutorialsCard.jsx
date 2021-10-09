import React from 'react'
import { Link } from 'react-router-dom'

function TutorialsCard(props) {
    return (
        <Link to={props.url}>
        <div className="tutorial-card-container">
            <img className="tutorial-img" src={props.img} alt={props.alt} ></img>
        </div>
        </Link>
    )
}

export default TutorialsCard
