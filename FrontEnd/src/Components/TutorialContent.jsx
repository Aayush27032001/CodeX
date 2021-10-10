import React, {useState} from 'react'
import "../CSS/TutorialContent.css"

function TutorialContent() {
    const content = [
        {
            id:1,
            content: "hello"
        },
        {
            id:2,
            content: "Aayush"
        },
        {
            id:3,
            content: "Nilesh"
        },
        {
            id:4,
            content: "Jay"
        },
        {
            id:5,
            content: "Rayyan"
        }
    ]
    const [active, setActive] = useState({
        activeObject: null,
        objects: content
    });

    function toggleActive(index){
        setActive({...active, activeObject: active.objects[index]});
    }

    function toggleActiveStyles(index){
        if(active.objects[index]===active.activeObject){
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
                     active.objects.map((elements, index)=>(
                        <p 
                            key={index}
                            className={toggleActiveStyles(index)}
                            onClick={()=>{toggleActive(index)}}
                        >
                            {content[index].content}
                        </p>
                     ))
                    }
                </div>
            </div>
            <div className="tutorial-main">
                <h1 className='tutorial-topic'>Java</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure accusantium id tempore enim hic quibusdam eaque aliquid, optio eos rem incidunt! Eos temporibus dolores quas a officiis quia iste optio, veniam explicabo, velit, aspernatur quis. Rerum optio pariatur molestias repellat accusantium ipsam sapiente necessitatibus aperiam doloribus. Quasi dolores quae, cumque praesentium ducimus nulla est assumenda repudiandae ex molestias ut eligendi officia facilis accusamus iusto consequatur molestiae voluptatibus, voluptas provident modi amet illum ullam? Sunt alias quisquam eligendi illo quod. Expedita, animi laboriosam. Aspernatur fuga magnam laborum placeat explicabo impedit temporibus hic odio veniam repellendus cupiditate, expedita cumque minus recusandae voluptatibus?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sit labore nulla laborum error voluptatibus ex itaque odio rem praesentium laboriosam tempore porro fugit nostrum, dolor explicabo dolores qui. Officia consequatur vel delectus velit? Reiciendis earum doloribus sequi modi doloremque ipsam, voluptates quod, atque, rem suscipit aliquid obcaecati eum eius?
                </p>
            </div>
        </div>
    )
}

export default TutorialContent