import React, { useEffect, useState } from 'react'

export default function Table({ items, itemsPerPage, totalItems, paginate, currentPage, search }) {

    const pages = 10;
    const pageNumbers = [];
    const minPage = 1;
    const maxPage = Math.ceil(totalItems / itemsPerPage);
    const [disablePre, setDisablePre] = useState('disabled')
    const [disableNext, setDisableNext] = useState('')

    for (let i = 1; i <= pages; i++) {
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
    const renderPageNumber = () => {
        return pageNumbers.map((value, index) => {
            if (currentPage === value) {
                return (
                    <li class="page-item active" key={index}>
                        <a class="page-link" href="#" onClick={() => paginate(value)}>{value}</a>
                    </li>
                )
            } else {
                return (
                    <li class="page-item" key={index}>
                        <a class="page-link" href="#" onClick={() => paginate(value)}>{value}</a>
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
    const disNextButton = () => {
        console.log(Math.ceil(totalItems / itemsPerPage))
        Math.ceil(totalItems / itemsPerPage) === 1 ? setDisableNext('disabled') : setDisableNext('')
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
            <table class="table table-hover table-dark" onChange={disNextButton}>
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
                        <ul class="pagination pagination-sm">
                            <li class={`page-item ${disablePre}`}>
                                <a class="page-link" onClick={pre} href="#">Previous</a></li>
                            {renderPageNumber()}
                            <li class={`page-item ${disableNext}`}>
                                <a class="page-link" onClick={next} href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    )
}
