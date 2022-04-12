import React from 'react'
import { NavLink } from 'react-router-dom'
export default function RedirectorButtons({mode, setTypeOfRole}) {
    return (

        <div className='redirector-buttons-container'>
            <NavLink
                activeClassName='active-login'
                className='redirector-buttons' to={`/student/${mode}`}
                onClick={()=>{setTypeOfRole("Student's")}}
            >
                Student
            </NavLink >
            <NavLink
                activeClassName='active-login'
                className='redirector-buttons'
                to={`/teacher/${mode}`}
                onClick={()=>{setTypeOfRole("Teacher's")}}
            >
                Teacher
            </NavLink >
        </div>

    )
}
