import React, { useState, useContext } from 'react'
import "./TutorialContent.css"
import { useHistory } from 'react-router-dom'
import { userContext } from '../../../context/userContex'
import { FiEdit } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
function TutorialContent({ tutorial }) {
    const { topics } = tutorial;
    const [activeTopic, setActiveTopic] = useState(topics[0]);
    const { user, setUser } = useContext(userContext)
    const history = useHistory()

    function toggleActiveStyles(index) {
        if (topics[index] === activeTopic) {
            return "active";
        } else {
            return "";
        }
    }

    const handleDelete = async () => {

        const response = await fetch(`http://localhost:5000/tutorials/${tutorial._id}/topics/deleteTopic/${activeTopic._id}`, {

            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        const res = await response.json()

        console.log(res)
    }
    return (
        <div className='tutorial-container'>
            <div className="tutorial-sidebar">
                <div className="tutorial-index">
                    {
                        topics.map((topic, index) => (
                            <p
                                key={index}
                                className={toggleActiveStyles(index)}
                                onClick={() => setActiveTopic(topic)}
                            >
                                {topic.title}
                            </p>
                        ))
                    }
                </div>
            </div>
            <div className="tutorial-main">
                {
                    user ?
                        user._id === tutorial.author ?
                            <div className='modify-tutorial'>
                                <span className="create-topic"
                                    onClick={() => {
                                        history.push({
                                            pathname: '/tutorials/add-topic',
                                            state: {
                                                tut_id: tutorial._id
                                            }
                                        })
                                    }}>
                                    Add Topic
                                </span>
                                <div>
                                    <span
                                        className='edit-icon'
                                        onClick={() => {
                                            history.push({
                                                pathname: `/tutorials/edit-topic`,
                                                state: {
                                                    activeTopic,
                                                    tut_id: tutorial._id
                                                }
                                            })
                                        }}
                                    >
                                        <FiEdit />
                                    </span>

                                    <span
                                        className='blog-delete-icon'
                                        onClick={() => handleDelete()}
                                    >
                                        <IoTrashOutline />
                                    </span>
                                </div>
                            </div> : null
                        : null
                }
                {activeTopic ?
                    <div>
                        <h1 className='tutorial-topic'>{activeTopic.title}</h1>
                        <div>
                            <div dangerouslySetInnerHTML={{ __html: activeTopic.content }}></div>
                        </div>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default TutorialContent