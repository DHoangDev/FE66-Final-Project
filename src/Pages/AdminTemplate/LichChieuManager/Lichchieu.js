import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { USER_LOGIN, GROUP_ID } from '../../../Util/Setting';

import { phimAction } from '../../../Redux/Action/PhimAction';
import { taoLichChieuAction } from '../../../Redux/Action/QuanLyDatVeAction';
import { rapChieuAction, cumRapTheoHeThongAction, cumRapAction } from '../../../Redux/Action/QuanLyXuatChieuAction';

import {
    Button,
    Form,
    DatePicker,
    Table,
} from 'antd';

export default function Lichchieu() {

    const { arrPhim } = useSelector(state => state.QuanLyPhimReducer);
    const { arrRap, arrCumRapTheoHeThong, arrCumRap_ChiTiet, arrPhimTheoCumRap, arrLichChieuTheoPhim } = useSelector(state => state.QuanLyXuatChieuReducer);
    const [maRap, setMaRap] = useState('')
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            maPhim: '',
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: '',
        },
        onSubmit: (values) => {
            console.log(values)
            dispatch(taoLichChieuAction(values));
        }
    })


    useEffect(() => {
        const actionPhim = phimAction(GROUP_ID);
        dispatch(actionPhim);
        const actionRapChieu = rapChieuAction();
        dispatch(actionRapChieu);
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
    const renderHeThongRap = () => {
        return arrRap.map((value, index) => {
            return <option value={value.maHeThongRap} key={index}>{value.tenHeThongRap}</option>
        })
    }
    const renderCumRap = () => {
        return arrCumRapTheoHeThong.map((value, index) => {
            return <option value={value.maCumRap} key={index}>{value.tenCumRap}</option>
        })
    }
    const renderCumRapTable = () => {
        return arrCumRap_ChiTiet.map((value, index) => {
            return <option value={value.maCumRap} key={index}>{value.tenCumRap}</option>
        })
    }
    const renderArrPhim = () => {
        if (arrPhimTheoCumRap) {
            console.log(arrPhimTheoCumRap)
            console.log(arrLichChieuTheoPhim)
            return arrPhimTheoCumRap.map((value, index) => {
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
    }



    const phimHandleChange = (data) => {
        formik.setFieldValue('maPhim', Number(data.target.value))
    }
    const handleChangeDatePicker = (dateString) => {
        var m = new Date(dateString);
        var newDateString = ("0" + m.getUTCDate()).slice(-2) + "/" +
            ("0" + (m.getUTCMonth() + 1)).slice(-2) + "/" + m.getUTCFullYear() + " " + ("16").slice(-2) + ":" + ("00").slice(-2) + ":" + ("00").slice(-2);
        //Convert from UTC time tring to "dd/MM/YYYY"
        formik.setFieldValue('ngayChieuGioChieu', newDateString)
    }
    const giaVeHandleChange = (data) => {
        formik.setFieldValue('giaVe', Number(data.target.value))
    }
    const handleChangeHeThongRap = (data) => {
        const actionCumRapTheoHeThong = cumRapTheoHeThongAction(data.target.value);
        dispatch(actionCumRapTheoHeThong);
    }
    const handleChangeCumRap = (data) => {
        console.log(data.target.value)
        formik.setFieldValue('maRap', data.target.value)
        setMaRap(data.target.value)
    }
    const huyCumRap = () => {
        formik.setFieldValue('maRap', '')
        setMaRap('')
    }



    const tableHeThongRap = (data) => {
        const actionCumRap = cumRapAction(data.target.value, GROUP_ID);
        dispatch(actionCumRap);
    }
    const tableCumRap = (data) => {
        dispatch({
            type: 'FIND_PHIM',
            maCumRap: data.target.value,
        })
    }
    const tablePhim = (data) => {
        console.log(data.target.value)
        dispatch({
            type: 'FIND_LICH_CHIEU_THEO_PHIM',
            maPhim: data.target.value,
        })
    }
    const columns = [
        {
            title: 'Mã lịch chiếu',
            dataIndex: 'maLichChieu',
            key: 'maLichChieu',
            width: '15%',
            sorter: (a, b) => {
                if ((a.maLichChieu) < (b.maLichChieu)) { return -1; }
                if ((a.maLichChieu) > (b.maLichChieu)) { return 1; }
                return 0;
            },
        }, {
            title: 'Mã rạp',
            dataIndex: 'maRap',
            key: 'maRap',
            width: '15%',
            sorter: (a, b) => {
                if ((a.maRap) < (b.maRap)) { return -1; }
                if ((a.maRap) > (b.maRap)) { return 1; }
                return 0;
            },
        }, {
            title: 'Tên rạp',
            dataIndex: 'tenRap',
            key: 'tenRap',
            width: '15%',
            sorter: (a, b) => {
                if (String(a.tenRap.toLowerCase()) < String(b.tenRap.toLowerCase())) { return -1; }
                if (String(a.tenRap.toLowerCase()) > String(b.tenRap.toLowerCase())) { return 1; }
                return 0;
            },
        }, {
            title: 'Ngày chiếu - Giờ chiếu',
            dataIndex: 'ngayChieuGioChieu',
            key: 'ngayChieuGioChieu',
            width: '15%',
            sorter: (a, b) => {
                if (String(a.ngayChieuGioChieu.toLowerCase()) < String(b.ngayChieuGioChieu.toLowerCase())) { return -1; }
                if (String(a.ngayChieuGioChieu.toLowerCase()) > String(b.ngayChieuGioChieu.toLowerCase())) { return 1; }
                return 0;
            },
        }, {
            title: 'Giá vé',
            dataIndex: 'giaVe',
            key: 'giaVe',
            width: '15%',
            sorter: (a, b) => {
                if ((a.giaVe) < (b.giaVe)) { return -1; }
                if ((a.giaVe) > (b.giaVe)) { return 1; }
                return 0;
            },
        }
    ]

    return (
        <div>
            <Form onSubmitCapture={formik.handleSubmit} labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal"
                initialValues={{ size: 'large', }} size="large">
                <h3 className="text-center">Thêm Lịch Chiếu</h3>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12">
                                <Form.Item label="Tên phim">
                                    <select class="custom-select" onChange={phimHandleChange}>
                                        <option disabled selected hidden>Please choose ...</option>
                                        {renderPhim()}
                                    </select>
                                </Form.Item>
                            </div>
                            <div className="col-12">
                                <Form.Item label="Ngày chiếu">
                                    <DatePicker name="ngayChieu" format="DD/MM/YYYY" onChange={handleChangeDatePicker} />
                                </Form.Item>
                            </div>
                            <div className="col-12">
                                <Form.Item label="Giá vé">
                                    <input name="giaVe" className="form-control" min={75000} onChange={giaVeHandleChange} />
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12">
                                <Form.Item label="Hệ thống rạp">
                                    <select class="custom-select" id="rapChieuFormSelect" onChange={handleChangeHeThongRap}>
                                        <option disabled selected hidden>Please choose ...</option>
                                        {renderHeThongRap()}
                                    </select>
                                </Form.Item>
                            </div>
                            <div className="col-12">
                                <Form.Item label="Cụm rạp">
                                    <select class="custom-select" onChange={handleChangeCumRap}>
                                        <option disabled selected hidden>Please choose ...</option>
                                        {renderCumRap()}
                                    </select>
                                </Form.Item>
                            </div>
                            <div className="col-12">
                                <Form.Item label="Mã cụm rạp">
                                    <span className="d-flex">
                                        <input type="text" className="form-control mr-1" value={maRap} disabled />
                                        <Button type="primary" className="ml-1" onClick={() => { huyCumRap() }}>Hủy chọn</Button>
                                    </span>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12">
                                <Form.Item label="Tác vụ">
                                    <button type="submit" className="btn btn-outline-success">Thêm Lịch Chiếu</button>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>

            <h3 className="text-center">Bảng Lịch Chiếu</h3>
            <div className="row mb-3">
                <div className="col-12 col-sm-6 col-md-3">
                    <b>Hệ thống rạp</b>
                    <select class="custom-select" onChange={tableHeThongRap}>
                        <option disabled selected hidden>Please choose ...</option>
                        {renderHeThongRap()}
                    </select>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <b>Cụm rạp</b>
                    <select class="custom-select" onChange={tableCumRap}>
                        <option disabled selected hidden>Please choose ...</option>
                        {renderCumRapTable()}
                    </select>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <b>Phim</b>
                    <select class="custom-select" onChange={tablePhim}>
                        <option disabled selected hidden>Please choose ...</option>
                        {renderArrPhim()}
                    </select>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <b>Tìm kiếm</b>
                    <input type="text" className="form-control" placeholder="Search ..." />
                </div>
            </div>
            <div>
                <Table
                    columns={columns} dataSource={arrLichChieuTheoPhim} responsive={true}
                    pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '20', '30', '40'] }}
                />
            </div>
        </div>
    )
}
