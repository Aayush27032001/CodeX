import React, { Component } from 'react'
import './CoursesCard.css'

import img2 from "../../../assets/course-image.jpg"

class CoursesCard extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <div className='course-card text-center shadow'>
                            <div className='overflow'>
                                <img src={img2} alt="Image 2" className="course-card-img-top" />
                            </div>

                            <div className='course-card-body text-dark'>

                                <h4 className='course-card-title'><a id="title-link" href="blog">Python For Beginners</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default CoursesCard