import React from 'react';
import experiance_img from '../../img/experiance_img.png';



function Experiance () {
    return(

    <section className="about_part experiance_part section_padding">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-md-6 col-lg-6">
                    <div className="about_part_text">
                        <h2>We Are Experience
                                in Construction</h2>
                        <p>Their whose made waters there our, air above first give dry fruit that second whose herb creeping it us light spirit appear mans. So green abundantly She'd. Greater divide dry bearing years ourends herb upon which open lights had blessed replenish Cattle give his. Abundantly over saying which beast dominion multiply behold to wateo.</p>
                        <div className="about_text_iner">
                            <div className="about_text_counter">
                                <h2>20</h2>
                            </div>
                            <div className="about_iner_content">
                                <h3>year <span>of Experience</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="about_part_img">
                        <img src={experiance_img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}
    

export default Experiance;