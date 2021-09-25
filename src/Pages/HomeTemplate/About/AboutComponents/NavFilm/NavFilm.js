import React, { Component } from 'react'

import './NavFilm.css';

export default class NavFilm extends Component {
    render() {
        return (
            <section id="nav">
                <div className="nav_width">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="pill" href="#thongtin">Thông Tin</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#danhgia">Đánh Giá</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane container active" id="thongtin">
                            <div className="row tab_detail">
                                <div className="col-sm-6 col-xs-12 film_left">
                                    <div className="row filmleft_info">
                                        <p className="filmleft_title1">Ngày công chiếu</p>
                                        <p className="filmleft_title2">30.04.2021</p>
                                    </div>
                                    <div className="row filmleft_info">
                                        <p className="filmleft_title1">Đạo diễn</p>
                                        <p className="filmleft_title2">Phan Gia Nhật Linh</p>
                                    </div>
                                    <div className="row filmleft_info">
                                        <p className="filmleft_title1">Diễn viên</p>
                                        <p className="filmleft_title2">Phan Gia Nhật Linh</p>
                                    </div>
                                    <div className="row filmleft_info">
                                        <p className="filmleft_title1">Thể Loại</p>
                                        <p className="filmleft_title2">Hài hước</p>
                                    </div>
                                    <div className="row filmleft_info">
                                        <p className="filmleft_title1">Định dạng</p>
                                        <p className="filmleft_title2">2D/Digital</p>
                                    </div>
                                    <div className="row filmleft_info">
                                        <p className="filmleft_title1">Quốc Gia SX</p>
                                        <p className="filmleft_title2">Việt Nam</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xs-12 film_right">
                                    <div className="row filmleft_info">
                                        <p className="filmleft_title1">Nội dung</p>
                                    </div>
                                    <div className="row filmleft_info">
                                        <p className="filmleft_decription">Trạng Tí chuyển thể từ truyện tranh nổi tiếng Thần đồng đất Việt, xoay
                                            quanh
                                            Tí - cậu bé thông minh, láu lỉnh. Cùng các bạn Sửu, Dần, Mẹo, cậu nhiều lần giúp triều đình thoát khỏi
                                            các tình huống nguy hiểm, chống lại ngoại bang</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane container fade" id="danhgia">
                            <div className="nav_review">
                                <div className="row tab_detail">
                                    <div className="col-sm-12 col-xs-12 nav_input">
                                        <span className="imgReview">
                                            <img src="./assets/images/avatar.png" alt="..." />
                                        </span>
                                        <input className="inputreview" type="text" placeholder="Bạn nghĩ gì về phim này?" readOnly="readonly" />
                                        <span className="imgReviewstar">
                                            <img src="./assets/images/listStar.png" alt="..." />
                                        </span>
                                    </div>
                                </div>
                                <div className="nav-listcomment">
                                    <div className="row tab_detail reviewcontain">
                                        <div className="reviewcontain_comment">
                                            <div className="reviewcontain_userinfo">
                                                <div className="inforeview">
                                                    <div className="inforeviewicon">
                                                        <img src="./assets/images/111c5808618969de941fed35348111be.jpg" alt="..." />
                                                    </div>
                                                    <div className="inforeviewname">
                                                        <p>Sói Cô Đơn</p>
                                                        <p className="inforeviewtime"> 8 giờ trước</p>
                                                    </div>
                                                </div>
                                                <div className="infostar">
                                                    <div className="core">
                                                        <p>10</p>
                                                    </div>
                                                    <div className="info_iconstar">
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reviewmain_comment">
                                                <div className="reviewcontain_usercomment">
                                                    Hay qua hjhj haha jhgausks
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 count">
                                                    <div className="iconlike">
                                                        <img src="./assets/images/like.png" alt="..." />
                                                        <span className="amount like">
                                                            <strong>0</strong> Thích
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row tab_detail reviewcontain">
                                        <div className="reviewcontain_comment">
                                            <div className="reviewcontain_userinfo">
                                                <div className="inforeview">
                                                    <div className="inforeviewicon">
                                                        <img src="./assets/images/5fd79d9cac62feeb075ae11430416bbf.jpg" alt="..." />
                                                    </div>
                                                    <div className="inforeviewname">
                                                        <p>Huynhhieu</p>
                                                        <p className="inforeviewtime"> 1 ngày trước</p>
                                                    </div>
                                                </div>
                                                <div className="infostar">
                                                    <div className="core">
                                                        <p>10</p>
                                                    </div>
                                                    <div className="info_iconstar">
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reviewmain_comment">
                                                <div className="reviewcontain_usercomment">
                                                    Xem thử mới biết nhé
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 count">
                                                    <div className="iconlike">
                                                        <img src="./assets/images/like.png" alt="..." />
                                                        <span className="amount like">
                                                            <strong>0</strong> Thích
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row tab_detail reviewcontain">
                                        <div className="reviewcontain_comment">
                                            <div className="reviewcontain_userinfo">
                                                <div className="inforeview">
                                                    <div className="inforeviewicon">
                                                        <img src="./assets/images/153e0aa4708af0bac63e12b5592d330b.jpg" alt="..." />
                                                    </div>
                                                    <div className="inforeviewname">
                                                        <p>Mai Nha</p>
                                                        <p className="inforeviewtime"> 1 ngày trước</p>
                                                    </div>
                                                </div>
                                                <div className="infostar">
                                                    <div className="core">
                                                        <p>8</p>
                                                    </div>
                                                    <div className="info_iconstar">
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reviewmain_comment">
                                                <div className="reviewcontain_usercomment">
                                                    Phim hay ko mọi người
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 count">
                                                    <div className="iconlike">
                                                        <img src="./assets/images/like.png" alt="..." />
                                                        <span className="amount like">
                                                            <strong>0</strong> Thích
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row tab_detail reviewcontain">
                                        <div className="reviewcontain_comment">
                                            <div className="reviewcontain_userinfo">
                                                <div className="inforeview">
                                                    <div className="inforeviewicon">
                                                        <img src="./assets/images/1650d6a4f08e9bbe9afe7bcd26d6c137.jpg" alt="..." />
                                                    </div>
                                                    <div className="inforeviewname">
                                                        <p>Bất Hạnh Lắm Bạn Ơi</p>
                                                        <p className="inforeviewtime"> 2 ngày trước</p>
                                                    </div>
                                                </div>
                                                <div className="infostar">
                                                    <div className="core">
                                                        <p>10</p>
                                                    </div>
                                                    <div className="info_iconstar">
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reviewmain_comment">
                                                <div className="reviewcontain_usercomment">
                                                    OK rất tốt rat hữu ich
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 count">
                                                    <div className="iconlike">
                                                        <img src="./assets/images/like.png" alt="..." />
                                                        <span className="amount like">
                                                            <strong>0</strong> Thích
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row tab_detail reviewcontain">
                                        <div className="reviewcontain_comment">
                                            <div className="reviewcontain_userinfo">
                                                <div className="inforeview">
                                                    <div className="inforeviewicon">
                                                        <img src="./assets/images/93a7052a103a9cf4723a55dac2d500ce.jpg" alt="..." />
                                                    </div>
                                                    <div className="inforeviewname">
                                                        <p>Phương</p>
                                                        <p className="inforeviewtime"> 3 ngày trước</p>
                                                    </div>
                                                </div>
                                                <div className="infostar">
                                                    <div className="core">
                                                        <p>10</p>
                                                    </div>
                                                    <div className="info_iconstar">
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                        <img className="smallstar" src="./assets/images/star1.png" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reviewmain_comment">
                                                <div className="reviewcontain_usercomment">
                                                    Tôi chưa xem nhưng vẫn cho 5sao
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 count">
                                                    <div className="iconlike">
                                                        <img src="./assets/images/like.png" alt="..." />
                                                        <span className="amount like">
                                                            <strong>0</strong> Thích
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-xemthem text-center">
                                <button className="btnViewMore">XEM THÊM</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
