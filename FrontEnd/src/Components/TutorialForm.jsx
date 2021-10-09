import React from 'react'
import '../CSS/TutorialForm.css'

function TutorialForm() {
    return (
        <div className="tutorial-form-conatiner">
            <form className="tutorial-form">
                <select className="input-field" name="Cartegory" id="tutorial-id">
                    <option value="Category" selected>Category </option>
                    <option value="Databases">Databases</option>
                    <option value="DSA">DSA</option>
                    <option value="Computer Security">Computer Security</option>
                    <option value="Python">Python</option>
                </select>

                <input
                    className="input-field"
                    type="text"
                    placeholder="Subject"
                />

                <input
                    className="form-btn"
                    type="submit"
                    value="Next"
                />
            </form>
        </div>
    )
}

export default TutorialForm
