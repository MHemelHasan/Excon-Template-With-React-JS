import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import footer_1 from '../../img/footer_img/footer_1.png';
import footer_2 from '../../img/footer_img/footer_2.png';
import footer_3 from '../../img/footer_img/footer_3.png';
import footer_4 from '../../img/footer_img/footer_4.png';
import footer_5 from '../../img/footer_img/footer_5.png';
import footer_6 from '../../img/footer_img/footer_6.png';
import footer_7 from '../../img/footer_img/footer_7.png';
import footer_8 from '../../img/footer_img/footer_8.png';
import footer_logo from '../../img/footer_logo.png';


class Footer extends Component {
  
    render() {
        return(
            <div>
                <footer className="footer-area">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-sm-6 col-md-4 col-xl-3">
                                <div className="single-footer-widget footer_1">
                                    <Link to="/"> <img src={footer_logo} alt="" /> </Link>
                                    <p>
                                        So seed seed green that winged cattle in Gahesd thing made fly you're no divided deep move lan Gathering thing us land years living on floor me the cavaty do buty fresh
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-md-4">
                                <div className="single-footer-widget footer_2">
                                    <h4>Best Services</h4>
                                    <div className="contact_info">
                                        <ul>
                                            <li>
                                                <a href="#">General Contracting</a>
                                            </li>
                                            <li>
                                                <a href="#">Mechanical Engineering</a>
                                            </li>
                                            <li>
                                                <a href="#">Civil Engineering</a>
                                            </li>
                                            <li>
                                                <a href="#">Bridge Construction</a>
                                            </li>
                                            <li>
                                                <a href="#">Electrical Engineering</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-md-4">
                                <div className="single-footer-widget footer_2">
                                    <h4>Our Gallery</h4>
                                    <div className="footer_img">
                                        <a href="#"><img src={footer_1} alt="footer img" /></a>
                                        <a href="#"><img src={footer_2} alt="footer img" /></a>
                                        <a href="#"><img src={footer_3} alt="footer img" /></a>
                                        <a href="#"><img src={footer_4} alt="footer img" /></a>
                                        <a href="#"><img src={footer_5} alt="footer img" /></a>
                                        <a href="#"><img src={footer_6} alt="footer img" /></a>
                                        <a href="#"><img src={footer_7} alt="footer img" /></a>
                                        <a href="#"><img src={footer_8} alt="footer img" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-md-4">
                                <div className="single-footer-widget footer_2">
                                    <h4>Contact info</h4>
                                    <div className="contact_info"> 
                                        <p>4361 Morningview Lane Artland , Street Latimer, IA 50452 / 23654</p>
                                        <p><span> Address :</span> Hath of it fly signs bear be one blessed after </p>
                                        <p><span> Phone :</span> +2 36 265 (8060)</p>
                                        <p><span> Email : </span>info@colorlib.com </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* /container */}

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright_part_text text-center">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <p className="footer-text m-0">
                                                Copyright &copy;
                                                <script>document.write(new Date().getFullYear());</script> All rights reserved | This React WebAPP is made by <a href="https://hemel.000webhostapp.com" target="_blank">Hemel Hasan</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
  }

}

export default Footer;