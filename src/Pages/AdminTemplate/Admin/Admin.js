import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';

import { USER_LOGIN, GROUP_ID } from '../../../Util/Setting'
import { adminAction, loaiNguoiDungAction, editNguoiDungAction } from '../../../Redux/Action/QuanLyNguoiDungAction';

export default function Admin() {

    const { arrAdmin, arrLoaiNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
    const [check, setTurn] = useState(true)
    const dispatch = useDispatch();

    useEffect(() => {
        const actionAdmin = adminAction();
        const actionLoaiNguoiDung = loaiNguoiDungAction();
        dispatch(actionAdmin)
        dispatch(actionLoaiNguoiDung);
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

    const confirmEditData = () => {
        var dataSend = {
            taiKhoan: arrAdmin.taiKhoan,
            matKhau: document.getElementById('adminModalPassword2').value,
            email: document.getElementById('adminModalEmail').value,
            soDt: document.getElementById('adminModalPhoneNumber').value,
            maNhom: GROUP_ID,
            maLoaiNguoiDung: document.getElementById('adminPermissionFormControl').value,
            hoTen: document.getElementById('adminModalName').value,
        }
        const actionEditNguoiDung = editNguoiDungAction(dataSend);
        dispatch(actionEditNguoiDung);
    }

    const passwordValidation = () => {
        var pass = document.getElementById('adminModalPassword1').value;
        var passConfirm = document.getElementById('adminModalPassword2').value;
        pass !== passConfirm ? setTurn(false) : setTurn(true)
    }

    const renderLoaiNguoiDungModal = () => {
        return arrLoaiNguoiDung.map((value, index) => {
            if (value.maLoaiNguoiDung === arrAdmin.maLoaiNguoiDung) {
                return <option value={value.maLoaiNguoiDung} key={index} selected>{value.tenLoai}</option>
            } else {
                return <option value={value.maLoaiNguoiDung} key={index}>{value.tenLoai}</option>
            }
        })
    }
    const renderLoaiNguoiDung = () => {
        if (arrAdmin.maLoaiNguoiDung === "QuanTri") {
            return "Quản Trị"
        } else {
            return "Khách Hàng"
        }
    }
    const renderVeDaDat = () => {
        var arr = arrAdmin.thongTinDatVe
        if (arr) {
            return arr.map((value, index) => {
                return (
                    <tr key={index}>
                        <td width="25%">{value.maVe}</td>
                        <td width="25%">{value.tenPhim}</td>
                        <td width="25%">{value.ngayDat}</td>
                        <td width="25%"><img src={value.hinhAnh} alt="..." style={{ width: '50px' }} /></td>
                    </tr>
                )
            })
        }
    }

    return (
        <div>
            <div className="modal fade" id="adminModal" tabIndex={-1} aria-labelledby="adminModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="adminModalLabel">Update Admin Information</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-7">
                                        <label htmlFor="adminModalName">Name</label>
                                        <input type="text" className="form-control" id="adminModalName" value={arrAdmin.hoTen} />
                                    </div>
                                    <div className="form-group col-md-5">
                                        <label for="adminPermissionFormControl">Permission</label>
                                        <select class="form-control" id="adminPermissionFormControl">
                                            {renderLoaiNguoiDungModal()}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="adminModalEmail">Email</label>
                                    <input type="email" className="form-control" id="adminModalEmail" placeholder="example@gmail.com" value={arrAdmin.email} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="adminModalPassword1">New Password</label>
                                    <input type="password" className="form-control" id="adminModalPassword1"
                                        onChange={() => { passwordValidation() }} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="adminModalPassword2">Confirm Password</label>
                                    <input type="password" className="form-control" id="adminModalPassword2"
                                        onChange={() => { passwordValidation() }} aria-describedby="adminPasswordHelp" />
                                    {(() => {
                                        if (check) {
                                            return (<small id="adminPasswordHelp" className="form-text text-danger d-none">
                                                ...
                                            </small>)
                                        } else {
                                            return (<small id="adminPasswordHelp" className="form-text text-danger">
                                                Not Matching ! Please Retype Your Password !
                                            </small>)
                                        }
                                    })()}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="adminModalPhoneNumber">Phone Number</label>
                                    <input type="tel" className="form-control" id="adminModalPhoneNumber" value={arrAdmin.soDT} />
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
            <div className="row">
                <div className="col-4">
                    <h4>Thông Tin Cá Nhân</h4>
                    <div className="form-group">
                        <label htmlFor="adminName">Name</label>
                        <input type="text" className="form-control" id="adminName" value={arrAdmin.hoTen} disabled />
                    </div>
                    <div className="form-group">
                        <label for="adminPermission">Permission</label>
                        <input type="text" className="form-control" id="adminPermission" value={renderLoaiNguoiDung()} disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="adminEmail">Email</label>
                        <input type="email" className="form-control" id="adminEmail" placeholder="example@gmail.com" value={arrAdmin.email} disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="adminPassword">Password</label>
                        <input type="password" className="form-control" id="adminPassword"
                            value={arrAdmin.matKhau} disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="adminPhoneNumber">Phone Number</label>
                        <input type="tel" className="form-control" id="adminPhoneNumber" value={arrAdmin.soDT} disabled />
                    </div>
                    <div>
                        <button className="btn btn-success" type="button" data-toggle="modal" data-target="#adminModal">Cập Nhật</button>
                    </div>
                </div>
                <div className="col-8">
                    <h4>Danh Sách Vé Đã Đặt</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Mã Vé</th>
                                <th>Tên Phim</th>
                                <th>Ngày Đặt</th>
                                <th>Hình Ảnh</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderVeDaDat()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
