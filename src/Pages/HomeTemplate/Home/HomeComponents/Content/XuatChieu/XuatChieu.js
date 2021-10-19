import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './XuatChieu.css';
import GioChieu from './GioChieu';

import { GROUP_ID } from '../../../../../../Util/Setting';
import { rapChieuAction, cumRapAction } from '../../../../../../Redux/Action/QuanLyXuatChieuAction';

export default function XuatChieu() {

    const { arrRap, arrCumRap_ChiTiet, arrDanhSachPhim } = useSelector(state => state.QuanLyXuatChieuReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const actionRapChieu = rapChieuAction();
        dispatch(actionRapChieu);
    }, [])
    document.addEventListener("DOMContentLoaded", () => {
        const actionCumRap = cumRapAction("", GROUP_ID);
        dispatch(actionCumRap);
    })
    const getCumRap = (data) => {
        const actionCumRap = cumRapAction(data, GROUP_ID);
        dispatch(actionCumRap);
    }
    const getDanhSachPhim = (maCumRap) => {
        dispatch({
            type: 'FIND_CUM_RAP_XUAT_CHIEU',
            maCumRap: maCumRap,
        })
    }



    const renderRapChieu = () => {
        return arrRap.map((value, index) => {
            if (index === 0) {
                return (
                    <a className="rap border-bottom active" onClick={() => { getCumRap(value.maHeThongRap) }} key={index}
                        data-toggle="pill" role="tab" aria-selected="true">
                        <div className="cine-logo"><img src={value.logo} alt="..." /></div>
                    </a>
                )
            } else {
                return (
                    <a className="rap border-bottom" onClick={() => { getCumRap(value.maHeThongRap) }} key={index}
                        data-toggle="pill" role="tab" aria-selected="false">
                        <div className="cine-logo"><img src={value.logo} alt="..." /></div>
                    </a>
                )
            }
        })
    }
    const renderCumRap = () => {
        return arrCumRap_ChiTiet.map((value, index) => {
            var maRap = value.maCumRap.slice(0, value.maCumRap.indexOf('-'));
            var tenRap = value.tenCumRap.slice(0, value.tenCumRap.indexOf('-'));
            var tenRapChiTiet = value.tenCumRap.slice(value.tenCumRap.indexOf('-'))
            if (index === 0) {
                return (
                    <div className="cineBox border-bottom active" key={index}
                        data-toggle="tab" aria-selected="true" role="tab">
                        <div className="img-tab-pane" onClick={() => { getDanhSachPhim(value.maCumRap) }}>
                            <img src={value.hinhAnh} className="img" alt="..." />
                        </div>
                        <div className="content">
                            <p onClick={() => { getDanhSachPhim(value.maCumRap) }}><b className={maRap}>{tenRap}</b><b className="tenRap"> {tenRapChiTiet}</b></p>
                            <span className="infoMovieCine" onClick={() => { getDanhSachPhim(value.maCumRap) }}>{value.diaChi}</span>
                            <a href="#">[chi tiết]</a>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="cineBox border-bottom" key={index}
                        data-toggle="tab" aria-selected="false" role="tab">
                        <div className="img-tab-pane" onClick={() => { getDanhSachPhim(value.maCumRap) }}>
                            <img src={value.hinhAnh} className="img" alt="..." />
                        </div>
                        <div className="content">
                            <p onClick={() => { getDanhSachPhim(value.maCumRap) }}><b className={maRap}>{tenRap}</b><b className="tenRap"> {tenRapChiTiet}</b></p>
                            <span className="infoMovieCine" onClick={() => { getDanhSachPhim(value.maCumRap) }}>{value.diaChi}</span>
                            <a href="#">[chi tiết]</a>
                        </div>
                    </div>
                )
            }
        })
    }
    const renderPhim = () => {
        if (arrDanhSachPhim.length !== 0)
            return arrDanhSachPhim.map((value, index) => {
                return (
                    <div className="mb-3 pb-3 border-bottom" key={index}>
                        <div className="film-box" data-toggle="collapse"
                            data-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                            <div className="d-flex">
                                <span className="film-img">
                                    <img src={value.hinhAnh} className="w-100" alt="..." />
                                </span>
                                <span className="film-name ml-2">
                                    <h6><b>{value.tenPhim}</b></h6>
                                </span>
                            </div>
                        </div>
                        {renderLichChieuTheoPhim(value.lstLichChieuTheoPhim, index)}
                    </div>
                )
            })
    }
    const renderLichChieuTheoPhim = (indexValue, index) => {
        var reggie = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
        var thisMonth = new Date().getMonth()
        var thisYear = new Date().getFullYear();
        var arrNew = []
        for (let i = 0; i < indexValue.length; i++) {
            var dateArray = reggie.exec(indexValue[i].ngayChieuGioChieu);
            if (dateArray[1] === `${thisYear}`) arrNew.push(indexValue[i])
            // && dateArray[2] === `${thisMonth + 1}`
        }
        return (
            <div id={`collapse${index}`} className="collapse collapse-box" data-parent="#accordionXuatChieu">
                <GioChieu arr={arrNew} />
            </div>
        )
    }



    return (
        <section id="cine-TimetoShow" className="container-lg my-5">
            <div className="card">
                <div className="row m-0">
                    <div className="col-12 col-md-1 p-0 border-right">
                        <div className="nav flex-column nav-pills" id="cine-pills-tab" role="tablist" aria-orientation="vertical">
                            {renderRapChieu()}
                        </div>
                    </div>
                    <div className="col-12 col-md-4 p-0 border-right">
                        <div className="nav nav-pills cumRap" id="cine-pills-tab-2" role="tablist" aria-orientation="vertical">
                            {renderCumRap()}
                        </div>
                    </div>
                    <div className="col-12 col-md-7 p-0">
                        <div id="cineContentShow" className="p-3">
                            {arrDanhSachPhim.length !== 0 ?
                                <div className="accordion" id="accordionXuatChieu">
                                    {renderPhim()}
                                </div> :
                                <p className="font-weight-bold text-center">Không có xuất chiếu</p>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
