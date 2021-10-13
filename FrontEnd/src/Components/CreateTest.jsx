import React from 'react'
import "../CSS/CreateTest.css"
import CreateTestForm from './CreateTestForm'

function CreateTest() {
    const questions = [
        {

        }
    ]

    function addQuestions({question}){
        question.push({question});
    }

    console.log(questions);

    return (
        <div className='TestForm-conatiner'>
            <div>
               
            </div>

            <CreateTestForm add={addQuestions} />
      
        </div>
    )
}

export default CreateTest
