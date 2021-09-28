import React, { Component } from 'react'

import './Tintuc.css';

export default class Tintuc extends Component {
    render() {
        return (
            <section id="newsBlock" className="container-lg my-5">
                <nav>
                    <div className="nav nav-tabs align-items-end" id="nav-tab-2" role="tablist">
                        <a className="nav-link ml-auto active" id="nav-cine-tab" data-toggle="tab" href="#nav-cine" role="tab" aria-controls="nav-cine" aria-selected="true">Điện Ảnh 24h</a>
                        <a className="nav-link" id="nav-review-tab" data-toggle="tab" href="#nav-review" role="tab" aria-controls="nav-review" aria-selected="false">Review</a>
                        <a className="nav-link mr-auto" id="nav-combo-tab" data-toggle="tab" href="#nav-combo" role="tab" aria-controls="nav-combo" aria-selected="false">Khuyến Mãi</a>
                    </div>
                </nav>
                <div className="tab-content mt-3" id="nav-tab-2Content">
                    <div className="tab-pane fade show active" id="nav-cine" role="tabpanel" aria-labelledby="nav-cine-tab">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="newsContent">
                                    <img className="w-100 rounded" src="./assets/images/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png" alt />
                                    <a href="#">Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</a>
                                    <p className="text-light">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ
                                    </p>
                                    <div className="reaction d-flex">
                                        <span className="like mr-2">
                                            <a href="#" className="text-light"><i className="far fa-thumbs-up" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                        <span className="comments">
                                            <a href="#" className="text-light"><i className="far fa-comment-alt" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="newsContent">
                                    <img className="w-100 rounded" src="./assets/images/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png" alt />
                                    <a href="#">Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</a>
                                    <p className="text-light">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ
                                    </p>
                                    <div className="reaction d-flex">
                                        <span className="like mr-2">
                                            <a href="#" className="text-light"><i className="far fa-thumbs-up" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                        <span className="comments">
                                            <a href="#" className="text-light"><i className="far fa-comment-alt" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="newsContent">
                                    <img className="w-100 rounded" src="./assets/images/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png" alt />
                                    <a href="#">Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</a>
                                    <p className="text-light">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ
                                    </p>
                                    <div className="reaction d-flex">
                                        <span className="like mr-2">
                                            <a href="#" className="text-light"><i className="far fa-thumbs-up" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                        <span className="comments">
                                            <a href="#" className="text-light"><i className="far fa-comment-alt" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="newsContent">
                                    <img className="w-100 rounded" src="./assets/images/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png" alt />
                                    <a href="#">Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</a>
                                    <p className="text-light">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ
                                    </p>
                                    <div className="reaction d-flex">
                                        <span className="like mr-2">
                                            <a href="#" className="text-light"><i className="far fa-thumbs-up" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                        <span className="comments">
                                            <a href="#" className="text-light"><i className="far fa-comment-alt" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="news">
                                            <span className="img"><img className="w-100" src="./assets/images/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg" alt /></span>
                                            <span className="link"><a href="#">
                                                Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                                            </a></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="news">
                                            <span className="img"><img className="w-100" src="./assets/images/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png" alt /></span>
                                            <span className="link"><a href="#">
                                                Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                                            </a></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="news">
                                            <span className="img"><img className="w-100" src="./assets/images/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png" alt /></span>
                                            <span className="link"><a href="#">
                                                Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu
                                            </a></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="news">
                                            <span className="img"><img className="w-100" src="./assets/images/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg" alt /></span>
                                            <span className="link"><a href="#">
                                                Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                                            </a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navShowmore text-center mt-2">
                            <button className="btn">XEM THÊM</button>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="newsContent">
                                    <img className="w-100 rounded" src="./assets/images/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png" alt />
                                    <a href="#">Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</a>
                                    <p className="text-light">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ
                                    </p>
                                    <div className="reaction d-flex">
                                        <span className="like mr-2">
                                            <a href="#" className="text-light"><i className="far fa-thumbs-up" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                        <span className="comments">
                                            <a href="#" className="text-light"><i className="far fa-comment-alt" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="newsContent">
                                    <img className="w-100 rounded" src="./assets/images/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png" alt />
                                    <a href="#">Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</a>
                                    <p className="text-light">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ
                                    </p>
                                    <div className="reaction d-flex">
                                        <span className="like mr-2">
                                            <a href="#" className="text-light"><i className="far fa-thumbs-up" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                        <span className="comments">
                                            <a href="#" className="text-light"><i className="far fa-comment-alt" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="newsContent">
                                    <img className="w-100 rounded" src="./assets/images/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png" alt />
                                    <a href="#">Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</a>
                                    <p className="text-light">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ
                                    </p>
                                    <div className="reaction d-flex">
                                        <span className="like mr-2">
                                            <a href="#" className="text-light"><i className="far fa-thumbs-up" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                        <span className="comments">
                                            <a href="#" className="text-light"><i className="far fa-comment-alt" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="newsContent">
                                    <img className="w-100 rounded" src="./assets/images/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png" alt />
                                    <a href="#">Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</a>
                                    <p className="text-light">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ
                                    </p>
                                    <div className="reaction d-flex">
                                        <span className="like mr-2">
                                            <a href="#" className="text-light"><i className="far fa-thumbs-up" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                        <span className="comments">
                                            <a href="#" className="text-light"><i className="far fa-comment-alt" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="news">
                                            <span className="img"><img className="w-100" src="./assets/images/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg" alt /></span>
                                            <span className="link"><a href="#">
                                                Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                                            </a></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="news">
                                            <span className="img"><img className="w-100" src="./assets/images/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png" alt /></span>
                                            <span className="link"><a href="#">
                                                Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                                            </a></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="news">
                                            <span className="img"><img className="w-100" src="./assets/images/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png" alt /></span>
                                            <span className="link"><a href="#">
                                                Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu
                                            </a></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="news">
                                            <span className="img"><img className="w-100" src="./assets/images/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg" alt /></span>
                                            <span className="link"><a href="#">
                                                Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                                            </a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navShowmore text-center mt-2">
                            <button className="btn">XEM THÊM</button>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-combo" role="tabpanel" aria-labelledby="nav-combo-tab">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="newsContent">
                                    <img className="w-100 rounded" src="./assets/images/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png" alt />
                                    <a href="#">Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</a>
                                    <p className="text-light">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ
                                    </p>
                                    <div className="reaction d-flex">
                                        <span className="like mr-2">
                                            <a href="#" className="text-light"><i className="far fa-thumbs-up" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                        <span className="comments">
                                            <a href="#" className="text-light"><i className="far fa-comment-alt" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="newsContent">
                                    <img className="w-100 rounded" src="./assets/images/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png" alt />
                                    <a href="#">Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</a>
                                    <p className="text-light">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ
                                    </p>
                                    <div className="reaction d-flex">
                                        <span className="like mr-2">
                                            <a href="#" className="text-light"><i className="far fa-thumbs-up" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                        <span className="comments">
                                            <a href="#" className="text-light"><i className="far fa-comment-alt" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="newsContent">
                                    <img className="w-100 rounded" src="./assets/images/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png" alt />
                                    <a href="#">Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</a>
                                    <p className="text-light">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ
                                    </p>
                                    <div className="reaction d-flex">
                                        <span className="like mr-2">
                                            <a href="#" className="text-light"><i className="far fa-thumbs-up" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                        <span className="comments">
                                            <a href="#" className="text-light"><i className="far fa-comment-alt" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="newsContent">
                                    <img className="w-100 rounded" src="./assets/images/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png" alt />
                                    <a href="#">Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</a>
                                    <p className="text-light">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ
                                    </p>
                                    <div className="reaction d-flex">
                                        <span className="like mr-2">
                                            <a href="#" className="text-light"><i className="far fa-thumbs-up" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                        <span className="comments">
                                            <a href="#" className="text-light"><i className="far fa-comment-alt" /></a>
                                            <p className="text-light">0</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="news">
                                            <span className="img"><img className="w-100" src="./assets/images/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg" alt /></span>
                                            <span className="link"><a href="#">
                                                Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                                            </a></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="news">
                                            <span className="img"><img className="w-100" src="./assets/images/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png" alt /></span>
                                            <span className="link"><a href="#">
                                                Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                                            </a></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="news">
                                            <span className="img"><img className="w-100" src="./assets/images/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png" alt /></span>
                                            <span className="link"><a href="#">
                                                Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu
                                            </a></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="news">
                                            <span className="img"><img className="w-100" src="./assets/images/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg" alt /></span>
                                            <span className="link"><a href="#">
                                                Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                                            </a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navShowmore text-center mt-2">
                            <button className="btn">XEM THÊM</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
