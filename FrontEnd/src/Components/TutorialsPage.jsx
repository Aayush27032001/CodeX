import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../CSS/TutorialsPage.css'
import TutorialsCard from './TutorialsCard'


function TutorialsPage({tutorials}) {

    return (
        <div className="tutorials-container">
            <div className="create-tutorial">
                <Link className="create-tutorial-link" to="/tutorials-form">Add Tutorials</Link>
            </div>
            <div className="tutorials-section">
                {
                    tutorials.map((tutorial)=>{
                        console.log(tutorial.thumbnail)
                        return <TutorialsCard 
                                    img={tutorial.thumbnail} 
                                    id={tutorial._id} 
                                    alt = {tutorial.title}
                                />
                    })
                }
            </div>
        </div>
    )
}

export default TutorialsPage
