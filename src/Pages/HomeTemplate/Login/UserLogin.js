import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';

import {USER_LOGIN} from  '../../../Util/Setting.js'
export default function UserLogin(props) {
    const {userLogin} = useSelector(state=>state.QuanLyNguoiDungReducer);
    console.log('userLogin',userLogin)

    return (
        <Fragment>
            <li className="nav-item">
                <a className="nav-link border-right" href="/Login">
                    <img className="nav-avatar mr-2" src="./assets/images/avatar.png" alt="" />
                         {localStorage.getItem(USER_LOGIN) ? userLogin.hoTen :'Đăng nhập'}
                </a>
            </li>   
        </Fragment>
    )
  
}