import React, { Component } from 'react'
import '../CSS/BlogCard.css'
import img1 from "../assets/react-vs-angular.png"

class Cards extends Component {
    render() {
        return (
            <div className="card-container">
                        <div className='card2 text-center shadow'>
                            <div className='overflow'>
                                <img src={img1} alt="Image 1" className="card-img-top" />
                            </div>
                            <div className='card-body text-dark'>
                                <h4 className='card-title'>React or Angular</h4>
                                <p id="card-author">19-Aug-2021-by-Rayyan</p>
                                <p id="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, accusamus cumque adipisci molestiae distinctio repellendus sit expedita minus natus odit?
                                </p>
                                <a href="#" class=''>Read More</a>

                            </div>
                        </div> 
            </div>

        );
    }
}

export default Cards