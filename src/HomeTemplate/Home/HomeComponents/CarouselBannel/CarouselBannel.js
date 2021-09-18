import React, { Component } from 'react'

import './CarouselBannel.css';

export default class Carousel extends Component {
    render() {
        return (
            <section id="carousel">
                <div className="carousel_slick_1 m-0">
                    <div className="carousel_item">
                        <a className="venobox" data-vbtype="video" href="https://youtu.be/sx1ROHCmY-4">
                            <img className="w-100 h-100" src="./assets/images/trang-ti-16194117174325.jpg" alt />
                            <button>
                                <img src="./assets/images/play-video.png" alt />
                            </button>
                        </a>
                        <div className="background-linear" />
                    </div>
                    <div className="carousel_item">
                        <a className="venobox" data-vbtype="video" href="https://youtu.be/UeyaR8jWl2c">
                            <img className="w-100 h-100" src="./assets/images/lat-mat-48h-16177782153424.png" alt />
                            <button>
                                <img src="./assets/images/play-video.png" alt />
                            </button>
                        </a>
                        <div className="background-linear" />
                    </div>
                    <div className="carousel_item">
                        <a className="venobox" data-vbtype="video" href="https://www.youtube.com/watch?v=uqJ9u7GSaYM">
                            <img className="w-100 h-100" src="./assets/images/ban-tay-diet-quy-evil-expeller-16177781815781.png" alt />
                            <button><img src="./assets/images/play-video.png" alt /></button>
                        </a>
                        <div className="background-linear" />
                    </div>
                </div>
            </section>
        )
    }
}
