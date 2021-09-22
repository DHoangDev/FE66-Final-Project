import React, { Component } from 'react'

import "./CarouselBannel.css"

export default class Test extends Component {
    render() {

        // const settings = {
        //     dots: true,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        // };

        return (
            <div id="BannelCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#BannelCarousel" data-slide-to={0} className="bannel-dotsline s active" >
                        <b>1</b>
                    </li>
                    <li data-target="#BannelCarousel" data-slide-to={1} className="bannel-dotsline m" >
                        <b>2</b>
                    </li>
                    <li data-target="#BannelCarousel" data-slide-to={2} className="bannel-dotsline m" >
                        <b>3</b>
                    </li>
                    <li data-target="#BannelCarousel" data-slide-to={3} className="bannel-dotsline e" >
                        <b>4</b>
                    </li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="padding-bottom">
                            <a className="venobox carousel-content" data-vbtype="video" href="https://youtu.be/sx1ROHCmY-4">
                                <img className="img" src="./assets/images/trang-ti-16194117174325.jpg" alt />
                                <button>
                                    <img src="./assets/images/play-video.png" alt />
                                </button>
                                <div className="background-linear" />
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="padding-bottom">
                            <a className="venobox carousel-content" data-vbtype="video" href="https://youtu.be/sx1ROHCmY-4">
                                <img className="img" src="./assets/images/lat-mat-48h-16177782153424.png" alt />
                                <button>
                                    <img src="./assets/images/play-video.png" alt />
                                </button>
                                <div className="background-linear" />
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="padding-bottom">
                            <a className="venobox carousel-content" data-vbtype="video" href="https://youtu.be/sx1ROHCmY-4">
                                <img className="img" src="./assets/images/ban-tay-diet-quy-evil-expeller-16177781815781.png" alt />
                                <button>
                                    <img src="./assets/images/play-video.png" alt />
                                </button>
                            </a>
                            <div className="background-linear" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="padding-bottom">
                            <a className="venobox carousel-content" data-vbtype="video" href="https://youtu.be/sx1ROHCmY-4">
                                <img className="img" src="./assets/images/lat-mat-48h-16177782153424.png" alt />
                                <button>
                                    <img src="./assets/images/play-video.png" alt />
                                </button>
                            </a>
                            <div className="background-linear" />
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#BannelCarousel" role="button" data-slide="prev">
                    <span className="prev-icon" aria-hidden="true" />
                </a>
                <a className="carousel-control-next" href="#BannelCarousel" role="button" data-slide="next">
                    <span className="next-icon" aria-hidden="true" />
                </a>
            </div>
        )
    }
}
