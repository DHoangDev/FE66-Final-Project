import { USER_LOGIN } from "../../Util/Setting";

let usLogin = null;
if (localStorage.getItem(USER_LOGIN)) {
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}

let initialState = {
    userLogin: usLogin,
    arrAdmin: [],
    arrLoaiNguoiDung: [],
    arrNguoiDung: [],
    arrNguoiDungTemp: [],
}

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DANG_NHAP': {
            return { ...state, userLogin: action.userLogin }
        }
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
            state.arrNguoiDungTemp = action.arrNguoiDung
            return { ...state }
        }
        case 'SEARCH_USER':
            let arrNguoiDungUpdate = [...state.arrNguoiDungTemp];
            if (action.taiKhoan !== "") {
                let nguoiDungSearching = arrNguoiDungUpdate.filter(value => value.taiKhoan.toUpperCase().includes(action.taiKhoan.toUpperCase()))
                if (nguoiDungSearching.length !== 0) {
                    state.arrNguoiDung = nguoiDungSearching
                } else {
                    state.arrNguoiDung = ""
                }
            } else {
                state.arrNguoiDung = state.arrNguoiDungTemp
            }
            return { ...state }
        default:
            return state
    }
}
