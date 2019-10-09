import React, { Component } from 'react';
import blog_1 from '../../img/blog/blog_1.png';
import blog_2 from '../../img/blog/blog_2.png';
import blog_3 from '../../img/blog/blog_3.png';


class Reacent extends Component {
  
    render() {
        return(
        <section className="blog_part section_padding">
            <div className="container">
                <div className="row ">
                    <div className="col-xl-5">
                        <div className="section_tittle ">
                            <h2>Recent news</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-4">
                        <div className="single-home-blog">
                            <div className="card">
                                <img src={blog_1} className="card-img-top" alt="blog"/>
                                <div className="card-body">
                                    <ul>
                                        <li> <span className="ti-comments"></span>2 Comments</li>
                                        <li> <span className="ti-heart"></span>2k Like</li>
                                    </ul>
                                    <a href="#">
                                        <h5 className="card-title">Our two firmament called us kind in face midst</h5>
                                    </a>
                                    <a href="#" className="btn_3">read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-4">
                        <div className="single-home-blog">
                            <div className="card">
                                <img src={blog_2} className="card-img-top" alt="blog" />
                                <div className="card-body">
                                    <ul>
                                        <li> <span className="ti-comments"></span>2 Comments</li>
                                        <li> <span className="ti-heart"></span>2k Like</li>
                                    </ul>
                                    <a href="#">
                                        <h5 className="card-title">Our two firmament called us kind in face midst</h5>
                                    </a>
                                    <a href="#" className="btn_3">read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-4">
                        <div className="single-home-blog">
                            <div className="card">
                                <img src={blog_3} className="card-img-top" alt="blog" />
                                <div className="card-body">
                                    <ul>
                                        <li> <span className="ti-comments"></span>2 Comments</li>
                                        <li> <span className="ti-heart"></span>2k Like</li>
                                    </ul>
                                    <a href="#">
                                        <h5 className="card-title">Our two firmament called us kind in face midst</h5>
                                    </a>
                                    <a href="#" className="btn_3">read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        );
  }

}

export default Reacent;