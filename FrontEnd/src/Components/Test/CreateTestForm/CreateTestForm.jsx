import React from 'react'

function CreateTestForm({add}) {
    var question = []
    
    function addQuestion() {
        var title = document.getElementById("question").value;
        var option1 = document.getElementById("1").value;
        var option2 = document.getElementById("2").value;
        var option3 = document.getElementById("3").value;
        var option4 = document.getElementById("4").value;
        // console.log(title);
        question.push(
            question = {title,option1,option2,option3,option4}

        )
        // console.log(question);
        add(question);
    }

    return (
        <div className='createtest-form-container'>
            <div className='createtest-form'>
                <input type="text" name="question" id="question" className='test-question input-field' placeholder='Enter Your Question' />
                <input type="text" name="question-option" id="1" className='test-option input-field' placeholder='Option' />
                <input type="text" name="question-option" id="2" className='test-option input-field' placeholder='Option' />
                <input type="text" name="question-option" id="3" className='test-option input-field' placeholder='Option' />
                <input type="text" name="question-option" id="4" className='test-option input-field' placeholder='Option' />     
                <input onClick={()=>addQuestion()} value="Submit"/>
            </div>
        </div>
    )
}

export default CreateTestForm;
