import React, { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './TutorialsPage.css'
import TutorialsCard from '../TutorialCard/TutorialsCard'
import tutorialimg from "../../../assets/1\ \(2\).png"
import { userContext } from '../../../context/userContex'
import loadingPNG from '../../../assets/loading.png'

function TutorialsPage({ tutorials, loading }) {
    // console.log(tutorials);
    const { user } = useContext(userContext);
    return (
        <>

            {loading ? <div class="loader">
                    <img className='loading-img' src={loadingPNG} width="4%" alt="Loading" />
                    <h3>Loading...</h3>
                </div>
                :
                <div className="tutorials-container">
                    <div className="tutorial-flex">
                        <div className="create-tutorial">
                            <h1 className='tutorial-flex-text'>When One teaches many other<br /> Learns</h1>
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
                                // console.log(tutorial._id)
                                if(tutorial.topics!=0){
                                    return <TutorialsCard key={tutorial._id}
                                        img={tutorial.thumbnail}
                                        id={tutorial._id}
                                        alt={tutorial.title}
                                    />
                                }
                            })
                        }
                    </div>
                </div>
            }


        </>
    )
}

export default TutorialsPage
