import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import './NavFilm.css';
import { Tabs } from 'antd';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const { TabPane } = Tabs;
export default function NavFilm(props) {
    const [screen,setScreen] = useState('top')
    const { filmDetail } = props;
    console.log('props', props)
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    //   const width  = window.innerWidth || document.documentElement.clientWidth || 
    //   document.body.clientWidth;
    //   const height = window.innerHeight|| document.documentElement.clientHeight|| 
    //   document.body.clientHeight;
      
    //   if(width <= 790){
    //         setScreen({
    //             screen:'top'
    //         })
    //   }
    
    return (
        <section id="nav">
            <div className="nav_width">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#lichchieu">Lịch chiếu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " data-toggle="pill" href="#thongtin">Thông Tin</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#danhgia">Đánh Giá</a>
                    </li>

                </ul>
                <div className="tab-content">
                    <div className="tab-pane container tabs active" id="lichchieu">
                        
                       <Tabs tabPosition={screen} className="bg-white py-3 rounded rpsPane" centered>
                            {filmDetail.heThongRapChieu?.map((rc, index) => {
                                return <TabPane tab={<div className="d-flex rpsPane1" >
                                    <img src={rc.logo} width={70} height={70} alt='' />
                                </div>} key={index}>

                                    <Tabs tabPosition={'left'} className="py-3 rounded background-tab rpsTab">
                                        {rc.cumRapChieu?.map((cumRap, index) => {
                                            var tenRap = cumRap.tenCumRap.slice(0, cumRap.tenCumRap.indexOf('-'));
                                            var tenRapChiTiet = cumRap.tenCumRap.slice(cumRap.tenCumRap.indexOf('-'))

                                            return <TabPane key={index} tab={<div className="mt-3">
                                                <div className="d-flex">
                                                    <img width={55} height={55} src={cumRap.hinhAnh} alt='' />
                                                    <div className="ml-2 text-left">
                                                        <p className="text-2xl" style={{ width: '30vh' }}>
                                                            <div className="tenRap-tab"><b style={{ color: '#fd7d03c7' }}>{tenRap}</b>
                                                                <b>{tenRapChiTiet}</b></div>
                                                            <i className="infoMovieCine">{cumRap.diaChi}</i>
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                            }>
                                                {/* <Tabs className="bg-white py-3 rounded"> */}
                                                {/* return <TabPane key={index} tab={<div className="font-weight-bold">
                                                             ngày đặt phim
                                                            {lich.tenRap}</div>}> */}
                                                <div className="d-flex">
                                                    <img width={100} height={100} src={filmDetail.hinhAnh} alt='' />
                                                    <div className="banner_content mt-4 ml-3 ">
                                                        <div className="banner_info1">
                                                            {filmDetail.hot ? <span className="banner_PH">HOT</span> : <span className="banner_P">N</span>}
                                                            <b className="banner_info1__detail">{filmDetail.tenPhim}</b>
                                                            <i style={{ display: 'block', fontSize: '14px' }}>120 phút - 0 IMDb - 2D/Digital</i>
                                                        </div>


                                                    </div>

                                                </div>
                                                <div className="d-flex mt-3">
                                                    {/* giờ đặt phim */}
                                                    {cumRap.lichChieuPhim?.slice(0, 4).map((lc, index) => {
                                                        return <NavLink className="hour-tab col-3" to={`/BookingTicket/${lc.maLichChieu}`} key={index} >
                                                            {moment(lc.ngayChieuGioChieu)?.format('hh:mm A')}
                                                        </NavLink>
                                                    })}
                                                </div>

                                                {/* </TabPane> */}

                                                {/* </Tabs> */}
                                            </TabPane>
                                        })}


                                    </Tabs>

                                </TabPane>
                            })}
                        </Tabs>
                       
                    </div>
                    <div className="tab-pane container" id="thongtin">
                        <div className="row tab_detail">
                            <div className="col-sm-6 col-xs-12 film_left">
                                <div className="row filmleft_info">
                                    <p className="filmleft_title1">Ngày công chiếu</p>
                                    <p className="filmleft_title2">{moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
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
                                    <p className="filmleft_decription">{filmDetail.moTa}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="danhgia">
                        <div className="nav_review">
                            <div className="row tab_detail">
                                <div className="col-sm-12 col-xs-12 nav_input">
                                    <span className="imgReview">
                                        <img src="http://localhost:3000/assets/images/avatar.png" alt="..." />
                                    </span>
                                    <input className="inputreview" type="text" placeholder="Bạn nghĩ gì về phim này?" readOnly="readonly" />
                                    <span className="imgReviewstar">
                                        <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={24}
                                            isHalf={true}
                
                                            activeColor="#ffd700"
                                        />,
                                    </span>
                                </div>
                            </div>
                            <div className="nav-listcomment">
                                <div className="row tab_detail reviewcontain">
                                    <div className="reviewcontain_comment">
                                        <div className="reviewcontain_userinfo">
                                            <div className="inforeview">
                                                <div className="inforeviewicon">
                                                    <img src="http://localhost:3000/assets/images/111c5808618969de941fed35348111be.jpg" alt="..." />
                                                </div>
                                                <div className="inforeviewname">
                                                    <p>Sói Cô Đơn</p>
                                                    <p className="inforeviewtime"> 8 giờ trước</p>
                                                </div>
                                            </div>
                                            <div className="infostar">
                                                <div className="core">
                                                    <p>{filmDetail.danhGia}</p>
                                                </div>
                                                <div className="info_iconstar">
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
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
                                                    <img src="http://localhost:3000/assets/images/like.png" alt="..." />
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
                                                    <img src="http://localhost:3000/assets/images/5fd79d9cac62feeb075ae11430416bbf.jpg" alt="..." />
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
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
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
                                                    <img src="http://localhost:3000/assets/images/like.png" alt="..." />
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
                                                    <img src="http://localhost:3000/assets/images/153e0aa4708af0bac63e12b5592d330b.jpg" alt="..." />
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
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
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
                                                    <img src="http://localhost:3000/assets/images/like.png" alt="..." />
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
                                                    <img src="http://localhost:3000/assets/images/1650d6a4f08e9bbe9afe7bcd26d6c137.jpg" alt="..." />
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
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
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
                                                    <img src="http://localhost:3000/assets/images/like.png" alt="..." />
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
                                                    <img src="http://localhost:3000/assets/images/93a7052a103a9cf4723a55dac2d500ce.jpg" alt="..." />
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
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
                                                    <img className="smallstar" src="http://localhost:3000/assets/images/star1.png" alt="..." />
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
                                                    <img src="http://localhost:3000/assets/images/like.png" alt="..." />
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
