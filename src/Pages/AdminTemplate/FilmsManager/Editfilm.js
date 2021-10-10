import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';

import Rating from '../../HomeTemplate/Home/HomeComponents/Content/CarouselFilm/Rating';
import { GROUP_ID } from '../../../Util/Setting';
import { phimAction, deletePhimAction } from '../../../Redux/Action/PhimAction';

import { Table, Space } from 'antd';

export default function Editfilm() {

    const { arrPhim } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const actionPhim = phimAction(GROUP_ID);
        dispatch(actionPhim);
    }, [])

    const editData = (data) => {

    }
    const deleteData = (dataInput) => {
        var result = window.confirm("Want to delete " + dataInput.tenPhim + " ?");
        if (result) {
            const actionDeletePhim = deletePhimAction(dataInput.maPhim);
            dispatch(actionDeletePhim);
        }
    }
    const confirmData = () => {

    }

    const columns = [
        {
            title: 'Mã Phim',
            dataIndex: 'maPhim',
            key: 'maPhim',
        }, {
            title: 'Tên Phim',
            key: 'tenPhim',
            render: (text) => (
                <p style={{ width: '170px' }}>{text.tenPhim}</p>
            )
        }, {
            title: 'Trailer',
            key: 'trailer',
            render: (text) => (
                <p style={{ width: '170px' }}>{text.trailer}</p>
            )
        }, {
            title: 'Trailer',
            key: 'trailer',
            render: (text) => (
                <img src={text.hinhAnh} style={{ width: '50px' }}></img>
            )
        }, {
            title: 'Mô Tả',
            key: 'moTa',
            render: (text) => (
                <p style={{
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    width: '250px'
                }}>
                    {text.moTa}
                </p>
            )
        }, {
            title: 'Mã Nhóm',
            dataIndex: 'maNhom',
            key: 'maNhom',
        }, {
            title: 'Khởi Chiếu',
            key: 'ngayKhoiChieu',
            render: (text) => {
                let dateString = text.ngayKhoiChieu, reggie = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
                var dateArray = reggie.exec(dateString);
                return (<div style={{ width: '80px' }}>{dateArray[3]}-{dateArray[2]}-{dateArray[1]}</div>)
            }
        }, {
            title: 'Đánh Giá',
            key: 'danhGia',
            render: (text) => (
                <span><Rating value={text.danhGia / 2} />&nbsp;&nbsp;{text.danhGia}/10</span>
            )
        }, {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <button type="button" data-toggle="modal" data-target="#filmModal" className="btn btn-success"
                        style={{ fontSize: '.85rem' }} onClick={() => { editData(record) }}>Edit</button>
                    <button className="btn btn-danger" style={{ fontSize: '.85rem' }} onClick={() => { deleteData(record) }}>Delete</button>
                </Space>
            ),
        }
    ]

    return (
        <div>
            <div className="modal fade" id="filmModal" tabIndex={-1} aria-labelledby="filmModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="filmModalLabel">Update Film Information</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => { confirmData() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Film Management</h3>
            <Table dataSource={arrPhim} columns={columns} responsive={true}
                pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '20', '30', '40'] }} />
        </div>
    )
}
