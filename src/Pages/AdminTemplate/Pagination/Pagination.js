import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Table from './Table';

import { USER_LOGIN, GROUP_ID } from '../../../Util/Setting';
import {
    nguoiDungAction,
    nguoiDungPhanTrangAction,
} from '../../../Redux/Action/QuanLyNguoiDungAction';

export default function Pagination() {

    const { arrNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const dispatch = useDispatch();

    useEffect(() => {
        const actionNguoiDung = nguoiDungAction(GROUP_ID);
        dispatch(actionNguoiDung);
    }, [])

    const getData = () => {
        const soPhanTu = document.getElementById('itemNums').value;
        const actionNguoiDungPhanTrang = nguoiDungPhanTrangAction(GROUP_ID, soPhanTu);
        dispatch(actionNguoiDungPhanTrang);
        setCurrentPage(1)
    }

    // Current Items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = arrNguoiDung.slice(indexOfFirstItem, indexOfLastItem)

    // Change Page
    const paginate = (value) => {
        setCurrentPage(value)
    }

    const itemPerPage = (e) => {
        setItemsPerPage(e.target.value)
    }

    const search = (dataInput) => {
        dispatch({
            type: 'SEARCH_USER',
            taiKhoan: dataInput,
        })
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <h3 className="">Quản lý người dùng</h3>
            </div>
            <div className="col-md-4">
                <div className="form-group d-flex align-items-center">
                    <label for="itemNums" className="m-0">Số lượng người dùng muốn lấy :</label>
                    <input type="text" id="itemNums" className=" form-control form-control-sm mx-2 w-25" />
                    <button className="btn btn-primary btn-sm" onClick={getData}>Show</button>
                </div>
            </div>
            <div className="col-md-4">
                <div className="form-group">
                    <select className="custom-select custom-select-sm w-50" onChange={itemPerPage}>
                        <option value="5">5 / page</option>
                        <option value="10" selected>10 / page</option>
                        <option value="20">20 / page</option>
                        <option value="50">50 / page</option>
                        <option value="100">100 / page</option>
                        <option value="200">200 / page</option>
                        <option value="350">350 / page</option>
                        <option value="500">500 / page</option>
                    </select>
                </div>
            </div>
            <Table
                items={currentItems}
                itemsPerPage={itemsPerPage}
                totalItems={arrNguoiDung.length}
                paginate={paginate}
                currentPage={currentPage}
                search={search}
            />
        </div>
    )
}
