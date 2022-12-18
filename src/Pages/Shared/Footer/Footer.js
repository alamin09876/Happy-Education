import React from 'react';
import './Footer.css'
import { FaFacebook, FaFacebookMessenger, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <div className="footer-title">
                <h3>Happy Education</h3>
            </div>
            <hr></hr>
            <div className="footer-menu">
                <Link>Contact Us</Link>
                <Link>About Us</Link>
            </div>
            
            <small className='mt-3'>Copyright © 2022 Happy Education</small>
        </footer >
    );
};

export default Footer;