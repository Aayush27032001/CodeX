import React from 'react'

function CreateTestForm() {

    return (
        <div className='createtest-form-container'>
            <form className='createtest-form' action="POST">
                <input type="text" name="question" id="question" className='test-question input-field' placeholder='Enter Your Question' />
                <input type="text" name="question-option" id="1" className='test-option input-field' placeholder='Option' />
                <input type="text" name="question-option" id="2" className='test-option input-field' placeholder='Option' />
                <input type="text" name="question-option" id="3" className='test-option input-field' placeholder='Option' />
                <input type="text" name="question-option" id="4" className='test-option input-field' placeholder='Option' />     
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default CreateTestForm;
