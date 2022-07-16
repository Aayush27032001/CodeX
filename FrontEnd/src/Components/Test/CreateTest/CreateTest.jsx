import React from 'react'
import "./CreateTest.css"
import CreateTestForm from '../CreateTestForm/CreateTestForm'

function CreateTest() {
    var questions = []

    function addQuestions(question){
        questions.push(question);
        // console.log(questions);
    }

    // console.log(questions);

    return (
        <div className='TestForm-conatiner'>
            <div>
               
            </div>

            <CreateTestForm add={addQuestions} />
      
        </div>
    )
}

export default CreateTest
