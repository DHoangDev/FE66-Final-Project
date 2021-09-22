import React, { Component } from 'react'

import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer_width">
                <div className="wrap-width">
                    <div className="row">
                        <div className="col-12 col-sm-4 col-lg-4 center">
                            <p className="footer_title">TIX</p>
                            <div className="row">
                                <div className="col-12 col-lg-6 footer_tittle__detail">
                                    <a href="#">FAQ</a>
                                    <a href="#">Brand Guidelines</a>
                                </div>
                                <div className="col-12 col-lg-6 footer_tittle__detail">
                                    <a href="#">Thỏa thuận sử dụng</a>
                                    <a href="#">Chính sách bảo mật</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4 center">
                            <p className="footer_title">ĐỐI TÁC</p>
                            <div className="row">
                                <div className="col-sm-12 col-lg-12 footer_item">
                                    <a href="#"><img className="bgc" src="./assets/images/cgv.png" alt /></a>
                                    <a href="#"><img src="./assets/images/bhd.png" alt /></a>
                                    <a href="#"><img src="./assets/images/galaxycine.png" alt /></a>
                                    <a href="#"><img src="./assets/images/cinestar.png" alt /></a>
                                    <a href="#"><img src="./assets/images/404b8c4b80d77732e7426cdb7e24be20.png" alt /></a>
                                </div>
                                <div className="col-sm-12 col-lg-12 footer_item">
                                    <a href="#"><img src="./assets/images/megags.png" alt /></a>
                                    <a href="#"><img src="./assets/images/bt.jpg" alt /></a>
                                    <a href="#"><img src="./assets/images/dongdacinema.png" alt /></a>
                                    <a href="#"><img src="./assets/images/TOUCH.png" alt /></a>
                                    <a href="#"><img src="./assets/images/cnx.jpg" alt /></a>
                                </div>
                                <div className="col-sm-12 col-lg-12 footer_item">
                                    <a href="#"><img src="./assets/images/STARLIGHT.png" alt /></a>
                                    <a href="#"><img src="./assets/images/dcine.png" alt /></a>
                                    <a href="#"><img src="./assets/images/zalopay_icon.png" alt /></a>
                                    <a href="#"><img src="./assets/images/payoo.jpg" alt /></a>
                                    <a href="#"><img src="./assets/images/VCB.png" alt /></a>
                                </div>
                                <div className="col-sm-12 col-lg-12 footer_item">
                                    <a href="#"><img src="./assets/images/AGRIBANK.png" alt /></a>
                                    <a href="#"><img src="./assets/images/VIETTINBANK.png" alt /></a>
                                    <a href="#"><img src="./assets/images/IVB.png" alt /></a>
                                    <a href="#"><img src="./assets/images/123go.png" alt /></a>
                                    <a href="#"><img src="./assets/images/laban.png" alt /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4 center">
                            <div className="row">
                                <div className="col-sm-6 text-center footer_card">
                                    <p className="footer_title">MOBILE APP</p>
                                    <a href="#"><img src="./assets/images/apple-logo.png" alt /></a>
                                    <a href="#"><img src="./assets/images/android-logo.png" alt /></a>
                                </div>
                                <div className="col-sm-6 text-center footer_card">
                                    <p className="footer_title">SOCIAL</p>
                                    <a href="#"><img src="./assets/images/facebook-logo.png" alt /></a>
                                    <a href="#"><img src="./assets/images/zalo-logo.png" alt /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="hrfooter" />
                    <div className="row footer-company">
                        <div className="col-12 col-md-2 col-lg-1">
                            <img style={{ borderRadius: 8 }} className="footer_img" src="./assets/images/zion-logo.jpg" alt />
                        </div>
                        <div className="col-12 col-md-8 col-lg-9 info_footer">
                            <span style={{ color: '#fff' }}>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
                            <span>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</span>
                            <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783, <br />
                                đăng ký thay đổi lần&nbsp;thứ&nbsp;30, ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
                                Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí Minh cấp.
                            </span>
                            <span>Số Điện Thoại (Hotline): 1900 545 436
                                <br /> Email: <a style={{ color: '#FB4226', textDecoration: 'none' }} href="#">support@tix.vn</a>
                            </span>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2">
                            <img className="footer_img2" src="./assets/images/d1e6bd560daa9e20131ea8a0f62e87f8.png" alt />
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
