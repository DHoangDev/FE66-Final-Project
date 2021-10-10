import React, { useState } from 'react'
import { Redirect } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';

import './Dashboard.css';

import { USER_LOGIN } from '../../../Util/Setting'
import Editfilm from '../FilmsManager/Editfilm';

export default function Dashboard() {

    const { arrPhim } = useSelector(state => state.QuanLyPhimReducer);
    const { arrNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
    const dispatch = useDispatch();

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

    const show = () => {
        console.log(arrPhim)
        console.log(arrNguoiDung)
    }

    return (
        <div id="dashboard">
            <div className="row">
                <div className="col-6"><h3 >Dashboard</h3></div>
                <div className="col-6"><div className="text-right">
                    <button className="btn btn-primary ml-auto" onClick={() => { show() }}
                        style={{ fontSize: '.8rem' }}>Generate Report <i class="fas fa-download"></i>
                    </button>
                </div></div>
            </div>
            <div className="row mb-5">
                <div className="col-3">
                    <div className="card blue p-3">
                        <h5><b>Film</b></h5>
                        <div style={{ height: '60px', display: 'flex', alignItems: 'center' }}><h3>{arrPhim.length}</h3></div>
                        <div><i class="fas fa-chart-line"></i> <span>1,2%</span>
                            <span className="ml-3"><b>Since Last Month</b></span>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card green p-3">
                        <h5><b>User</b></h5>
                        <div style={{ height: '60px', display: 'flex', alignItems: 'center' }}><h3>{arrNguoiDung.length}</h3></div>
                        <div><i class="fas fa-chart-line"></i> <span>1,2%</span>
                            <span className="ml-3"><b>Since Last Month</b></span>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card orange p-3">
                        <h5><b>Lorem</b></h5>
                        <div style={{ height: '60px', display: 'flex', alignItems: 'center' }}><h3>12.345</h3></div>
                        <div><i class="fas fa-chart-line"></i> <span>1,2%</span>
                            <span className="ml-3"><b>Since Last Month</b></span>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card red p-3">
                        <h5><b>Lorem</b></h5>
                        <div style={{ height: '60px', display: 'flex', alignItems: 'center' }}><h3>12.345</h3></div>
                        <div><i class="fas fa-chart-line"></i> <span>1,2%</span>
                            <span className="ml-3"><b>Since Last Month</b></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <Editfilm />
                </div>
            </div>
        </div>
    )

}
