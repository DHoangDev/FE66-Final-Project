import { USER_LOGIN } from "../../util/setting";
import { DANG_NHAP } from "../action/type/QuanLyNguoiDungType"




let usLogin = {};
if(localStorage.getItem(USER_LOGIN)){
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}


const initialState = {
    userLogin:usLogin,
}

export const QuanLyNguoiDungReducer= (state = initialState,action) => {
    switch (action.type) {

    case DANG_NHAP:
        return { ...state,userLogin:action.userLogin}
    default:
        return state
    }
}
