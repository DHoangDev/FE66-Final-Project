import React, { Component } from 'react'

import './Content.css';

export default class Content extends Component {
    render() {
        return (
            <section id="banner">
                <div className="banner_section">
                    <img className="banner_all" src="./assets/images/trang-ti-16190592773054.jpg" alt />
                    <div className="playtrailer1">
                        <a className="venobox" data-vbtype="video" href="https://youtu.be/sx1ROHCmY-4">
                            <img src="./assets/images/play-video.png" alt />
                        </a>
                    </div>
                    <div className="styleGardient" />
                    <div className="banner_detail banner_width d-flex">
                        <div className="col-sm-3">
                            <div className="poster">
                                <a className="playtrailer showposter venobox" data-vbtype="video" href="https://youtu.be/sx1ROHCmY-4">
                                    <img src="./assets/images/play-video.png" alt />
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-5 banner_info">
                            <div>
                                <span className="banner_detail1">30.04.2021</span>
                                <br />
                            </div>
                            <div className="banner_content">
                                <span className="banner_info1">
                                    <span className="banner_P">P</span>
                                    <span className="banner_info1__detail">Trạng Tí Phiêu Lưu Kí</span>
                                </span>
                            </div>
                            <div className="banner_info2">
                                <span className="banner_detail1">100 phút - 0 IMDb - 2D/Digital</span>
                            </div>
                        </div>
                        <div className="col-sm-2 circle">
                            <div className="br" />
                            <div className="circle100">
                                <div className="circleBorder">
                                </div>
                                <span>6.2</span>
                                <div className="splice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                            <div className="star">
                                <img className="star_icon" src="./assets/images/star1.png" alt />
                                <img className="star_icon" src="./assets/images/star1.png" alt />
                                <img className="star_icon" src="./assets/images/star1.png" alt />
                                <img className="star_icon" src="./assets/images/star1.2.png" alt />
                            </div>
                            <div className="danhgia">
                                <span className="banner_detail1">166 người đánh giá</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
