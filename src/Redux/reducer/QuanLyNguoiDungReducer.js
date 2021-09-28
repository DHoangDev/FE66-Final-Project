import { USER_LOGIN } from "../../Util/Setting";
import { DANG_NHAP } from "../Action/Type/QuanLyNguoiDungType"




let usLogin = {};
if(localStorage.getItem(USER_LOGIN)){
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userLogin:usLogin,
}

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {

    case DANG_NHAP:
        return { ...state,userLogin:action.userLogin}
    default:
        return state
    }
}
