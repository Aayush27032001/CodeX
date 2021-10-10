import React from 'react'
import { NavLink } from 'react-router-dom'
export default function RedirectorButtons({mode}) {
    return (

        <div className='redirector-buttons-container'>
            <NavLink
                activeClassName='active-login'
                className='redirector-buttons' to={`/student/${mode}`}
            >
                Student
            </NavLink >
            <NavLink
                activeClassName='active-login'
                className='redirector-buttons'
                to={`/teacher/${mode}`}
            >
                Teacher
            </NavLink >
        </div>

    )
}
