import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './XuatChieu.css';

import { GROUP_ID } from '../../../../../../Util/Setting';
import { rapChieuAction, cumRapAction, lichChieuAction } from '../../../../../../Redux/Action/QuanLyXuatChieuAction';

export default function XuatChieu() {

    const { arrRap, arrCumRap, arrCumRap_ChiTiet, arrLichChieu } = useSelector(state => state.QuanLyXuatChieuReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const actionRapChieu = rapChieuAction();
        dispatch(actionRapChieu);
    }, [])

    document.addEventListener("DOMContentLoaded", () => {
        const actionCumRap = cumRapAction("", GROUP_ID);
        dispatch(actionCumRap);
        // const actionLichChieu = lichChieuAction(arrRap[0].maHeThongRap, '', GROUP_ID);
        // dispatch(actionLichChieu);
    })

    const getCumRap = (data) => {
        const actionCumRap = cumRapAction(data, GROUP_ID);
        dispatch(actionCumRap);
    }

    const getLichChieu = (data, maCumRap) => {
        const actionLichChieu = lichChieuAction(data, maCumRap, GROUP_ID);
        dispatch(actionLichChieu);
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
                        <div className="img-tab-pane" onClick={() => { getLichChieu(arrCumRap.maHeThongRap, value.maCumRap) }}>
                            <img src={value.hinhAnh} className="img" alt="..." />
                        </div>
                        <div className="content">
                            <p onClick={() => { getLichChieu(arrCumRap.maHeThongRap, value.maCumRap) }}><b className={maRap}>{tenRap}</b><b className="tenRap"> {tenRapChiTiet}</b></p>
                            <span className="infoMovieCine" onClick={() => { getLichChieu(arrCumRap.maHeThongRap, value.maCumRap) }}>{value.diaChi}</span>
                            <a href="#">[chi tiết]</a>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="cineBox border-bottom" key={index}
                        data-toggle="tab" aria-selected="false" role="tab">
                        <div className="img-tab-pane" onClick={() => { getLichChieu(arrCumRap.maHeThongRap, value.maCumRap) }}>
                            <img src={value.hinhAnh} className="img" alt="..." />
                        </div>
                        <div className="content">
                            <p onClick={() => { getLichChieu(arrCumRap.maHeThongRap, value.maCumRap) }}><b className={maRap}>{tenRap}</b><b className="tenRap"> {tenRapChiTiet}</b></p>
                            <span className="infoMovieCine" onClick={() => { getLichChieu(arrCumRap.maHeThongRap, value.maCumRap) }}>{value.diaChi}</span>
                            <a href="#">[chi tiết]</a>
                        </div>
                    </div>
                )
            }
        })
    }

    const renderLichChieu = () => {
        console.log(arrLichChieu)
        // return arrLichChieu.map((value, index) => {

        // })
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
                        <div id="cineContentShow" className="p-3 text-center">
                            <p className="font-weight-bold">Không có xuất chiếu</p>
                            <div>{renderLichChieu()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
