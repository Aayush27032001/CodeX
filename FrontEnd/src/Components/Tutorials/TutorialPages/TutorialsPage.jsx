import React, { useState, useEffect, useContext } from 'react'
import { Link,Redirect } from 'react-router-dom'
import './TutorialsPage.css'
import TutorialsCard from '../TutorialCard/TutorialsCard'
import tutorialimg from "../../../assets/1\ \(2\).png"
import { userContext } from '../../../context/userContex'
function TutorialsPage({ tutorials }) {

    const { user, setUser } = useContext(userContext)
    return (
        <div className="tutorials-container">
            <div className="tutorial-flex">
                <div className="create-tutorial">
                    <p className='tutorial-flex-text'>When One teaches many other<br /> Learns</p>
                    {
                        user ?
                            user.role == 'Teacher' ?
                                <Link className="create-tutorial-link" to="/tutorials-form">Add Tutorials</Link>
                                : null
                        : null
                    }

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