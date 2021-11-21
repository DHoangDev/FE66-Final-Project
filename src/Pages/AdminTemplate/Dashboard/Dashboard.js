import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert'

import './Dashboard.css';

import { USER_LOGIN, GROUP_ID } from '../../../Util/Setting'
import { nguoiDungAction } from '../../../Redux/Action/QuanLyNguoiDungAction';
import Editfilm from '../FilmsManager/Editfilm';

export default function Dashboard() {

    const { arrPhim, arrPhimTemp } = useSelector(state => state.QuanLyPhimReducer);
    const { arrNguoiDung, arrNguoiDungTemp } = useSelector(state => state.QuanLyNguoiDungReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const actionNguoiDung = nguoiDungAction(GROUP_ID);
        dispatch(actionNguoiDung);
    }, [])



    const show = () => {
        console.log(arrPhim)
        console.log(arrNguoiDung)
    }


    return (
        <div id="dashboard">
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3"><h3 >Dashboard</h3></div>
                <div className="col-12 d-none d-lg-block col-lg-3"></div>
                <div className="col-12 d-none d-lg-block col-lg-3"></div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="text-right mb-3">
                        <button className="btn btn-primary ml-auto" onClick={() => { show() }}
                            style={{ fontSize: '.8rem' }}>Generate Report <i class="fas fa-download"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-md-6 col-lg-3">
                    <div className="card blue p-3">
                        <h5><b>Film</b></h5>
                        <div style={{ height: '60px', display: 'flex', alignItems: 'center' }}><h3>{arrPhimTemp.length}</h3></div>
                        <div><i class="fas fa-chart-line"></i> <span>1,2%</span>
                            <span className="ml-3"><b>Since Last Month</b></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card green p-3">
                        <h5><b>User</b></h5>
                        <div style={{ height: '60px', display: 'flex', alignItems: 'center' }}><h3>{arrNguoiDungTemp.length}</h3></div>
                        <div><i class="fas fa-chart-line"></i> <span>1,2%</span>
                            <span className="ml-3"><b>Since Last Month</b></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card orange p-3">
                        <h5><b>Lorem</b></h5>
                        <div style={{ height: '60px', display: 'flex', alignItems: 'center' }}><h3>12.345</h3></div>
                        <div><i class="fas fa-chart-line"></i> <span>1,2%</span>
                            <span className="ml-3"><b>Since Last Month</b></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
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
