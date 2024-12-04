import React from 'react';
import './Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import logos from './Logo.png'
import FooterIcon from './FooterIcon';

export default function Footer() {
  return (
    <div>
      <footer class="footer-section">
        <div class="container">
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src={logos} class="img-fluid" alt="logo" style={{ width:"100px" , height: "100px" }} /></a>
                            </div>
                            <div class="footer-text">
                                <p>Through us you can know about any type of plant you wish to place in your home.</p>
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <FooterIcon />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#" style={{ textDecoration: "none" }}>Home</a></li>
                                <li><a href="#" style={{ textDecoration: "none" }}>about</a></li>
                                <li><a href="#" style={{ textDecoration: "none" }}>services</a></li>
                                <li><a href="#" style={{ textDecoration: "none" }}>portfolio</a></li>
                                <li><a href="#" style={{ textDecoration: "none" }}>Contact</a></li>
                                <li><a href="#" style={{ textDecoration: "none" }}>About us</a></li>
                                <li><a href="#" style={{ textDecoration: "none" }}>Our Services</a></li>
                                <li><a href="#" style={{ textDecoration: "none" }}>Expert Team</a></li>
                                <li><a href="#" style={{ textDecoration: "none" }}>Contact us</a></li>
                                <li><a href="#" style={{ textDecoration: "none" }}>Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2024, All Rights Reserved</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#" style={{ textDecoration: "none" }}>Home</a></li>
                                <li><a href="#" style={{ textDecoration: "none" }}>Terms</a></li>
                                <li><a href="#" style={{ textDecoration: "none" }}>Privacy</a></li>
                                <li><a href="#" style={{ textDecoration: "none" }}>Policy</a></li>
                                <li><a href="#" style={{ textDecoration: "none" }}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}