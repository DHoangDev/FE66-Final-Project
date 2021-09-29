import React, { Component, useEffect } from 'react'

import './Content.css';
import './Circle.css'
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinChiTietPhim } from '../../../../../Redux/Action/QuanLyXuatChieuAction';
import moment from 'moment'

export default function Content(props) {

    const {filmDetail} = useSelector(state=>state.QuanLyPhimReducer)
    console.log({filmDetail})
    const dispatch = useDispatch()
    useEffect(()=>{
        //lấy thông tin param từ url
        let{id} = props

        dispatch(layThongTinChiTietPhim(id))
    },[])

        return (
            <section className="banner">
                <div className="banner_section">
                    <div style={{backgroundImage:`url(${filmDetail.hinhAnh})`,minHeight:'80vh',backgroundSize:'100%',backgroundPosition:'center',backgroundRepeat:'no-repeat'}} className="banner_all" />
                    <div className="playtrailer1">
                        <a className="venobox" data-vbtype="video" href="https://youtu.be/sx1ROHCmY-4">
                            <img src="http://localhost:3000/assets/images/play-video.png" alt="..." />
                        </a>
                    </div>
                    <div className="styleGardient" />
                    <div className="banner_detail banner_width d-flex">
                        <div className="col-sm-3">
                            <div style={{backgroundImage:`url(${filmDetail.hinhAnh})`,minHeight:'80vh',backgroundSize:'100%',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}  className="poster">
                                <a className="playtrailer showposter venobox" data-vbtype="video" href="https://youtu.be/sx1ROHCmY-4">
                                    <img width='75%' src="http://localhost:3000/assets/images/play-video.png" alt="..." />
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-5 banner_info">
                            <div>
                                <span className="banner_detail1">{moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</span>
                                <br />
                            </div>
                            <div className="banner_content">
                                <span className="banner_info1">
                                   {filmDetail.hot ? <span className="banner_PH">P</span> : <span className="banner_P">P</span>} 
                                    <span className="banner_info1__detail">{filmDetail.tenPhim}</span>
                                </span>
                            </div>
                            <div className="banner_info2">
                                <span className="banner_detail1">100 phút - 0 IMDb - 2D/Digital</span>
                            </div>
                        </div>
                        <div className="col-sm-2 circle">
                            <div className="br" />
                            <div className="clearfix">
                                <div className={`c100 p${filmDetail.danhGia *10} small green`}>
                                    <span>{filmDetail.danhGia *10}%</span>
                                    <div className="slice">
                                        <div className="bar"></div>
                                        <div className="fill"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="star">
                                <img className="star_icon" src="./assets/images/star1.png" alt="..." />
                                <img className="star_icon" src="./assets/images/star1.png" alt="..." />
                                <img className="star_icon" src="./assets/images/star1.png" alt="..." />
                                <img className="star_icon" src="./assets/images/star1.2.png" alt="..." />
                            </div>
                            <div className="danhgia">
                                <span className="banner_detail1">166 người đánh giá</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }



 