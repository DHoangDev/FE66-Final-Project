import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Slider from "react-slick";

import './CarouselFilm.css';
import './ButtonsStyle.css';

import Rating from './Rating';

import { GROUP_ID } from '../../../../../../Util/Setting';
import { phimAction } from '../../../../../../Redux/Action/PhimAction';
import { NavLink } from 'react-router-dom';

export default function CarouselFilm(props) {

    const settings = {
        arrows: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 540,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    };

    const { arrPhim } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const actionPhim = phimAction(GROUP_ID);
        dispatch(actionPhim);
    }, [])

    const renderPhimDangChieu = () => {
        return arrPhim.map((value, index) => {
            let dateString = value.ngayKhoiChieu, reggie = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
            var dateArray = reggie.exec(dateString);
            if (value.dangChieu === true) {
                return (
                    <div className="item" key={index}>
                        <div className="card">
                            <img className="w-100" src={value.hinhAnh} alt="..." />
                            <div className="overlay">
                                <div className="title">
                                    <h3 className="text-light">{value.tenPhim}</h3>
                                </div>
                                <div className="story text-light">
                                    <p>{value.moTa}</p>
                                </div>
                                <div className="action">
                                    <a className="btn-hover color-1 venobox" type="button" data-vbtype="video" href={value.trailer}>TRAILER</a>
                                    <NavLink className="btn-hover color-2" type="button" to={`/About/${value.maPhim}`}>CHITIET</NavLink>
                                </div>
                                <div className="info">
                                    <div className="text-light">
                                        <span>Đánh giá: </span>
                                        {<Rating value={value.danhGia / 2} />}
                                    </div>
                                    <div className="text-light">
                                        <span>Ngày khởi chiếu: </span><span>{dateArray[3]}-{dateArray[2]}-{dateArray[1]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }
    const renderPhimSapChieu = () => {
        return arrPhim.map((value, index) => {
            let dateString = value.ngayKhoiChieu, reggie = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
            var dateArray = reggie.exec(dateString);
            if (value.sapChieu === true) {
                return (
                    <div className="item" key={index}>
                        <div className="card">
                            <img className="w-100" src={value.hinhAnh} alt="..." />
                            <div className="overlay">
                                <div className="title">
                                    <h3 className="text-light">{value.tenPhim}</h3>
                                </div>
                                <div className="story text-light">
                                    <p>{value.moTa}</p>
                                </div>
                                <div className="action">
                                    <a class="btn-hover color-1 venobox" type="button" data-vbtype="video" href={value.trailer}>TRAILER</a>
                                    <a class="btn-hover color-2" type="button" href="#">CHITIET</a>
                                </div>
                                <div className="info">
                                    <div className="text-light">
                                        <span>Đánh giá: </span>
                                        {<Rating value={value.danhGia / 2} />}
                                    </div>
                                    <div className="text-light">
                                        <span>Ngày khởi chiếu: </span><span>{dateArray[3]}-{dateArray[2]}-{dateArray[1]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }

    return (
        <section id="timeCine" className="container-lg my-5">
            <nav>
                <div className="nav nav-tabs align-items-end" id="nav-tab" role="tablist">
                    <a className="nav-link ml-auto active" id="nav-dangchieu-tab" data-toggle="tab" href="#nav-dangchieu"
                        role="tab" aria-controls="nav-dangchieu" aria-selected="true">Đang Chiếu</a>
                    <a className="nav-link mr-auto" id="nav-sapchieu-tab" data-toggle="tab" href="#nav-sapchieu"
                        role="tab" aria-controls="nav-sapchieu" aria-selected="false">Sắp Chiếu</a>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-dangchieu" role="tabpanel" aria-labelledby="nav-dangchieu-tab">
                    <Slider {...settings} className="carousel_slick_2">
                        {renderPhimDangChieu()}
                    </Slider>
                </div>
                <div className="tab-pane fade" id="nav-sapchieu" role="tabpanel" aria-labelledby="nav-sapchieu-tab">
                    <Slider {...settings} className="carousel_slick_3">
                        {renderPhimSapChieu()}
                    </Slider>
                </div>
            </div>
        </section>
    )
}
