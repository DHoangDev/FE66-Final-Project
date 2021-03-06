import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';

import { USER_LOGIN, ACCESS_TOKEN } from '../../../Util/Setting.js'
export default function UserLogin(props) {
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
    console.log('userLogin', userLogin)

    return (
        <Fragment>
            {
                localStorage.getItem(USER_LOGIN) ?
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="nav-avatar mr-2" src="./assets/images/avatar.png" alt="" />
                            {userLogin.hoTen}
                        </a>
                        <div className="dropdown-menu dropdown-user" aria-labelledby="userDropdown">
                            <a className="dropdown-item" href="/User">Thông tin cá nhân</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" onClick={() => {
                                localStorage.removeItem(USER_LOGIN);
                                localStorage.removeItem(ACCESS_TOKEN);
                                window.location.reload()
                            }}>Đăng xuất</a>
                        </div>
                    </li> :
                    <li className="nav-item">
                        <a className="nav-link border-right" href="/Login">
                            <img className="nav-avatar mr-2" src="./assets/images/avatar.png" alt="" />
                            Đăng nhập
                        </a>
                    </li>
            }
        </Fragment>
    )

}