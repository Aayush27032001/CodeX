import React from 'react'
import "../CSS/CreateTest.css"

function CreateTestForm() {
    const qestions = [];

    return (
        <div className='createtest-form-container'>
            <form className='createtest-form' action="">
                <input type="text" name="question" id="" className='test-question input-field' placeholder='Enter Your Question' />
                <input type="text" name="question-option" id="1" className='test-option input-field' placeholder='Option' />
                <input type="text" name="question-option" id="2" className='test-option input-field' placeholder='Option' />
                <input type="text" name="question-option" id="3" className='test-option input-field' placeholder='Option' />
                <input type="text" name="question-option" id="4" className='test-option input-field' placeholder='Option' />
                
            </form>
        </div>
    )
}

export default CreateTestForm
