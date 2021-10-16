import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';

import './MuaVe.css';

import { USER_LOGIN, GROUP_ID } from '../../../../../../Util/Setting';
import { phimAction } from '../../../../../../Redux/Action/PhimAction';
import { layThongTinPhimDatVe } from '../../../../../../Redux/Action/QuanLyDatVeAction';

export default function MuaVe() {

    const { arrPhim } = useSelector(state => state.QuanLyPhimReducer)
    const { cumRapDangChieu, rapDangChieu, lichChieu } = useSelector(state => state.QuanLyDatVeReducer);
    const [xuatChieu, setXuatChieu] = useState('');
    const [maLichChieu, setMaLichChieu] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(phimAction(GROUP_ID))
    }, [])

    const renderPhim = () => {
        return arrPhim.map((value, index) => {
            if (value.dangChieu === true) {
                return <option value={value.maPhim} key={index} style={{ color: 'green' }}>{value.tenPhim}</option>
            } else {
                if (value.sapChieu === true) {
                    return <option value={value.maPhim} key={index} style={{ color: 'red' }}>{value.tenPhim}</option>
                } else {
                    return <option value={value.maPhim} key={index}>{value.tenPhim}</option>
                }
            }
        })
    }
    const renderRapChieu = () => {
        return cumRapDangChieu.map((value, index) => {
            return <option value={value.maHeThongRap} key={index}>{value.tenHeThongRap}</option>
        })
    }
    const renderCumRapChieu = () => {
        return rapDangChieu.map((value, index) => {
            return <option value={value.maCumRap} key={index}>{value.tenCumRap}</option>
        })
    }
    const renderNgayXem = () => {
        var reggie_1 = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
        var reggie_2 = /(\d{2})-(\d{2})-(\d{4})/;
        var arrNgayChieu = [];
        if (lichChieu) {
            for (let i = 0; i < lichChieu.length; i++) {
                let dateString = lichChieu[i].ngayChieuGioChieu;
                var dateArray_1 = reggie_1.exec(dateString);
                let value = arrNgayChieu.findIndex(value => value === `${dateArray_1[3]}-${dateArray_1[2]}-${dateArray_1[1]}`)
                if (value === -1) arrNgayChieu.push(`${dateArray_1[3]}-${dateArray_1[2]}-${dateArray_1[1]}`)
            }
        }
        return arrNgayChieu.map((value, index) => {
            var dateArray_2 = reggie_2.exec(value);
            return <option value={`${dateArray_2[3]}-${dateArray_2[2]}-${dateArray_2[1]}`}
                key={index}>{dateArray_2[0]}</option>
        })
    }
    const renderXuatChieu = () => {
        if (xuatChieu)
            return xuatChieu.map((value, index) => {
                let dateString = value.ngayChieuGioChieu, reggie = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
                var dateArray = reggie.exec(dateString);
                return <option value={value.ngayChieuGioChieu}
                    key={index}>{dateArray[4]}:{dateArray[5]}:{dateArray[6]}</option>
            })
    }




    const phimSelectChange = (data) => {
        dispatch(layThongTinPhimDatVe(data.target.value))
        setXuatChieu('')
        setMaLichChieu('')
        if (document.getElementById('rap').selectedIndex !== 0) {
            document.getElementById('rap').selectedIndex = 0
            document.getElementById('cumRap').selectedIndex = 0
            document.getElementById('ngayXem').selectedIndex = 0
            document.getElementById('xuatChieu').selectedIndex = 0
        }
    }
    const rapSelectChange = (data) => {
        dispatch({
            type: 'GET_CUM_RAP',
            maRap: data.target.value
        })
        setXuatChieu('')
        setMaLichChieu('')
        if (document.getElementById('cumRap').selectedIndex !== 0) {
            document.getElementById('cumRap').selectedIndex = 0
            document.getElementById('ngayXem').selectedIndex = 0
            document.getElementById('xuatChieu').selectedIndex = 0
        }
    }
    const cumRapSelectChange = (data) => {
        dispatch({
            type: 'GET_LICH_CHIEU',
            maCumRap: data.target.value
        })
        setXuatChieu('')
        setMaLichChieu('')
        if (document.getElementById('ngayXem').selectedIndex !== 0) {
            document.getElementById('ngayXem').selectedIndex = 0
            document.getElementById('xuatChieu').selectedIndex = 0
        }
    }
    const ngayXemSelectChange = (data) => {
        var result = lichChieu.filter(value => value.ngayChieuGioChieu.includes(data.target.value))
        setXuatChieu(result)
        setMaLichChieu('')
        if (document.getElementById('xuatChieu').selectedIndex !== 0) {
            document.getElementById('xuatChieu').selectedIndex = 0
        }
    }
    const xuatChieuSelectChange = (data) => {
        var result = lichChieu.filter(value => value.ngayChieuGioChieu.includes(data.target.value))
        setMaLichChieu(result[0].maLichChieu)
    }



    const checkMaLichChieu = () => {
        if (!maLichChieu)
            swal({ text: "Chưa chọn xuất chiếu !", icon: "warning", });
    }
    return (
        <section id="selectFilm" className="d-none d-lg-block">
            <div className="card ml-auto mr-auto">
                <nav className="navbar navbar-expand-md p-0">
                    <ul className="navbar-nav w-100">
                        <li className="nav-item main-block border-right d-flex align-items-center">
                            <select className="w-100" onChange={phimSelectChange}>
                                <option disabled selected hidden>Phim</option>
                                {renderPhim()}
                            </select>
                        </li>
                        <li className="nav-item small-block border-right d-flex align-items-center">
                            <select className="w-100" onChange={rapSelectChange} id="rap">
                                <option disabled selected hidden>Rạp</option>
                                {renderRapChieu()}
                            </select>
                        </li>
                        <li className="nav-item small-block border-right d-flex align-items-center">
                            <select className="w-100" onChange={cumRapSelectChange} id="cumRap">
                                <option disabled selected hidden>Cụm rạp</option>
                                {renderCumRapChieu()}
                            </select>
                        </li>
                        <li className="nav-item small-block border-right d-flex align-items-center">
                            <select className="w-100" onChange={ngayXemSelectChange} id="ngayXem">
                                <option disabled selected hidden>Ngày xem</option>
                                {renderNgayXem()}
                            </select>
                        </li>
                        <li className="nav-item small-block border-right d-flex align-items-center">
                            <select className="w-100" onChange={xuatChieuSelectChange} id="xuatChieu">
                                <option disabled selected hidden>Xuất chiếu</option>
                                {renderXuatChieu()}
                            </select>
                        </li>
                        <li className="nav-item small-block" style={{ display: 'flex', alignItems: 'center', padding: '0 1rem' }}>
                            {maLichChieu ?
                                <a type="button" href={`/BookingTicket/${maLichChieu}`}
                                    className="btn btn-dark w-100" onClick={checkMaLichChieu}>MUA VÉ NGAY</a> :
                                <a type="button"
                                    className="btn btn-dark w-100" onClick={checkMaLichChieu}>MUA VÉ NGAY</a>}
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}
