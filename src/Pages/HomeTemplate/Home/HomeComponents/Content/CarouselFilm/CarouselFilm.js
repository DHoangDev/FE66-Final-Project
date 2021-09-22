import React, { Component } from 'react'
import Slider from "react-slick";

import './CarouselFilm.css';

export default class CarouselFilm extends Component {
    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };

        return (
            <section id="timeCine" className="ml-auto mr-auto mt-4">
                <nav>
                    <div className="nav nav-tabs align-items-end" id="nav-tab" role="tablist">
                        <a className="nav-link ml-auto active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
                            role="tab" aria-controls="nav-home" aria-selected="true">Đang Chiếu</a>
                        <a className="nav-link mr-auto" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                            role="tab" aria-controls="nav-profile" aria-selected="false">Sắp Chiếu</a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <Slider {...settings} className="carousel_slick_2">
                            <div className="item">
                                <div className="row">
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href="./chitiet.html" className="box w-100">
                                                <img className="w-100" src="./assets/images/trang-ti-16194120693380_215x318.jpg" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    <p>8.8</p>
                                                    <p>
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.2.png" alt />
                                                    </p>
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType ageType-general">P</span>
                                                    Trạng Tí Phiêu Lưu Ký
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href="./chitiet.html" className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/lat-mat-48h-16176188609123_215x318.png" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    <p>8.8</p>
                                                    <p>
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.2.png" alt />
                                                    </p>
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType">C18</span>
                                                    Lật Mặt: 48h
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href="./chitiet.html" className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/03/thien-than-ho-menh-16157907251398_215x318.jpg" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    <p>8.8</p>
                                                    <p>
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.2.png" alt />
                                                    </p>
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType">C18</span>
                                                    Thiên Thần Hộ Mệnh - The Guardian (C18)
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href="./chitiet.html" className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/detective-conan-scarlet-bullet-tham-tu-lung-danh-conan-vien-dan-do-p-16185623740090_215x318.png" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    <p>8.8</p>
                                                    <p>
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.2.png" alt />
                                                    </p>
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType">C13</span>
                                                    Detective Conan: Scarlet Bullet - Thám Tử Lừng Danh Conan: Viên Đạn Đỏ - C13
                                                </div>
                                                <div className="infoFilm">110 phút - 6.5 IMDb</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href="./chitiet.html" className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/03/nguoi-nhan-ban-seobok-c18-16170933054901_215x318.jpg" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    <p>8.8</p>
                                                    <p>
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.2.png" alt />
                                                    </p>
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType">C16</span>
                                                    Người Nhân Bản - Seobok (C16)
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href="./chitiet.html" className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/03/ban-tay-diet-quy-evil-expeller-c16-16167437811994_215x318.png" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    <p>8.8</p>
                                                    <p>
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.2.png" alt />
                                                    </p>
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType">C16</span>
                                                    Bàn Tay Diệt Quỷ - Evil Expeller (C16)
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href="./chitiet.html" className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/ke-vo-danh-nobody-c18-16177813592209_215x318.png" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    <p>8.8</p>
                                                    <p>
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.2.png" alt />
                                                    </p>
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType">C18</span>
                                                    Kẻ Vô Danh - Nobody - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href="./chitiet.html" className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/05/hung-than-trang-great-white-c13-16199525115620_215x318.png" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    <p>8.8</p>
                                                    <p>
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.2.png" alt />
                                                    </p>
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType">C18</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href="./chitiet.html" className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/05/chien-binh-cuoi-cung-cuoi-nguon-cua-quy-the-last-warrior-root-of-evil-c13-16199511224567_215x318.png" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    <p>8.8</p>
                                                    <p>
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.2.png" alt />
                                                    </p>
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType">C13</span>
                                                    Chiến Binh Cuối Cùng: Cuội Nguồn Của Quỷ - The Last Warrior: Root Of Evil - C13
                                                </div>
                                                <div className="infoFilm">122 phút - 5.9 IMDb</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href="./chitiet.html" className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/ong-nhi-phieu-luu-ky-giai-cuu-cong-chua-kien-maya-the-bee-3-the-golden-orb-p-16177793756407_215x318.png" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    <p>8.8</p>
                                                    <p>
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.2.png" alt />
                                                    </p>
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType ageType-general">P</span>
                                                    Ong Nhí Phiêu Lưu Ký: Giải Cứu Công Chúa Kiến - Maya The Bee 3: The Golden Orb - P
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href="./chitiet.html" className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/nhan-doi-tinh-yeu-double-party-c13-16188292910862_215x318.png" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    <p>8.8</p>
                                                    <p>
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.2.png" alt />
                                                    </p>
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType">C18</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href="./chitiet.html" className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/trum-cuoi-sieu-dang-bosslevel-c18-16188999396703_215x318.png" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    <p>8.8</p>
                                                    <p>
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.2.png" alt />
                                                    </p>
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType">C18</span>
                                                    Trùm Cuối Siêu Đẳng - Boss Level - C18
                                                </div>
                                                <div className="infoFilm">100 phút - 6.9 IMDb</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href="./chitiet.html" className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/05/hung-than-trang-great-white-c13-16199525115620_215x318.png" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    <p>8.8</p>
                                                    <p>
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.2.png" alt />
                                                    </p>
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType">C18</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/05/hung-than-trang-great-white-c13-16199525115620_215x318.png" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    <p>8.8</p>
                                                    <p>
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.png" alt />
                                                        <img src="./assets/images/star1.2.png" alt />
                                                    </p>
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType">C18</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <Slider {...settings} className="carousel_slick_3">
                            <div className="item">
                                <div className="row">
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2020/02/john-wick-chapter-4-15827770304921_215x318.jpg" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    21/05
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType ageType-general">P</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/dua-be-i-16188328093041_215x318.png" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    21/05
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType ageType-general">P</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2019/08/shang-chi-and-the-legend-of-the-ten-rings-15668741464229_215x318.jpg" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    21/05
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType ageType-general">P</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/03/1990-c16-16170969832613_215x318.jpg" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    21/05
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType ageType-general">P</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2020/01/fast-furious-9-15803709020861_215x318.jpg" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    21/05
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType ageType-general">P</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2020/02/the-matrix-4-15827771560629_215x318.jpg" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    21/05
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType ageType-general">P</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/cruella-16182123467884_215x318.png" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    21/05
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType ageType-general">P</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/03/chu-ngua-bat-kham-spirit-p-16171851912283_215x318.png" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    21/05
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType ageType-general">P</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2019/11/am-anh-kinh-hoang-3-the-conjuring-3-c18-15742352934530_215x318.jpg" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    21/05
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType ageType-general">P</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2020/02/jurassic-world-dominion-15827788277771_215x318.jpg" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    21/05
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType ageType-general">P</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2020/02/em-va-trinh-15813267048692_215x318.jpg" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    21/05
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType ageType-general">P</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2019/12/biet-doi-san-ma-chuyen-kiep-ghostbusters-afterlife-15759470166331_215x318.jpg" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    08/05
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType ageType-general">P</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/03/chu-ngua-bat-kham-spirit-p-16171851912283_215x318.png" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    08/05
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType">C18</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2020/01/in-the-heights-15779380081932_215x318.jpg" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    08/05
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType">C18</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2019/11/venom-2-15740591875202_215x318.jpg" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    08/05
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType">C18</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <span className="wrap">
                                            <a href className="box w-100">
                                                <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2020/02/minions-su-troi-day-cua-gru-15809552091851_215x318.jpg" alt />
                                                <div className="overlay">
                                                    <button>
                                                        <img className="w-100 d-block" src="./assets/images/play-video.png" alt />
                                                    </button>
                                                </div>
                                                <span>
                                                    08/05
                                                </span>
                                            </a>
                                            <div className="info">
                                                <div className="nameFilm">
                                                    <span className="ageType ageType-general">P</span>
                                                    Hùng Thần Trắng - Great White - C18
                                                </div>
                                                <div className="infoFilm">100 Phút</div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
}
