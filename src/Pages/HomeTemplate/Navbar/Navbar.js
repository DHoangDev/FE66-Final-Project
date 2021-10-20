import React, { Component } from 'react'

import UserLogin from '../Login/UserLogin';
import './Navbar.css';

export default class Navbar extends Component {
    render() {

        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll('header .navbar a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.scroll({ top: document.querySelector(this.getAttribute('href')).offsetTop - 70, behavior: 'smooth' });
                });
            });
        });

        return (
            <header>
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand p-0" href="/#">
                        <img className="w-50" src="http://localhost:3000/assets/images/web-logo.png" alt="..." />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <img className=" w-100" src="http://localhost:3000/assets/images/menu-options.png" alt="..." />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav navbar-menu mr-md-auto order-2 order-lg-1">
                            <li className="nav-item">
                                <a className="nav-link" href="#timeCine" >Lịch Chiếu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#cine-TimetoShow" >Cụm rạp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#newsBlock" >Tin Tức</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#appBlock" >Ứng dụng</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar-login align-items-center order-1 order-lg-2">
                            <UserLogin />
                            <li className="nav-item dropdown d-none d-lg-block">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-map-marker-alt" /> Hồ Chí Minh
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                    </div>
                </nav>
            </header>
        )
    }
}
