import React, { Component, Fragment, useEffect } from 'react'
import 'antd/dist/antd.css';
import './Content.css';
import './Circle.css'
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinChiTietPhim } from '../../../../../Redux/Action/QuanLyXuatChieuAction';
import moment from 'moment';
import NavFilm from '../NavFilm/NavFilm.js'
import { Rate } from 'antd';

export default function Content(props) {


    
    const {filmDetail} = useSelector(state=>state.QuanLyPhimReducer)
    
    const dispatch = useDispatch()
    useEffect(()=>{
        
        //lấy thông tin param từ url
        let{id} = props

        dispatch(layThongTinChiTietPhim(id))
    },[])

        return (
            <Fragment>
            <section className="banner">
                <div className="banner_section">
                    <div style={{backgroundImage:`url(${filmDetail.hinhAnh})`,minHeight:'80vh',backgroundSize:'100%',backgroundPosition:'center',backgroundRepeat:'no-repeat'}} className="banner_all" />
                    <div className="playtrailer1">
                    <a className="venobox" data-vbtype="video" href={filmDetail.trailer}>
                            <img src="http://localhost:3000/assets/images/play-video.png" alt="..." />
                            
                        </a>
                    </div>
                    <div className="styleGardient" />
                    <div className="banner_detail banner_width d-flex">
                        <div className="col-sm-3">
                            <div style={{backgroundImage:`url(${filmDetail.hinhAnh})`,minHeight:'80vh',backgroundSize:'100%',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}  className="poster">
                                <a className="playtrailer showposter venobox" data-vbtype="video" href={filmDetail.trailer}>
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
                                   {filmDetail.hot ? <span className="banner_PH">HOT</span> : <span className="banner_P">N</span>} 
                                    <span className="banner_info1__detail">{filmDetail.tenPhim}</span>
                                </span>
                            </div>
                            <div className="banner_info2">
                                <span className="banner_detail1">120 phút - 0 IMDb - 2D/Digital</span>
                            </div>
                        </div>
                        <div className="col-sm-2 circle">
                            <div className="star">
                                <Rate disabled allowHalf value={filmDetail.danhGia/2}/>
                            </div>

                            <div className="clearfix">
                                <div className={`c100 p${filmDetail.danhGia *10} small green`}>
                                    <span>{filmDetail.danhGia *10}%</span>
                                    <div className="slice">
                                        <div className="bar"></div>
                                        <div className="fill"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="danhgia">
                                <span className="banner_detail1">166 người đánh giá</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <NavFilm filmDetail={filmDetail}/>
            </Fragment>
        )
    }



 