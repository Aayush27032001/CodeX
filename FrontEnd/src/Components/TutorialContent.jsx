import React, {useState} from 'react'
import "../CSS/TutorialContent.css"

function TutorialContent({tutorial}) {
    
    const {topics} = tutorial;
    const [activeTopic, setActiveTopic] = useState(topics[0]);

    function toggleActiveStyles(index){
        if(topics[index]===activeTopic){
            return "active";
        }else{
            return "";
        }
    }
    return (
        <div className='tutorial-container'>
            <div className="tutorial-sidebar">
                <div className="tutorial-index">
                    {
                     topics.map((topic, index)=>(
                        <p 
                            key={index}
                            className={toggleActiveStyles(index)}
                            onClick={()=>setActiveTopic(topic)}
                        >
                            {topic.title}
                        </p>
                     ))
                    }
                </div>
            </div>
            <div className="tutorial-main">
                <h1 className='tutorial-topic'>{activeTopic.title}</h1>
                <p>
                   <div dangerouslySetInnerHTML={{ __html: activeTopic.content }}></div>
                </p>
            </div>
        </div>
    )
}

export default TutorialContent