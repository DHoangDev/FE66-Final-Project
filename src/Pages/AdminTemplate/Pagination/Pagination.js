import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Table from './Table';

import { GROUP_ID } from '../../../Util/Setting';
import {
    nguoiDungAction,
    nguoiDungPhanTrangAction,
} from '../../../Redux/Action/QuanLyNguoiDungAction';

export default function Pagination() {

    const dispatch = useDispatch();
    const { arrNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);

    useEffect(() => {
        const actionNguoiDung = nguoiDungAction(GROUP_ID);
        dispatch(actionNguoiDung);
    }, [])

    const getData = () => {
        const soPhanTu = document.getElementById('itemNums').value;
        const actionNguoiDungPhanTrang = nguoiDungPhanTrangAction(GROUP_ID, soPhanTu);
        dispatch(actionNguoiDungPhanTrang);
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <h3 className="">Quản lý người dùng</h3>
            </div>
            <div className="col-md-12">
                <Table
                    arrNguoiDung={arrNguoiDung}
                    totalItems={arrNguoiDung.length}
                    getData={getData}
                />
            </div>
        </div>
    )
}
