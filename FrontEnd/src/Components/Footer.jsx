import React from 'react'
import '../CSS/Footer.css'

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className="left">
                <h6 className='footer-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quibusdam.
                </h6>
                
                <div className="quicklinks"><p>Quicklinks</p>
                    <p>Interview Experience</p>
                    <p>Home</p>
                    <p>Courses</p>
                    <p>Blogs</p>
                    <p>Test</p>
                    <p>About Us</p>
                    <p>Be a Contributor</p>
                </div>
                <span className='social-links'>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>
                </span>
            </div>
            <div className="right">
                <p>Contact Us</p>
                <p>info@codex.com</p>
                <p>Vasai, Maharashtra</p>
            </div>
        </div>
    )
}
