import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Table({ arrNguoiDung, totalItems, getData }) {

    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [disablePre, setDisablePre] = useState('disabled');
    const [disableNext, setDisableNext] = useState('');

    const minPage = 1;
    const maxPage = Math.ceil(totalItems / itemsPerPage); // Total page

    // Current Items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = arrNguoiDung.slice(indexOfFirstItem, indexOfLastItem)


    // Search
    const search = (dataInput) => {
        dispatch({
            type: 'SEARCH_USER',
            taiKhoan: dataInput,
        })
    }
    const searchPart = () => {
        return (
            <div className="col-md-2">
                <div className="form-group input-group-sm">
                    <input
                        className="form-control"
                        placeholder="Nhập tài khoản ..."
                        onKeyUp={(e) => {
                            search(e.target.value);
                        }}
                    />
                </div>
            </div>
        )
    }


    // Items per page
    const itemPerPage = (e) => {
        setItemsPerPage(e.target.value)
        paginationChange(1)
    }
    const selectItemPerPage = () => {
        return (
            <div className="col-md-2">
                <div className="form-group">
                    <select className="custom-select custom-select-sm w-75" onChange={itemPerPage}>
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
        )
    }


    // Get items
    const getItems = () => {
        return (
            <div className="col-md-4">
                <div className="form-group d-flex align-items-center">
                    <label for="itemNums" className="m-0">Số lượng người dùng muốn lấy :</label>
                    <input type="text" id="itemNums" className=" form-control form-control-sm mx-2 w-25" />
                    <button className="btn btn-primary btn-sm"
                        onClick={() => {
                            getData();
                            setCurrentPage(1);
                        }}>Show</button>
                </div>
            </div>
        )
    }


    // Table
    const renderTable = () => {
        if (currentItems) {
            return currentItems.map((value, index) => {
                return (
                    <tr key={index}>
                        <td style={{ verticalAlign: 'middle' }}>{value.hoTen}</td>
                        <td style={{ verticalAlign: 'middle' }}>{value.taiKhoan}</td>
                        <td style={{ verticalAlign: 'middle' }}>{value.matKhau}</td>
                        <td style={{ verticalAlign: 'middle' }}>{value.email}</td>
                        <td style={{ verticalAlign: 'middle' }}>{value.soDt}</td>
                        <td style={{ verticalAlign: 'middle' }}>{value.maLoaiNguoiDung}</td>
                        <td><button className="btn btn-success">OK</button></td>
                    </tr>
                )
            })
        } else {
            alert('khong tim thay')
        }
    }


    // Change Page
    const paginationChange = (value) => {
        setCurrentPage(value)
        if (value === minPage) {
            setDisablePre('disabled')
            setDisableNext('')
        }
        if (value === maxPage) {
            setDisableNext('disabled')
            setDisablePre('')
        }
        if (value > minPage && value < maxPage) {
            setDisableNext('')
            setDisablePre('')
        }
    }
    const pageNums = () => {
        let pageNumbers = [];
        let beforePages = currentPage - 2;
        let afterPages = currentPage + 2;
        if (currentPage > minPage) {
            pageNumbers.push(minPage)
            if (currentPage > minPage + 3) {
                pageNumbers.push('...')
            }
        }
        for (let pageLenght = beforePages; pageLenght <= afterPages; pageLenght++) {
            if (pageNumbers.findIndex(e => e === pageLenght) === -1)
                pageNumbers.push(pageLenght)
        }
        if (currentPage < maxPage) {
            if (currentPage < maxPage - 3)
                pageNumbers.push('...')
            if (pageNumbers.findIndex(e => e === maxPage) === -1)
                pageNumbers.push(maxPage)
        }
        return pageNumbers.map((value, index) => {
            if (value === currentPage) {
                return (
                    <li class="page-item active" aria-current="page" key={index}>
                        <a class="page-link" onClick={() => { paginationChange(value) }} href="#">{value}</a>
                    </li>
                )
            }
            if (value >= minPage && value <= maxPage) {
                return (
                    <li class="page-item" aria-current="page" key={index}>
                        <a class="page-link" onClick={() => { paginationChange(value) }} href="#">{value}</a>
                    </li>
                )
            }
            if (value === '...') {
                return (
                    <li class="page-item mx-2" aria-current="page" key={index}>
                        {value}
                    </li>
                )
            }
        })
    }
    const paginationButton = () => {
        if (arrNguoiDung.length <= itemsPerPage) {
            return (
                <ul className="pagination pagination-sm">
                    <li className="page-item disabled">
                        <a class="page-link">Previous</a>
                    </li>
                    {pageNums()}
                    <li className="page-item disabled">
                        <a className="page-link">Next</a>
                    </li>
                </ul>
            )
        }
        return (
            <ul className="pagination pagination-sm">
                <li className={`page-item ${disablePre}`}>
                    <a class="page-link" href="#" onClick={() => { paginationChange(currentPage - 1) }}>Previous</a>
                </li>
                {pageNums()}
                <li className={`page-item ${disableNext}`}>
                    <a className="page-link" href="#" onClick={() => { paginationChange(currentPage + 1) }}>Next</a>
                </li>
            </ul>
        )
    }



    return (
        <div className="row">
            {searchPart()}
            {selectItemPerPage()}
            {getItems()}
            <div className="col-md-4">
                <div className="d-flex">
                    <nav className="ml-auto" aria-label="Page navigation example">
                        {paginationButton()}
                    </nav>
                </div>
            </div>
            <div className="col-md-12">
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Tên người dùng</th>
                            <th scope="col">Tài khoản</th>
                            <th scope="col">Mật khẩu</th>
                            <th scope="col">Email</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Loại người dùng</th>
                            <th scope="col">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
