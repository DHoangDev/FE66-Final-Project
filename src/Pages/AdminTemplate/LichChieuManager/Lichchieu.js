import React from 'react'
import { Redirect } from "react-router-dom"

import { USER_LOGIN, ACCESS_TOKEN } from '../../../Util/Setting'

export default function Lichchieu() {

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

    return (
        <div>
            This is Lich Chieu
        </div>
    )
}
