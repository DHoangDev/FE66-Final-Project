import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';

import './Edituser.css'

import { USER_LOGIN, GROUP_ID } from '../../../Util/Setting';
import {
    loaiNguoiDungAction,
    nguoiDungAction,
    editNguoiDungAction,
    deleteNguoiDungAction
} from '../../../Redux/Action/QuanLyNguoiDungAction';

import { Table, Space } from 'antd';

export default function Edituser() {

    const { arrLoaiNguoiDung, arrNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
    const dispatch = useDispatch();
    const [account, setAccount] = useState({});
    const [check, setTurn] = useState(true);
    const [data, setdata] = useState(arrNguoiDung)

    useEffect(() => {
        const actionNguoiDung = nguoiDungAction(GROUP_ID);
        const actionLoaiNguoiDung = loaiNguoiDungAction();
        dispatch(actionNguoiDung);
        dispatch(actionLoaiNguoiDung);
    }, [])

    if (!localStorage.getItem(USER_LOGIN)) {
        alert('Đăng nhập để vào trang này !');
        return <Redirect to="/Home" />
    } else {
        let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
        if (userLogin.maLoaiNguoiDung !== "QuanTri") {
            alert('Không đủ quyền truy cập !');
            return <Redirect to="/Home" />
        }
    }

    const confirmEditData = () => {
        var dataSend = {
            taiKhoan: account,
            matKhau: document.getElementById('userModalPassword2').value,
            email: document.getElementById('userModalEmail').value,
            soDt: document.getElementById('userModalPhoneNumber').value,
            maNhom: GROUP_ID,
            maLoaiNguoiDung: document.getElementById('permissionFormControlSelect').value,
            hoTen: document.getElementById('userModalName').value,
        }
        const actionEditNguoiDung = editNguoiDungAction(dataSend);
        dispatch(actionEditNguoiDung);
    }
    const editData = (dataInput) => {
        setAccount(dataInput.taiKhoan)
        document.getElementById('userModalEmail').value = dataInput.email
        document.getElementById('userModalPhoneNumber').value = dataInput.soDt
        document.getElementById('permissionFormControlSelect').value = dataInput.maLoaiNguoiDung
        document.getElementById('userModalName').value = dataInput.hoTen
    }
    const deleteData = (dataInput) => {
        var result = window.confirm("Want to delete " + dataInput.hoTen + " ?");
        if (result) {
            const actionDeleteNguoiDung = deleteNguoiDungAction(dataInput.taiKhoan);
            dispatch(actionDeleteNguoiDung);
        }
    }
    const passwordValidation = () => {
        var pass = document.getElementById('userModalPassword1').value;
        var passConfirm = document.getElementById('userModalPassword2').value;
        pass !== passConfirm ? setTurn(false) : setTurn(true)
    }

    const renderLoaiNguoiDung = () => {
        return arrLoaiNguoiDung.map((value, index) => {
            if (value.maLoaiNguoiDung === 'QuanTri') {
                return <option value={value.maLoaiNguoiDung} key={index} selected>{value.tenLoai}</option>
            } else {
                return <option value={value.maLoaiNguoiDung} key={index}>{value.tenLoai}</option>
            }
        })
    }

    const columns = [
        {
            title: 'Tên người dùng',
            dataIndex: 'hoTen',
            key: 'hoTen',
            width: '15%',
            sorter: (a, b) => {
                if (String(a.hoTen.toLowerCase()) < String(b.hoTen.toLowerCase())) { return -1; }
                if (String(a.hoTen.toLowerCase()) > String(b.hoTen.toLowerCase())) { return 1; }
                return 0;
            },
        }, {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            key: 'taiKhoan',
            width: '16%',
            sorter: (a, b) => {
                if (String(a.taiKhoan.toLowerCase()) < String(b.taiKhoan.toLowerCase())) { return -1; }
                if (String(a.taiKhoan.toLowerCase()) > String(b.taiKhoan)) { return 1; }
                return 0;
            }
        }, {
            title: 'Mật khẩu',
            dataIndex: 'matKhau',
            key: 'matKhau',
            width: '13%',
            sorter: (a, b) => {
                if (String(a.matKhau) < String(b.matKhau)) { return -1; }
                if (String(a.matKhau) > String(b.matKhau)) { return 1; }
                return 0;
            }
        }, {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a, b) => {
                if (String(a.email.toLowerCase()) < String(b.email.toLowerCase())) { return -1; }
                if (String(a.email.toLowerCase()) > String(b.email.toLowerCase())) { return 1; }
                return 0;
            }
        }, {
            title: 'Số điện thoại',
            dataIndex: 'soDt',
            key: 'soDt',
            width: '11%',
            sorter: (a, b) => {
                if (String(a.soDt) < String(b.soDt)) { return -1; }
                if (String(a.soDt) > String(b.soDt)) { return 1; }
                return 0;
            }
        }, {
            title: 'Loại người dùng',
            dataIndex: 'maLoaiNguoiDung',
            key: 'maLoaiNguoiDung',
            width: '12%',
            sorter: (a, b) => {
                if (String(a.maLoaiNguoiDung) < String(b.soDt)) { return -1; }
                if (String(a.maLoaiNguoiDung) > String(b.maLoaiNguoiDung)) { return 1; }
                return 0;
            }
        }, {
            title: 'Tác vụ',
            key: 'action',
            width: '15%',
            render: (record) => (
                <Space size="middle">
                    <button type="button" data-toggle="modal" data-target="#userModal" className="btn btn-success"
                        style={{ fontSize: '.85rem' }} onClick={() => { editData(record) }}>Edit</button>
                    <button className="btn btn-danger" style={{ fontSize: '.85rem' }} onClick={() => { deleteData(record) }}>Delete</button>
                </Space>
            ),
        }
    ]

    const search = (dataInput) => {
        var result = data.filter(value => value.hoTen == dataInput)
        if (result.length !== 0) {
            setdata(result)
        } else {
            setdata(arrNguoiDung)
        }
    }

    return (
        <div>
            <div className="modal fade" id="userModal" tabIndex={-1} aria-labelledby="userModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="userModalLabel">Update User Information</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-7">
                                        <label htmlFor="userModalName">Name</label>
                                        <input type="text" className="form-control" id="userModalName" />
                                    </div>
                                    <div className="form-group col-md-5">
                                        <label for="permissionFormControlSelect">Permission</label>
                                        <select class="form-control" id="permissionFormControlSelect">
                                            {renderLoaiNguoiDung()}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userModalEmail">Email</label>
                                    <input type="email" className="form-control" id="userModalEmail" placeholder="example@gmail.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userModalPassword1">New Password</label>
                                    <input type="password" className="form-control" id="userModalPassword1"
                                        onChange={() => { passwordValidation() }} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userModalPassword2">Confirm Password</label>
                                    <input type="password" className="form-control" id="userModalPassword2"
                                        onChange={() => { passwordValidation() }} aria-describedby="userPasswordHelp" />
                                    {(() => {
                                        if (check) {
                                            return (<small id="userPasswordHelp" className="form-text text-danger d-none">
                                                ...
                                            </small>)
                                        } else {
                                            return (<small id="userPasswordHelp" className="form-text text-danger">
                                                Not Matching ! Please Retype Your Password !
                                            </small>)
                                        }
                                    })()}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userModalPhoneNumber">Phone Number</label>
                                    <input type="tel" className="form-control" id="userModalPhoneNumber" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => { confirmEditData() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <h3>User Management</h3>
            <input
                placeholder="Search Name"
                onKeyUp={(e) => { search(e.target.value) }}
            />
            <Table
                columns={columns} dataSource={arrNguoiDung} responsive={true}
                pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '20', '30', '40'] }}
            />
        </div>
    )
}
