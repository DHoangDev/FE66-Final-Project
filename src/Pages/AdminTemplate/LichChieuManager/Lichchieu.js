import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { USER_LOGIN, GROUP_ID } from '../../../Util/Setting';
import { phimAction } from '../../../Redux/Action/PhimAction';
import { rapChieuAction, cumRapTheoHeThongAction } from '../../../Redux/Action/QuanLyXuatChieuAction';

import {
    Table,
    Space,
    Form,
    DatePicker,
} from 'antd';

export default function Lichchieu() {

    const { arrPhim } = useSelector(state => state.QuanLyPhimReducer);
    const { arrRap, arrCumRapTheoHeThong, arrRapTheoCumRap, cumRap } = useSelector(state => state.QuanLyXuatChieuReducer);
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
            // dispatch(addPhimAction(values));
        }
    })

    useEffect(() => {
        const actionPhim = phimAction(GROUP_ID);
        dispatch(actionPhim);
        const actionRapChieu = rapChieuAction();
        dispatch(actionRapChieu);
    }, [])

    if (!localStorage.getItem(USER_LOGIN)) {
        alert('Đăng nhập để vào trang này !');
        return <Redirect to="/Home" />
    } else {
        let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
        if (userLogin.maLoaiNguoiDung !== "QuanTri") {
            alert('Không đủ quyền truy cập !')
            return <Redirect to="/Home" />
        }
    }

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
    var renderCumRap = () => {
        return arrCumRapTheoHeThong.map((value, index) => {
            return <option value={value.maCumRap} key={index}>{value.tenCumRap}</option>
        })
    }



    const phimHandleChange = (data) => {
        formik.setFieldValue('maPhim', Number(data.target.value))
    }
    const handleChangeDatePicker = (dateString) => {
        var m = new Date(dateString);
        var newDateString = ("0" + m.getUTCDate()).slice(-2) + "/" +
            ("0" + (m.getUTCMonth() + 1)).slice(-2) + "/" + m.getUTCFullYear();
        // + "T" + ("00").slice(-2) + ":" + ("00").slice(-2) + ":" + ("00").slice(-2);
        //Convert from UTC time tring to "dd/MM/YYYY"
        formik.setFieldValue('ngayChieuGioChieu', newDateString)
    }
    const rapHandleChange = (data) => {
        formik.setFieldValue('maRap', data.target.value)
    }
    const giaVeHandleChange = (data) => {
        formik.setFieldValue('giaVe', Number(data.target.value))
    }



    const handleChangeHeThongRap = (data) => {
        const actionCumRapTheoHeThong = cumRapTheoHeThongAction(data.target.value);
        dispatch(actionCumRapTheoHeThong);
    }
    const handleChangeCumRap = (data) => {
        dispatch({
            type: 'RAP_THEO_CUM_RAP',
            arrRapTheoCumRap: data.target.value,
        })
    }
    const selectData = (data) => {
        document.getElementById('maRap').value = data.maRap
        formik.setFieldValue('maRap', String(data.maRap))
    }



    const columns = [
        {
            title: 'Mã rạp',
            dataIndex: 'maRap',
            key: 'maRap',
            width: '15%',
        }, {
            title: 'Tên rạp',
            dataIndex: 'tenRap',
            key: 'tenRap',
            width: '15%',
        }, {
            title: 'Tác vụ',
            key: 'action',
            width: '15%',
            render: (record) => (
                <Space size="middle">
                    <button type="button" data-toggle="modal" data-target="#userModal" className="btn btn-primary"
                        style={{ fontSize: '.85rem' }} onClick={() => { selectData(record) }}>Select</button>
                </Space>
            ),
        }
    ]

    return (
        <div>
            <Form onSubmitCapture={formik.handleSubmit} labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal"
                initialValues={{ size: 'large', }} size="large">
                <h3 className="text-center">Thêm Lịch Chiếu</h3>
                <div className="row">
                    <div className="col-6">
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
                                    <input name="giaVe" className="form-control" onChange={giaVeHandleChange} />
                                </Form.Item>
                            </div>
                            <div className="col-12">
                                <Form.Item label="Tác vụ">
                                    <button type="submit" className="btn btn-outline-success">Thêm Lịch Chiếu</button>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
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
                                <Form.Item label="Rạp">
                                    <input type="text" className="form-control" placeholder="Mã rạp" id="maRap" onChange={rapHandleChange} />
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
            <div className="form-group">
                <span><b>Cụm rạp được chọn:</b><b style={{ color: 'magenta', fontSize: '1rem' }}>&ensp;{cumRap ? cumRap : '...'}</b></span>
            </div>
            <Table columns={columns} dataSource={arrRapTheoCumRap} responsive={true}
                pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '20', '30', '40'] }} />
        </div>
    )
}
