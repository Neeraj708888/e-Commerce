import React from 'react'
import './Footer.css'
import instagram from '../Assets/instagram.png'
import whatsapp from '../Assets/whatsapp.png'
import facebook from '../Assets/facebook.png'
import pinterest from '../Assets/pinterest.png';
import logo1 from '../Assets/logo1.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={logo1} alt="" />
                <p>E-Commerce</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Office</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={facebook} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
