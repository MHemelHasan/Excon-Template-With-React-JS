import React from 'react';
import {Link} from 'react-router-dom';
import mainlogo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <section>
        <header className="main_menu home_menu">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <img src={mainlogo} alt="logo"/>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="ti-menu"><FontAwesomeIcon icon={faBars} /></span>
                            </button>

                            <div className="collapse navbar-collapse main-menu-item justify-content-end"
                                id="navbarSupportedContent">
                                <ul className="navbar-nav align-items-center">
                                    <Link to='/'>
                                        <li className="nav-item">
                                            Home
                                        </li>
                                    </Link>
                                    <Link to='/about'>
                                        <li className="nav-item">
                                            About
                                        </li>
                                    </Link>
                                    <Link to='/services'>
                                        <li className="nav-item">
                                            services
                                        </li>
                                    </Link>
                                    <Link to='/'>
                                        <li className="nav-item">
                                            Blog
                                        </li>
                                    </Link>
                                    
                                    <li className="nav-item dropdown">
                                        <Link to='/'>
                                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Pages
                                            </a>
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link to='/'>
                                                <a className="dropdown-item">project</a>
                                            </Link>
                                            <Link to='/'>
                                                <a className="dropdown-item">project details</a>
                                            </Link>
                                            <Link to='/'>
                                                <a className="dropdown-item">Single blog</a>
                                                </Link>
                                            <Link to='/'>
                                                <a className="dropdown-item">Elements</a>
                                            </Link>

                                        </div>
                                    </li>

                                    <li className="nav-item">
                                        Contact
                                    </li>

                                    <li className="d-none d-lg-block btn_1">
                                        Get a Quote
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </section>
  );
}

export default Nav;