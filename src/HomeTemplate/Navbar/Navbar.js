import React, { Component } from 'react'

import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md">
                    <a className="navbar-brand p-0" href="#">
                        <img className="w-50" src="./assets/images/web-logo.png" alt="..." />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <img className=" w-100" src="./assets/images/menu-options.png" alt="..." />
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav navbar-menu mr-md-auto order-2 order-md-1">
                            <li className="nav-item">
                                <a className="nav-link" href="#timeCine" onclick="scrollto('timeCine');">Lịch Chiếu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#cine-TimetoShow" onclick="scrollto('cine-TimetoShow');">Cụm rạp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#newsBlock" onclick="scrollto('newsBlock');">Tin Tức</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#appBlock" onclick="scrollto('appBlock');">Ứng dụng</a>
                            </li></ul>
                    </div>


                    <ul className="navbar-nav navbar-login align-items-center order-1 order-md-2">
                        <li className="nav-item">
                            <a className="nav-link border-right" href="#"><img className="nav-avatar mr-2" src="./assets/images/avatar.png" alt />Đăng
                                Nhập</a>
                        </li>
                        <li className="nav-item dropdown d-none d-md-block">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-map-marker-alt" /> Hồ Chí Minh
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Hồ Chí Minh</a>
                                <a className="dropdown-item" href="#">Hà Nội</a>
                                <a className="dropdown-item" href="#">Đà Nẵng</a>
                                <a className="dropdown-item" href="#">Hải Phòng</a>
                                <a className="dropdown-item" href="#">Hồ Chí Minh</a>
                                <a className="dropdown-item" href="#">Hà Nội</a>
                                <a className="dropdown-item" href="#">Đà Nẵng</a>
                                <a className="dropdown-item" href="#">Hải Phòng</a>
                                <a className="dropdown-item" href="#">Hồ Chí Minh</a>
                                <a className="dropdown-item" href="#">Hà Nội</a>
                                <a className="dropdown-item" href="#">Đà Nẵng</a>
                                <a className="dropdown-item" href="#">Hải Phòng</a>
                                <a className="dropdown-item" href="#">Hồ Chí Minh</a>
                                <a className="dropdown-item" href="#">Hà Nội</a>
                                <a className="dropdown-item" href="#">Đà Nẵng</a>
                                <a className="dropdown-item" href="#">Hải Phòng</a>
                            </div>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-close" id="close" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <i className="fas fa-chevron-right" />
                    </button>
                </nav>
            </header>
        )
    }
}
