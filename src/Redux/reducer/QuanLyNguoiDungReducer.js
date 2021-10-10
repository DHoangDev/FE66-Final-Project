import { USER_LOGIN } from "../../Util/Setting";
import { DANG_NHAP, SET_THONG_TIN_NGUOI_DUNG } from "../Action/Type/QuanLyNguoiDungType"




let usLogin = {};
if(localStorage.getItem(USER_LOGIN)){
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}


let initialState = {
    userLogin: usLogin,
    thongTinNguoiDung:{},
    arrAdmin: [],
    arrLoaiNguoiDung: [],
    arrNguoiDung: [],
}

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {

        case DANG_NHAP:
            return { ...state,userLogin:action.userLogin}
            
        case SET_THONG_TIN_NGUOI_DUNG:
            return{...state,thongTinNguoiDung:action.thongTinNguoiDung}

        case 'SET_ADMIN': {
            state.arrAdmin = action.arrAdmin
            return { ...state }
        }
        case 'SET_LOAI_NGUOI_DUNG': {
            state.arrLoaiNguoiDung = action.arrLoaiNguoiDung
            return { ...state }
        }
        case 'SET_NGUOI_DUNG': {
            state.arrNguoiDung = action.arrNguoiDung
            return { ...state }
        }
        default:
            return state
    }
}
