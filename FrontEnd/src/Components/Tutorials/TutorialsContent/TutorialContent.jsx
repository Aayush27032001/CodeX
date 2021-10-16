import React, { useState } from 'react'
import "./TutorialContent.css"
import { useHistory } from 'react-router-dom'
function TutorialContent({ tutorial }) {
    const { topics } = tutorial;
    const [activeTopic, setActiveTopic] = useState(topics[0]);
    const history = useHistory()

    function toggleActiveStyles(index) {
        if (topics[index] === activeTopic) {
            return "active";
        } else {
            return "";
        }
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
                <div className="create-topic"
                    onClick={() => {
                        history.push({
                            pathname: '/tutorials/add-topic',
                            state: {
                                tut_id: tutorial._id
                            }
                        })
                    }}>
                    Add Topic
                </div>
                <h1 className='tutorial-topic'>{activeTopic.title}</h1>
                <div>
                    <div dangerouslySetInnerHTML={{ __html: activeTopic.content }}></div>
                </div>
            </div>
        </div>
    )
}

export default TutorialContent