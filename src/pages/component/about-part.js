import React from 'react';
import about_part_img from '../../img/about_part_img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive } from '@fortawesome/free-solid-svg-icons';



function Aboutpart () {
    return(
        <section className="about_part section_padding">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6 col-lg-6">
                        <div className="about_part_img">
                            <img src={about_part_img} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <div className="about_part_text">
                            <h2>Engineering Your
                                Dreams With Us</h2>
                            <p>Which cattle fruitful he fly visi won't let above lesser stars. Fly form wonder every let third form two air seas after us said day won light also  together midst two female she great to open.</p>
                            <ul>
                                <li>
                                    <span className="flaticon-drop"><FontAwesomeIcon icon={faArchive} /></span>
                                    <h3>Certified Company</h3>
                                    <p>Be man air male shall under create light together grass fly dat also also his brought itself air abundantly </p>
                                </li>
                                <li>
                                    <span className="flaticon-ui"><FontAwesomeIcon icon={faArchive} /></span>
                                    <h3>Experience Employee</h3>
                                    <p>Be man air male shall under create light together grass fly do also also his brought itself air abundantly </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
    

export default Aboutpart;