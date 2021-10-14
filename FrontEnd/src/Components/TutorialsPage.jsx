import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/TutorialsPage.css'
import TutorialsCard from './TutorialsCard'
import tutorialimg from "../assets/1\ \(2\).png"


function TutorialsPage({ tutorials }) {

    return (
        <div className="tutorials-container">
            <div className="tutorial-flex">
                <div className="create-tutorial">
                    <p className='tutorial-flex-text'>When One teaches many other<br/> Learns</p>
                    <Link className="create-tutorial-link" to="/tutorials-form">Add Tutorials</Link>
                </div>
                <div className="tutorial-flex-image">
                    <img src={tutorialimg} width="90%" alt="" />
                </div>
            </div>

            <div className="tutorials-section">
                {
                    tutorials.map((tutorial) => {
                        console.log(tutorial.thumbnail)
                        return <TutorialsCard
                            img={tutorial.thumbnail}
                            id={tutorial._id}
                            alt={tutorial.title}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default TutorialsPage
