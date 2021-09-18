import React, { Component } from 'react'

import './AppFilm.css';

export default class AppFilm extends Component {
    render() {
        return (
            <section id="appBlock">
                <div className="wrapHomeapp ml-auto mr-auto">
                    <div className="row">
                        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                            <div className="wrap text-center text-lg-start">
                                <div className="appTitle">
                                    <h2>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
                                </div>
                                <div className="appContent">
                                    <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                                </div>
                                <div className="appButton">
                                    <button className="btn btn-danger">App miễn phí - Tải về ngay!</button>
                                </div>
                                <div className="appService">
                                    TIX có hai phiên bản <a href>iOS</a> &amp; <a href>Android</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="mobile-box">
                                <img className="w-100" src="./assets/images/mobile.png" alt />
                                <div className="carousel_slick_4">
                                    <div className="carousel-item"><img className="img-width" src="./assets/images/slide1.jpg" alt /></div>
                                    <div className="carousel-item"><img className="img-width" src="./assets/images/slide2.jpg" alt /></div>
                                    <div className="carousel-item"><img className="img-width" src="./assets/images/slide3.jpg" alt /></div>
                                    <div className="carousel-item"><img className="img-width" src="./assets/images/slide4.jpg" alt /></div>
                                    <div className="carousel-item"><img className="img-width" src="./assets/images/slide5.jpg" alt /></div>
                                    <div className="carousel-item"><img className="img-width" src="./assets/images/slide6.jpg" alt /></div>
                                    <div className="carousel-item"><img className="img-width" src="./assets/images/slide7.jpg" alt /></div>
                                    <div className="carousel-item"><img className="img-width" src="./assets/images/slide8.jpg" alt /></div>
                                    <div className="carousel-item"><img className="img-width" src="./assets/images/slide9.jpg" alt /></div>
                                    <div className="carousel-item"><img className="img-width" src="./assets/images/slide10.jpg" alt /></div>
                                    <div className="carousel-item"><img className="img-width" src="./assets/images/slide11.jpg" alt /></div>
                                    <div className="carousel-item"><img className="img-width" src="./assets/images/slide12.jpg" alt /></div>
                                    <div className="carousel-item"><img className="img-width" src="./assets/images/slide13.jpg" alt /></div>
                                    <div className="carousel-item"><img className="img-width" src="./assets/images/slide14.jpg" alt /></div>
                                    <div className="carousel-item"><img className="img-width" src="./assets/images/slide15.jpg" alt /></div>
                                    <div className="carousel-item"><img className="img-width" src="./assets/images/slide16.jpg" alt /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
