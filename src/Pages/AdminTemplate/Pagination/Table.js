import React, { useEffect, useState } from 'react'

export default function Table({ items, itemsPerPage, totalItems, paginate, currentPage, search }) {

    const pages = 10;
    const pageNumbers = [];
    const minPage = 1;
    const maxPage = Math.ceil(totalItems / itemsPerPage);
    const [disablePre, setDisablePre] = useState('disabled')
    const [disableNext, setDisableNext] = useState('')

    for (let i = 1; i <= maxPage; i++) {
        pageNumbers.push(i)
    }

    const renderTable = () => {
        if (items) {
            return items.map((value, index) => {
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
    const paginationChange = (value) => {
        paginate(value)
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

    const renderPageNumber = () => {
        return pageNumbers.map((value, index) => {
            if (currentPage === value) {
                return (
                    <li className="page-item active" key={index}>
                        <a className="page-link" href="#" onClick={() => paginationChange(value)}>{value}</a>
                    </li>
                )
            } else {
                return (
                    <li className="page-item" key={index}>
                        <a className="page-link" href="#" onClick={() => paginationChange(value)}>{value}</a>
                    </li>
                )
            }
        })
    }

    const pre = () => {
        paginate(currentPage - 1)
        setDisableNext('')
        if (currentPage - 1 <= minPage)
            setDisablePre('disabled')
    }
    const next = () => {
        paginate(currentPage + 1)
        setDisablePre('')
        if (currentPage + 1 >= maxPage)
            setDisableNext('disabled')
    }

    return (
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-3">
                    <input
                        className="form-control my-2"
                        placeholder="Nhập tài khoản ..."
                        onKeyUp={(e) => { search(e.target.value) }}
                    />
                </div>
            </div>
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
            <div className="row">
                <div className="col-md-9">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-sm">
                            <li className={`page-item ${disablePre}`}>
                                <a class="page-link" onClick={pre} href="#">Previous</a></li>
                            {renderPageNumber()}
                            <li className={`page-item ${disableNext}`}>
                                <a className="page-link" onClick={next} href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    )
}
