import React from 'react';
import { NavLink } from 'react-router-dom';
import "../footer/footr.css";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="footer_container">
                <div className="footr_details_one">
                    <h3>Get to Know Us</h3>
                    <a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer" target="_blank" rel="noopener noreferrer"><p>About Us</p></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><p>Careers</p></a>
                    <a href="https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer" target="_blank" rel="noopener noreferrer"><p>Press Releases</p></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><p>Amazon Cares</p></a>
                </div>
                <div className="footr_details_one">
                    <h3>Connect with Us</h3>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><p>Facebook</p></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><p>Twitter</p></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><p>Instagram</p></a>
                </div>
                <div className="footr_details_one forres">
                    <h3>Make Money with Us</h3>
                    <a href="" target="_blank" rel="noopener noreferrer"><p>Sell on Amazon</p></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><p>Amazon Business</p></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><p>Affiliate Program</p></a>
                </div>
                <div className="footr_details_one forres">
                    <h3>Account</h3>
                    <NavLink to="/signup"><p>Sign UP</p></NavLink>
                    <NavLink to="/login"><p>Sign In</p></NavLink>
                    <NavLink to="/buynow"><p>View Cart</p></NavLink>
                    <NavLink to="/orders"><p>Track My Order</p></NavLink>
                </div>
            </div>
            <div className="lastdetails">
                <img src="./amazon_PNG25.png" alt="logo" />
                <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp; Privacy Notice &nbsp; &nbsp;&nbsp; Interest-Based Ads &nbsp; &nbsp;&nbsp; © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
            </div>
        </footer>
    );
}

export default Footer;
