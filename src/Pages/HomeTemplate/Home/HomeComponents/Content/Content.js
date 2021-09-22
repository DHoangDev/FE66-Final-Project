import React, { Component } from 'react'

import './Content.css';

import CarouselFilm from './CarouselFilm/CarouselFilm'
import XuatChieu from './XuatChieu/XuatChieu'
import TinTuc from './TinTuc/Tintuc'
import AppFilm from './AppFilm/AppFilm'

export default class Content extends Component {
    render() {
        return (
            <div>
                <section id="selectFilm" className="d-none d-lg-block">
                    <div className="card ml-auto mr-auto">
                        <nav className="navbar navbar-expand-md p-0">
                            <ul className="navbar-nav w-100">
                                <li className="nav-item main-block dropdown border-right">
                                    <a href className="nav-link dropdown-toggle" id="filmDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Phim</a>
                                    <div className="dropdown-menu" aria-labelledby="#filmDropdown">
                                        <a href className="dropdown-item">Trạng Tí Phiêu Lưu Ký</a>
                                        <a href className="dropdown-item">Lật Mặt: 48h</a>
                                        <a href className="dropdown-item">Thiên Thần Hộ Mệnh - The Guardian (C18)</a>
                                        <a href className="dropdown-item" />
                                        <a href className="dropdown-item" />
                                    </div>
                                </li>
                                <li className="nav-item small-block dropdown border-right">
                                    <a href className="nav-link dropdown-toggle" id="cineDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Rạp</a>
                                    <div className="dropdown-menu" aria-labelledby="#cineDropdown">
                                        <a href className="dropdown-item">Vui lòng chọn phim</a>
                                    </div>
                                </li>
                                <li className="nav-item small-block dropdown border-right">
                                    <a href className="nav-link dropdown-toggle" id="dayDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ngày Xem</a>
                                    <div className="dropdown-menu" aria-labelledby="#dayDropdown">
                                        <a href className="dropdown-item">Vui lòng chọn phim và rạp</a>
                                    </div>
                                </li>
                                <li className="nav-item small-block dropdown border-right">
                                    <a href className="nav-link dropdown-toggle" id="timeDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Xuất chiếu</a>
                                    <div className="dropdown-menu" aria-labelledby="#timeDropdown">
                                        <a href className="dropdown-item">Vui lòng chọn phim, rạp và ngày xem</a>
                                    </div>
                                </li>
                                <li className="nav-item small-block" style={{ display: 'flex', alignItems: 'center', padding: '0 1rem' }}>
                                    <button type="button" className="btn btn-dark w-100">MUA VÉ NGAY</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
                <CarouselFilm />
                <section id="bg_img">
                    <div className="img" style={{ backgroundImage: `url('/assets/images/back-news.png')` }} />
                </section>
                <XuatChieu />
                <section id="bg_img">
                    <div className="img" style={{ backgroundImage: `url('/assets/images/back-news.png')` }} />
                </section>
                <TinTuc />
                <AppFilm />
            </div>
        )
    }
}
