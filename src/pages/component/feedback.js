import React, { Component, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import client1 from '../../img/client/client_1.png';
import client2 from '../../img/client/client_2.png';


import OwlCarousel from 'react-owl-carousel';
const $ = require('jquery');


class Feedback extends Component{
        
    state= {
        responsive:{
            0: {
                nav: false,
                items: 1
              },
            575: {
                nav: false,
                items: 2
              },
            991: {
                nav: true,
                items: 1
              },
            1200: {
                nav: true,
                items: 2
              },
        },
    }
    render() {
        return(
            <section className="review_part section_padding">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-end">
                        <div className="col-lg-5 col-xl-4">
                            <div className="tour_pack_text">
                                <h2>Some Feedback
                                        From Client</h2>
                                <p>Which cattle fruitful he fly visi won not let above lesser stars fly form wonder every let third form two air seas after us said day won lso together midst two female she</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <OwlCarousel autoplayHoverPause={true} margin={40}  autoplay= {true} items={2} responsive={this.state.responsive} className="review_part_cotent">
                                <div className="item single_review_part">
                                    <img src={client2} alt="" />
                                    <div className="tour_pack_content">
                                        <p>Life open fifth midst lesser place light after unto move that make had void and whales. So after void called  whose were cattle fourth seed Image yielding is given every own tree Image</p>
                                        <h4>Sawpalo, Brasil</h4>
                                    </div>
                                </div>
                                <div className="item single_review_part">
                                    <img src={client1} alt="" />
                                    <div className="tour_pack_content">
                                        <p> Life open fifth midst lesser place light after unto move that make had void and whales. So after void called  whose were cattle fourth seed Image yielding is given every own tree Image</p>
                                        <h4>Sawpalo, Brasil</h4>
                                    </div>
                                </div>
                                <div className="item single_review_part">
                                    <img src={client2}alt="" />
                                    <div className="tour_pack_content">
                                        <p>Life open fifth midst lesser place light after unto move that make had void and whales. So after void called  whose were cattle fourth seed Image yielding is given every own tree Image</p>
                                        <h4>Sawpalo, Brasil</h4>
                                    </div>
                                </div>
                                <div className="item single_review_part">
                                            <img src={client1} alt="" />
                                            <div className="tour_pack_content">
                                                <p>Life open fifth midst lesser place light after unto move that make had void and whales. So after void called  whose were cattle fourth seed Image yielding is given every own tree Image</p>
                                                <h4>Sawpalo, Brasil</h4>
                                            </div>
                                        </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

        );}




}


export default Feedback;