import React from 'react'
import Slider from "react-slick";

import './Test.css';

export default function Test() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000
    }

    return (
        <div className="container my-5 py-5">
            <Slider {...settings} className="testCenterMode">
                <div className="item">
                    <img className="w-100" src="./assets/images/trang-ti-16194120693380_215x318.jpg" alt="..." />
                </div>
                <div className="item">
                    <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/lat-mat-48h-16176188609123_215x318.png" alt="..." />
                </div>
                <div className="item">
                    <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/03/thien-than-ho-menh-16157907251398_215x318.jpg" alt="..." />
                </div>
                <div className="item">
                    <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/detective-conan-scarlet-bullet-tham-tu-lung-danh-conan-vien-dan-do-p-16185623740090_215x318.png" alt="..." />
                </div>
                <div className="item">
                    <img className="w-100" src="./assets/images/trang-ti-16194120693380_215x318.jpg" alt="..." />
                </div>
                <div className="item">
                    <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/lat-mat-48h-16176188609123_215x318.png" alt="..." />
                </div>
                <div className="item">
                    <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/03/thien-than-ho-menh-16157907251398_215x318.jpg" alt="..." />
                </div>
                <div className="item">
                    <img className="w-100" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/detective-conan-scarlet-bullet-tham-tu-lung-danh-conan-vien-dan-do-p-16185623740090_215x318.png" alt="..." />
                </div>
            </Slider>
        </div>
    )
}
